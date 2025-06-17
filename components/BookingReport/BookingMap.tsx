'use client';
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Map, MapPin, Play, CircleStop } from 'lucide-react';
import { formatDateTime } from '@/lib/dateUtils';
import ReactDOMServer from 'react-dom/server';
import TripLegend from './TripLeyendComponent';
import { getTripColor } from '@/lib/utils';

export default function BookingMap({ trips, mapboxPublicKey }: { trips: any[], mapboxPublicKey: string }) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<mapboxgl.Map | null>(null);

  // State to track which trips are selected
  const [selectedTrips, setSelectedTrips] = useState<Record<number, boolean>>(() => 
    trips.reduce((acc, _, index) => {
      acc[index] = true; // By default, all trips are selected
      return acc;
    }, {} as Record<number, boolean>)
  );

  // Toggle trip selection
  const handleTripToggle = (tripIndex: number) => {
    setSelectedTrips(prev => ({
      ...prev,
      [tripIndex]: !prev[tripIndex]
    }));
  };

  // Get selected trip indexes
  const getSelectedTripIndexes = (): number[] => 
    Object.entries(selectedTrips)
      .filter(([_, isSelected]) => isSelected)
      .map(([index]) => parseInt(index));

  // Helper function to normalize timestamp
  const normalizeTimestamp = (timestamp: number | string): number => {
    if (typeof timestamp === 'number') {
      return timestamp > 9999999999 ? timestamp / 1000 : timestamp;
    }
    return new Date(timestamp).getTime() / 1000;
  };

  // Helper function to get valid coordinates
  const getValidCoordinates = (trip: any, pointType: 'start' | 'end'): number[] | null => {
    try {
      // First, try map_data route coordinates
      if (
        trip.map_data &&
        trip.map_data[pointType] &&
        Array.isArray(trip.map_data[pointType]) &&
        trip.map_data[pointType].length === 2
      ) {
        const coord = [
          parseFloat(trip.map_data[pointType][1]),
          parseFloat(trip.map_data[pointType][0])
        ];
        if (isValidCoordinates(coord)) return coord;
      }

      // Then try event location coordinates
      const eventType = pointType === 'start' ? 'start_event' : 'end_event';
      if (
        trip[eventType] &&
        trip[eventType].location &&
        trip[eventType].location.coordinates &&
        Array.isArray(trip[eventType].location.coordinates) &&
        trip[eventType].location.coordinates.length === 2
      ) {
        const coord:any = [
          parseFloat(trip[eventType].location.coordinates[0]),
          parseFloat(trip[eventType].location.coordinates[1])
        ];
        if (isValidCoordinates(coord)) return coord;
      }

      return null;
    } catch (error) {
      console.error(`Error getting coordinates for ${pointType}:`, error);
      return null;
    }
  };

  // Coordinate validation
  const isValidCoordinates = (coord: any): boolean => {
    return (
      Array.isArray(coord) &&
      coord.length === 2 &&
      !isNaN(coord[0]) &&
      !isNaN(coord[1]) &&
      Math.abs(coord[1]) <= 90 &&
      Math.abs(coord[0]) <= 180
    );
  };

  // Safe timestamp formatting
  const safeFormatTimestamp = (timestamp: number | string): string => {
    try {
      if (!timestamp) return 'N/A';
      const normalized = normalizeTimestamp(timestamp);
      const date = new Date(normalized * 1000);
      if (isNaN(date.getTime())) return 'Invalid date';
      return formatDateTime(date);
    } catch {
      return 'Error formatting date';
    }
  };

  // Create custom marker for start/end points
  const createCustomMarker = (type: 'start' | 'end', tripIndex: number): HTMLDivElement => {
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.innerHTML = `
      <div style="
        position: relative;
        width: 32px;
        height: 32px;
        background-color: ${type === 'start' ? '#0ACF83' : '#FF5252'};
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 2px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      ">
        <span style="
          position: absolute;
          top: -20px;
          background-color: rgba(0,0,0,0.7);
          color: white;
          padding: 2px 6px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: bold;
        ">${tripIndex + 1}</span>
        ${ReactDOMServer.renderToString(
          type === 'start' 
            ? <Play color="white" size={16} /> 
            : <CircleStop color="white" size={16} />
        )}
      </div>
    `;
    return markerElement;
  };

  // Get valid route points
  const getValidRoutePoints = (trip: any): number[][] | null => {
    try {
      if (trip.map_data && Array.isArray(trip.map_data.route) && trip.map_data.route.length > 1) {
        let points = trip.map_data.route
          .filter((point: any) => Array.isArray(point) && point.length === 2)
          .map((point: any) => [parseFloat(point[1]), parseFloat(point[0])])
          .filter(isValidCoordinates);

        // Remove duplicate points
        points = points.reduce((acc: number[][], curr: number[]) => {
          if (acc.length === 0 || !arePointsClose(acc[acc.length - 1], curr)) {
            acc.push(curr);
          }
          return acc;
        }, []);

        return points.length >= 2 ? points : null;
      }
      return null;
    } catch (error) {
      console.error("Error extracting route points:", error);
      return null;
    }
  };

  // Check if points are close
  const arePointsClose = (point1: number[], point2: number[], threshold: number = 0.00001): boolean => {
    if (!point1 || !point2) return false;
    const latDiff = Math.abs(point1[1] - point2[1]);
    const lngDiff = Math.abs(point1[0] - point2[0]);
    return latDiff < threshold && lngDiff < threshold;
  };

  // Add route to map
  const addRouteToMap = (
    routePoints: number[][], 
    tripIndex: number, 
    color: string, 
    map: mapboxgl.Map, 
    bounds: mapboxgl.LngLatBounds
  ): boolean => {
    try {
      if (routePoints.length < 2) return false;
      const sourceId = `route-${tripIndex}`;
      map.addSource(sourceId, {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: routePoints,
          }
        }
      });
      map.addLayer({
        id: `route-line-${tripIndex}`,
        type: 'line',
        source: sourceId,
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': color,
          'line-width': 4
        }
      });
      routePoints.forEach((coord:any) => bounds.extend(coord));
      return true;
    } catch (error) {
      console.error(`Error adding route for trip ${tripIndex + 1}:`, error);
      return false;
    }
  };

  // Add start and end markers
  const addStartEndMarkers = (
    trip: any, 
    tripIndex: number, 
    map: mapboxgl.Map, 
    bounds: mapboxgl.LngLatBounds
  ): boolean => {
    let markersAdded = false;

    // Start marker
    const startCoord:any = getValidCoordinates(trip, 'start');
    if (startCoord) {
      const formattedTime = trip.start_event?.timestamp ? safeFormatTimestamp(trip.start_event.timestamp) : 'Time not available';
      new mapboxgl.Marker({
        element: createCustomMarker('start', tripIndex),
        anchor: 'center'
      })
        .setLngLat(startCoord)
        .setPopup(new mapboxgl.Popup().setHTML(`
          <strong>Trip ${tripIndex + 1} Start</strong><br>
          ${formattedTime}<br>${trip.origin_address || ''}
        `))
        .addTo(map);
      bounds.extend(startCoord);
      markersAdded = true;
    }

    // End marker
    const endCoord:any = getValidCoordinates(trip, 'end');
    if (endCoord) {
      const formattedTime = trip.end_event?.timestamp ? safeFormatTimestamp(trip.end_event.timestamp) : 'Time not available';
      new mapboxgl.Marker({
        element: createCustomMarker('end', tripIndex),
        anchor: 'center'
      })
        .setLngLat(endCoord)
        .setPopup(new mapboxgl.Popup().setHTML(`
          <strong>Trip ${tripIndex + 1} End</strong><br>
          ${formattedTime}<br>${trip.destination_address || ''}
        `))
        .addTo(map);
      bounds.extend(endCoord);
      markersAdded = true;
    }

    return markersAdded;
  };

  // Add direct route line if no detailed route
  const addDirectRouteLine = (
    trip: any, 
    tripIndex: number, 
    color: string, 
    map: mapboxgl.Map, 
    bounds: mapboxgl.LngLatBounds
  ): boolean => {
    const startPoint:any = getValidCoordinates(trip, 'start');
    const endPoint:any = getValidCoordinates(trip, 'end');
    
    if (startPoint && endPoint && !arePointsClose(startPoint, endPoint, 0.0001)) {
      try {
        const sourceId = `direct-route-${tripIndex}`;
        map.addSource(sourceId, {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [startPoint, endPoint],
            }
          }
        });
        map.addLayer({
          id: `direct-line-${tripIndex}`,
          type: 'line',
          source: sourceId,
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': color,
            'line-width': 3,
            'line-dasharray': [2, 1]
          }
        });
        bounds.extend(startPoint);
        bounds.extend(endPoint);
        return true;
      } catch (error) {
        console.error(`Error adding direct line for trip ${tripIndex + 1}:`, error);
        return false;
      }
    }
    return false;
  };

  // Main map rendering effect
  useEffect(() => {
    if (!trips || trips.length === 0 || typeof window === 'undefined' || !mapboxPublicKey || !mapContainerRef.current) {
      return;
    }

    // Cleanup previous map instance
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    mapboxgl.accessToken = mapboxPublicKey;

    try {
      const bookingMap = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-80.2, 25.8], 
        zoom: 10
      });

      mapInstanceRef.current = bookingMap;

      bookingMap.on('load', function() {
        const mapBounds = new mapboxgl.LngLatBounds();
        let hasAddedAnyValidData = false;

        // Filter trips to display
        const selectedIndexes = getSelectedTripIndexes();
        const tripsToDisplay = trips.filter((_, idx) => selectedIndexes.includes(idx));

        // Process each selected trip
        tripsToDisplay.forEach((trip, displayIndex) => {
          const actualIndex = trips.indexOf(trip);
          const tripColor = getTripColor(actualIndex);

          // Add route or direct line
          const routePoints = getValidRoutePoints(trip);
          if (routePoints && routePoints.length > 1) {
            if (addRouteToMap(routePoints, actualIndex, tripColor, bookingMap, mapBounds)) {
              hasAddedAnyValidData = true;
            }
          } else {
            // If no route, try to add a direct line
            if (addDirectRouteLine(trip, actualIndex, tripColor, bookingMap, mapBounds)) {
              hasAddedAnyValidData = true;
            }
          }

          // Add start/end markers
          if (addStartEndMarkers(trip, actualIndex, bookingMap, mapBounds)) {
            hasAddedAnyValidData = true;
          }
        });

        // Adjust map view
        if (hasAddedAnyValidData && !mapBounds.isEmpty()) {
          bookingMap.fitBounds(mapBounds, { 
            padding: 50,
            maxZoom: 15
          });
        } else {
          bookingMap.setCenter([-80.2, 25.8]);
          bookingMap.setZoom(10);
        }
      });
    } catch (error) {
      console.error('Map initialization error:', error);
      if (mapContainerRef.current) {
        mapContainerRef.current.innerHTML = `<div class="map-placeholder">
          <div>Error loading map: ${error instanceof Error ? error.message : 'Unknown error'}</div>
        </div>`;
      }
    }

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [trips, mapboxPublicKey, selectedTrips]);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <Map size={18} color="#3366FF" />
        </div>
        <h2 className="card-title">Booking Routes Overview</h2>
        </div>
      <div className="card-body">
        <div className="map-container">
          {!trips || trips.length === 0 ? (
            <div 
              className="map-placeholder" 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '400px',
                backgroundColor: '#f4f4f4',
                borderRadius: '8px',
                color: '#666'
              }}
            >
              <MapPin size={48} style={{ marginBottom: '1rem' }} />
              <div>No trip data available for map visualization</div>
            </div>
          ) : (
            <div
              ref={mapContainerRef}
              id="booking-map"
              style={{ width: '100%', height: '400px' }}
            ></div>
          )}
        </div>

        {trips && trips.length > 0 && (
          <>
            <TripLegend 
              trips={trips} 
              selectedTrips={selectedTrips}
              onTripToggle={handleTripToggle}
            />
            
            {/* Map legend */}
            <div
              style={{
                marginTop: '1.5rem',
                fontSize: '0.875rem',
                color: '#6B7280',
              }}
            >
              <div style={{ fontWeight: '500', marginBottom: '0.5rem' }}>
                Map Legend:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#0ACF83',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '6px',
                    }}
                    dangerouslySetInnerHTML={{ 
                      __html: ReactDOMServer.renderToString(<Play color="white" size={10} />)
                    }}
                  ></div>
                  <span>Start</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: '#FF5252',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '6px',
                    }}
                    dangerouslySetInnerHTML={{ 
                      __html: ReactDOMServer.renderToString(<CircleStop color="white" size={10} />)
                    }}
                  ></div>
                  <span>End</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}