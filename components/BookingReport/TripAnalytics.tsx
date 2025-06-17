'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ChartBarIcon, TrendingUpIcon } from 'lucide-react';
import { formatTimestampFromUnix } from '@/lib/dateUtils';

/**
 * TripAnalytics component
 * Displays bar charts and summary stats about the provided trips.
 * All labels are now in English.
 */

export default function TripAnalytics({ trips }) {
  if (!trips || trips.length === 0) return null;

  // Prepare data for bar charts
  const distanceData = trips.map((trip, index) => ({
    name: `Trip ${index + 1}`,
    value: Number((trip.distance_miles || 0).toFixed(1))
  }));

  const speedData = trips.map((trip, index) => ({
    name: `Trip ${index + 1}`,
    value: trip.max_speed || 0
  }));

  const durationData = trips.map((trip, index) => ({
    name: `Trip ${index + 1}`,
    value: Math.round((trip.duration || 0) / 60) // in minutes
  }));

  // Count speeding events
  const totalSpeedingEvents = trips.reduce((sum, trip) => {
    const mapEvents = (trip.map_data?.events || []).filter(e => e.type === 'speeding').length;
    const explicitEvents = (trip.speeding_events || []).length;
    return sum + Math.max(mapEvents, explicitEvents); 
  }, 0);

  // Total toll cost
  const totalTollCost = trips.reduce((sum, trip) => {
    if (trip.toll_info && typeof trip.toll_info.totalCost === 'number') {
      return sum + trip.toll_info.totalCost;
    }
    return sum;
  }, 0);

  // "Fuel/EV usage" is always a fraction => transform into average % across trips
  // We'll calculate the average usage if any
  const validFuelTrips = trips.filter(tr => tr.end_event && typeof tr.end_event.fuel_consumed === 'number');
  const totalFuelFraction = validFuelTrips.reduce((sum, tr) => sum + tr.end_event.fuel_consumed, 0);
  const avgFuelUsage = validFuelTrips.length > 0 
    ? (totalFuelFraction / validFuelTrips.length) * 100 
    : 0;

  // Supercharger usage
  const superchargerUsage = trips.reduce((usage, trip) => {
    if (trip.supercharger_data && trip.supercharger_data.length > 0) {
      trip.supercharger_data.forEach(charger => {
        usage.count++;
        usage.totalEnergy += charger.energy_kwh || 0;
        usage.totalDuration += charger.duration || 0;
      });
    }
    return usage;
  }, { count: 0, totalEnergy: 0, totalDuration: 0 });

  // Custom tooltip for Recharts
  const customTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div 
          className="custom-tooltip" 
          style={{
            backgroundColor: '#fff',
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        >
          <p className="label">{`${label}: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  // Sum total distance
  const totalDistance = trips.reduce((sum, trip) => sum + (trip.distance_miles || 0), 0);
  // Sum total duration (convert to minutes)
  const totalDuration = Math.round(trips.reduce((sum, trip) => sum + (trip.duration || 0), 0) / 60);
  // Max speed among all trips
  const maxSpeedOverall = Math.max(...trips.map(trip => trip.max_speed || 0));

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <ChartBarIcon size={18} color="#3366FF" />
        </div>
        <h2 className="card-title">Trip Analysis</h2>
      </div>
      <div className="card-body">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Total Distance</div>
            <div className="stat-value">
              {totalDistance.toFixed(1)} mi
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Duration</div>
            <div className="stat-value">
              {totalDuration} min
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Max Speed</div>
            <div className="stat-value">
              {maxSpeedOverall} mph
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Speeding Events</div>
            <div className="stat-value">{totalSpeedingEvents}</div>
          </div>
        </div>

        {/* Additional info cards */}
        <div className="additional-info" style={{ marginTop: '1.5rem' }}>
          <div className="info-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            
            {/* Toll Info */}
            {totalTollCost > 0 && (
              <div 
                className="info-card" 
                style={{ 
                  flex: '1 1 300px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px', 
                  padding: '1rem', 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                    Toll Information
                  </h3>
                </div>
                <div>
                  <p style={{ margin: '0.5rem 0' }}>
                    <strong>Total Cost:</strong> ${totalTollCost.toFixed(2)}
                  </p>
                  <p style={{ margin: '0.5rem 0' }}>
                    <strong>Number of Toll Segments:</strong>{' '}
                    {trips.reduce((sum, trip) => sum + ((trip.toll_info?.segments?.length) || 0), 0)}
                  </p>
                </div>
              </div>
            )}

            {/* Fuel/EV usage */}
            {validFuelTrips.length > 0 && (
              <div 
                className="info-card" 
                style={{ 
                  flex: '1 1 300px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px', 
                  padding: '1rem', 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <TrendingUpIcon size={20} color="#FF9500" style={{ marginRight: '0.5rem' }} />
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                    Fuel/EV Usage
                  </h3>
                </div>
                <div>
                  <p style={{ margin: '0.5rem 0' }}>
                    <strong>Avg Usage (fraction * 100%):</strong>{' '}
                    {avgFuelUsage.toFixed(1)}%
                  </p>
                  <p style={{ margin: '0.5rem 0' }}>
                    <strong>Trips with Data:</strong> {validFuelTrips.length}
                  </p>
                </div>
              </div>
            )}

            {/* Supercharger usage */}
            {superchargerUsage.count > 0 && (
              <div 
                className="info-card" 
                style={{ 
                  flex: '1 1 300px', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px', 
                  padding: '1rem', 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)' 
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: '600' }}>
                    Supercharger Usage
                  </h3>
                </div>
                <div>
                  <p style={{ margin: '0.5rem 0' }}>
                    <strong>Number of Charges:</strong> {superchargerUsage.count}
                  </p>
                  <p style={{ margin: '0.5rem 0' }}>
                    <strong>Total Energy:</strong> {superchargerUsage.totalEnergy.toFixed(2)} kWh
                  </p>
                  <p style={{ margin: '0.5rem 0' }}>
                    <strong>Total Time:</strong> {Math.round(superchargerUsage.totalDuration / 60)} min
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Charts */}
        <div 
          className="charts-grid" 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem', 
            marginTop: '1.5rem' 
          }}
        >
          {/* Distance Chart */}
          <div className="chart-container" style={{ height: '250px' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', textAlign: 'center' }}>
              Distance by Trip (mi)
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={distanceData} 
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={customTooltip} />
                <Bar dataKey="value" fill="#3366FF" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Max Speed Chart */}
          <div className="chart-container" style={{ height: '250px' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', textAlign: 'center' }}>
              Max Speed by Trip (mph)
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={speedData} 
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={customTooltip} />
                <Bar dataKey="value" fill="#FF3B30" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Duration Chart */}
          <div className="chart-container" style={{ height: '250px' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', textAlign: 'center' }}>
              Duration by Trip (min)
            </h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={durationData} 
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={customTooltip} />
                <Bar dataKey="value" fill="#30B566" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Speeding Events Table */}
        {totalSpeedingEvents > 0 && (
          <div className="speeding-events" style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Speeding Events</h3>
            <table className="health-table">
              <thead>
                <tr>
                  <th>Trip</th>
                  <th>Max Speed</th>
                  <th>Duration (s)</th>
                  <th>Start Time</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {trips.map((trip, tripIndex) => {
                  if (!trip.speeding_events || trip.speeding_events.length === 0) return null;
                  
                  return trip.speeding_events.map((event, eventIndex) => (
                    <tr key={`${tripIndex}-${eventIndex}`}>
                      <td>{tripIndex + 1}</td>
                      <td>{event.maxSpeed} mph</td>
                      <td>{Math.round(event.duration)}</td>
                      <td>{formatTimestampFromUnix(event.startTimestamp)}</td>
                      <td>
                        {event.startLocation 
                          ? `${event.startLocation.latitude.toFixed(6)}, ${event.startLocation.longitude.toFixed(6)}` 
                          : 'N/A'
                        }
                      </td>
                    </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
