// File: components/trip-report/TripRoute.jsx
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { formatDateTime } from "@/lib/dateUtils";
import {
  Play,
  CircleStop,
  DollarSign,
  MapPin,
  AlertTriangle,
  Gauge,
  AlertCircle,
} from "lucide-react";
import ReactDOMServer from "react-dom/server";

const CarCrash = ({ size = 24, color = 'currentColor', ...props }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 640 512" 
      fill={color}
      {...props}
    >
      <path d="M143.3 220.8l-12.4 46.4c-3 11.3-3.6 22.9-2.4 34.4l-35.2 29c-6.6 5.4-16.3-.4-14.6-8.8l15.4-76.7c1.1-5.3-2.7-10.3-8-10.8l-77.9-7.6c-8.5-.8-11.2-11.8-4.1-16.5l65.2-43.3c4.5-3 5.4-9.2 2-13.3L21.5 93.2c-5.4-6.6 .4-16.3 8.8-14.6l76.7 15.4c5.3 1.1 10.3-2.7 10.8-8l7.6-77.9c.8-8.5 11.8-11.2 16.6-4.1l43.3 65.1c3 4.5 9.2 5.4 13.3 2l60.4-49.7c6.6-5.4 16.3 .4 14.6 8.8L262.1 86.4c-2.7 3.1-5.4 6.1-7.9 9.4l-32.2 43-10.7 14.3c-32.7 8.8-59.2 34.5-68.1 67.7zm494.6 132.5l-12.4 46.4c-3.1 11.7-9.4 21.6-17.6 29.4a66.9 66.9 0 0 1 -8.8 7l-14 52.2c-1.1 4.3-3.1 8.1-5.7 11.4-7.7 9.8-20.7 14.7-33.5 11.3L515 502.6c-17.1-4.6-27.2-22.1-22.6-39.2l8.3-30.9-247.3-66.3-8.3 30.9c-4.6 17.1-22.1 27.2-39.2 22.6l-30.9-8.3c-12.8-3.4-21.7-14.2-23.4-26.5-.6-4.1-.4-8.4 .8-12.7l14-52.2a66.6 66.6 0 0 1 -4.1-10.5c-3.2-10.8-3.7-22.5-.5-34.2l12.4-46.4c5.3-19.8 19.4-34.8 36.9-42.2a64.3 64.3 0 0 1 18.5-4.7l18.1-24.2 32.2-43c3.5-4.6 7.2-8.9 11.2-12.8 8-7.9 17-14.4 26.7-19.5 4.9-2.5 9.9-4.7 15.1-6.5 10.3-3.6 21.2-5.6 32.2-6 11.1-.4 22.3 .8 33.4 3.8l122.7 32.9c11.1 3 21.5 7.5 30.9 13.4a111.1 111.1 0 0 1 34.7 34.5c8.8 13.9 14.6 29.8 16.7 47l6.4 53.3 3.6 30.1a64.5 64.5 0 0 1 22.7 29.9c4.4 11.9 5.3 25.2 1.8 38.4zM255.6 234.3c-18.6-5-34.2 4-39.2 22.5-5 18.5 4.1 34.1 22.7 39.1 18.6 5 45.5 15.5 50.5-3 5-18.5-15.4-53.7-34-58.6zm290.6 28.2l-6.4-53.3c-.6-4.9-1.9-9.5-3.8-13.9-5.8-13-17.2-23-31.4-26.8l-122.7-32.9a48 48 0 0 0 -50.9 17.6l-32.2 43 172 46.1 75.3 20.2zm18.5 54.7c-18.6-5-53.8 15.3-58.8 33.8-5 18.5 23.7 22.9 42.2 27.8 18.6 5 34.2-4 39.2-22.5 5-18.5-4.1-34.1-22.7-39.1z"/>
    </svg>
  );
};

export default function TripRoute({
  mapData,
  addresses,
  trip,
  tolls,
  mapboxPublicKey,
}) {
  const mapContainer = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (
      !mapData ||
      !mapData.route ||
      mapData.route.length < 2 ||
      !mapContainer.current ||
      typeof window === "undefined"
    ) {
      return;
    }

    mapboxgl.accessToken = mapboxPublicKey;

    try {
      // Destruir cualquier instancia anterior del mapa
      if (mapInstance.current) {
        mapInstance.current.remove();
      }

      // Crear nueva instancia del mapa
      mapInstance.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: mapData.start || [0, 0],
        zoom: 13,
      });

      mapInstance.current.on("load", function () {
        // Create bounds object
        const mapBounds = new mapboxgl.LngLatBounds();

        // Add route points to bounds
        mapData.route.forEach((point) => {
          mapBounds.extend([point[1], point[0]]);
        });

        // Transform coordinates for mapbox
        const routeCoordinates = mapData.route.map((point) => [
          point[1],
          point[0],
        ]);

        // Add route line
        mapInstance.current.addSource("route", {
          type: "geojson",
          data: {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: routeCoordinates,
            },
          },
        });

        mapInstance.current.addLayer({
          id: "route",
          type: "line",
          source: "route",
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3366FF",
            "line-width": 5,
          },
        });

        // Create start marker with Lucide icon
        const startEl = document.createElement("div");
        startEl.className = "custom-marker";
        startEl.innerHTML = ReactDOMServer.renderToString(
          <div
            style={{
              backgroundColor: "#0ACF83",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            <Play color="white" size={16} />
          </div>
        );

        // Add start marker with custom icon
        new mapboxgl.Marker(startEl)
          .setLngLat([mapData.start[1], mapData.start[0]])
          .setPopup(
            new mapboxgl.Popup().setHTML(`
            <div style="padding: 8px;">
              <strong>Start</strong><br>
              ${formatDateTime(trip?.start_event?.timestamp)}
            </div>
          `)
          )
          .addTo(mapInstance.current);

        // Create end marker with Lucide icon
        const endEl = document.createElement("div");
        endEl.className = "custom-marker";
        endEl.innerHTML = ReactDOMServer.renderToString(
          <div
            style={{
              backgroundColor: "#FF5252",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid white",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            <CircleStop color="white" size={16} />
          </div>
        );

        // Add end marker with custom icon
        new mapboxgl.Marker(endEl)
          .setLngLat([mapData.end[1], mapData.end[0]])
          .setPopup(
            new mapboxgl.Popup().setHTML(`
            <div style="padding: 8px;">
              <strong>End</strong><br>
              ${formatDateTime(trip?.end_event?.timestamp)}
            </div>
          `)
          )
          .addTo(mapInstance.current);

        // Add event markers (speeding, braking, etc.) with Lucide icons
        if (mapData.events && mapData.events.length > 0) {
          mapData.events.forEach((event) => {
            let iconComponent = <AlertCircle color="white" size={14} />;
            let bgColor = "#3366FF";
            let title = "Event";

            if (event.type === "braking") {
              iconComponent = <CarCrash color="white" size={16} />;
              bgColor = "#FF5252";
              title = "Hard Braking";
            } else if (event.type === "speeding") {
              iconComponent = <Gauge color="white" size={14} />;
              bgColor = "#FFC107";
              title = "Speeding";
            } else if (event.type === "dtc") {
              iconComponent = <AlertTriangle color="white" size={14} />;
              bgColor = "#FF00FF";
              title = "Diagnostic Code";
            }

            // Create event marker element
            const eventEl = document.createElement("div");
            eventEl.className = "custom-marker";
            eventEl.innerHTML = ReactDOMServer.renderToString(
              <div
                style={{
                  backgroundColor: bgColor,
                  width: "26px",
                  height: "26px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "2px solid white",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                {iconComponent}
              </div>
            );

            new mapboxgl.Marker(eventEl)
              .setLngLat([event.position[1], event.position[0]])
              .setPopup(
                new mapboxgl.Popup().setHTML(`
                <div style="padding: 8px;">
                  <strong>${title}</strong><br>
                  ${formatDateTime(event.timestamp)}
                  ${
                    event.type === "speeding"
                      ? `<br>Speed: ${event.speed} mph`
                      : ""
                  }
                  ${event.type === "dtc" ? `<br>Code: ${event.code}` : ""}
                </div>
              `)
              )
              .addTo(mapInstance.current);

            // Add to bounds
            mapBounds.extend([event.position[1], event.position[0]]);
          });
        }

        // Add toll markers with Lucide icons
        if (tolls && tolls.segments && tolls.segments.length > 0) {
          tolls.segments.forEach((toll, index) => {
            if (
              toll.location &&
              toll.location.latitude &&
              toll.location.longitude
            ) {
              // Create toll marker element with Lucide icon
              const tollEl = document.createElement("div");
              tollEl.className = "custom-marker";
              tollEl.innerHTML = ReactDOMServer.renderToString(
                <div
                  style={{
                    backgroundColor: "#8e44ad",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px solid white",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                  }}
                >
                  <DollarSign color="white" size={16} />
                </div>
              );

              // Create the toll popup content
              const popupContent = `
                <div style="padding: 10px; min-width: 160px;">
                  <div style="font-weight: bold; margin-bottom: 8px; border-bottom: 1px solid #eee; padding-bottom: 5px;">
                    Toll #${index + 1}
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span>Cost:</span>
                    <strong>${toll.incrementalCost.toFixed(2)} ${
                toll.currency || 'USD'
              }</strong>
                  </div>
                </div>
              `;

              // Add marker with popup
              new mapboxgl.Marker(tollEl)
                .setLngLat([toll.location.longitude, toll.location.latitude])
                .setPopup(new mapboxgl.Popup().setHTML(popupContent))
                .addTo(mapInstance.current);

              // Add to bounds
              mapBounds.extend([
                toll.location.longitude,
                toll.location.latitude,
              ]);
            }
          });
        }

        // Fit map to show all points with padding
        mapInstance.current.fitBounds(mapBounds, { padding: 50 });
      });
    } catch (error) {
      console.error("Map initialization error:", error);
      const mapElement = document.getElementById("trip-map");
      if (mapElement) {
        mapElement.innerHTML = `<div class="map-placeholder">
          <div style="color: #FF5252; margin-bottom: 1rem;">
            ${ReactDOMServer.renderToString(<AlertTriangle size={48} />)}
          </div>
          <div>Error loading map: ${error.message}</div>
        </div>`;
      }
    }
    
    // Cleanup function para destruir el mapa cuando se desmonte el componente
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, [mapData, trip, tolls, mapboxPublicKey]);

  // Check if tolls exist and have segments
  const hasTolls = tolls && tolls.segments && tolls.segments.length > 0;

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <MapPin size={18} />
        </div>
        <h2 className="card-title">Trip Route</h2>
        {hasTolls && (
          <div
            className="card-subtitle"
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              color: "#8e44ad",
            }}
          >
            <DollarSign size={16} style={{ marginRight: "5px" }} />
            <span>
              Includes {tolls.segments.length} toll
              {tolls.segments.length > 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>
      <div className="card-body">
        <div className="map-container">
          {!mapData || !mapData.route || mapData.route.length < 2 ? (
            <div className="map-placeholder">
              <MapPin size={48} style={{ marginBottom: "1rem" }} />
              <div>Map visualization is not available</div>
            </div>
          ) : (
            <div ref={mapContainer} style={{ width: "100%", height: "100%" }}></div>
          )}
        </div>

        <div className="route-info">
          <div className="route-point">
            <div className="route-marker start">
              <Play size={14} />
            </div>
            <div className="route-data">
              <div className="route-address">
                {addresses?.origin?.address || "Unknown location"}
              </div>
              <div className="route-time">
                {formatDateTime(trip?.start_event?.timestamp)}
              </div>
            </div>
          </div>

          <div className="route-connector"></div>

          <div className="route-point">
            <div className="route-marker end">
              <CircleStop size={14} />
            </div>
            <div className="route-data">
              <div className="route-address">
                {addresses?.destination?.address || "Unknown location"}
              </div>
              <div className="route-time">
                {formatDateTime(trip?.end_event?.timestamp)}
              </div>
            </div>
          </div>
        </div>

        {/* Map legend */}
        <div
          style={{
            marginTop: "1.5rem",
            fontSize: "0.875rem",
            color: "#6B7280",
          }}
        >
          <div style={{ fontWeight: "500", marginBottom: "0.5rem" }}>
            Map Legend:
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#0ACF83",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "6px",
                }}
              >
                <Play color="white" size={10} />
              </div>
              <span>Start</span>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#FF5252",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "6px",
                }}
              >
                <CircleStop color="white" size={10} />
              </div>
              <span>End</span>
            </div>

            {mapData?.events &&
              mapData.events.some((e) => e.type === "speeding") && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#FFC107",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "6px",
                    }}
                  >
                    <Gauge color="white" size={10} />
                  </div>
                  <span>Speeding</span>
                </div>
              )}

            {mapData?.events &&
              mapData.events.some((e) => e.type === "braking") && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: "#FF5252",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "6px",
                    }}
                  >
                    <CarCrash color="white" size={10} />
                  </div>
                  <span>Hard Braking</span>
                </div>
              )}

            {hasTolls && (
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "#8e44ad",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "6px",
                  }}
                >
                  <DollarSign color="white" size={10} />
                </div>
                <span>Toll</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}