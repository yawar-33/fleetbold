// File: components/trip-report/TripSummary.jsx
import React from 'react';

export default function TripSummary({ speedMetrics, tripDetails }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <i className="fas fa-tachometer-alt"></i>
        </div>
        <h2 className="card-title">Trip Summary</h2>
      </div>
      <div className="card-body">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Max Speed</div>
            <div className="stat-value">{Math.round(speedMetrics?.maxSpeed || 0)} mph</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Average Speed</div>
            <div className="stat-value">{Math.round(speedMetrics?.avgSpeed || 0)} mph</div>
            <div className="stat-secondary">{Math.round(speedMetrics?.avgMovingSpeed || 0)} mph while moving</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Total Distance</div>
            <div className="stat-value">{(tripDetails?.distanceMiles || 0).toFixed(1)} mi</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Drive Time</div>
            <div className="stat-value">{Math.round((tripDetails?.duration || 0) / 60)} min</div>
            <div className="stat-secondary">
              {Math.round(((tripDetails?.duration || 0) - (tripDetails?.driveTime || 0)) / 60)} min idle time
            </div>
          </div>
          {tripDetails?.fuelConsumption !== undefined && (
            <div className="stat-card">
              <div className="stat-label">Fuel Consumption</div>
              <div className="stat-value">{tripDetails.fuelConsumption.toFixed(1)}%</div>
            </div>
          )}
        </div>
        
        {/* Speed distribution chart */}
        {speedMetrics?.speedPercentiles && (
          <div className="speed-chart">
            <div className="speed-chart-title">Speed Distribution</div>
            <div className="speed-chart-bars">
              {[10, 25, 50, 75, 90].map(p => {
                const percentileKey = `p${p}`;
                let height = 0;
                if (
                  speedMetrics.speedPercentiles && 
                  percentileKey in speedMetrics.speedPercentiles && 
                  speedMetrics.maxSpeed > 0
                ) {
                  height = Math.round((speedMetrics.speedPercentiles[percentileKey] / speedMetrics.maxSpeed) * 100);
                }
                return (
                  <div key={p} className="speed-bar" style={{ height: `${height}%` }}>
                    <div className="speed-bar-label">{p}%</div>
                  </div>
                );
              })}
            </div>
            <div className="speed-chart-x-axis"></div>
          </div>
        )}
      </div>
    </div>
  );
}