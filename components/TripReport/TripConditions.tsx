// File: components/trip-report/TripConditions.jsx
import React from 'react';

export default function TripConditions({ weather, roadCondition }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <i className="fas fa-cloud-sun"></i>
        </div>
        <h2 className="card-title">Trip Conditions</h2>
      </div>
      <div className="card-body">
        <div className="weather-grid">
          <div className="weather-item">
            <div className="weather-icon">
              <i className="fas fa-temperature-half"></i>
            </div>
            <div className="weather-label">Temperature</div>
            <div className="weather-value">{weather?.temperature || 'N/A'}°F</div>
          </div>
          <div className="weather-item">
            <div className="weather-icon">
              <i className="fas fa-cloud-rain"></i>
            </div>
            <div className="weather-label">Precipitation</div>
            <div className="weather-value">{weather?.precipitation || 'N/A'}%</div>
          </div>
          <div className="weather-item">
            <div className="weather-icon">
              <i className="fas fa-wind"></i>
            </div>
            <div className="weather-label">Wind Speed</div>
            <div className="weather-value">{weather?.wind_speed || 'N/A'}</div>
          </div>
          <div className="weather-item">
            <div className="weather-icon">
              <i className="fas fa-road"></i>
            </div>
            <div className="weather-label">Road Condition</div>
            <div className="weather-value">{roadCondition || 'Normal'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}