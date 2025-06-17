// File: components/trip-report/TollInformation.jsx
import React from 'react';

export default function TollInformation({ tollInfo }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <i className="fas fa-money-bill-wave"></i>
        </div>
        <h2 className="card-title">Toll Information</h2>
      </div>
      <div className="card-body">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Total Toll Cost</div>
            <div className="stat-value">
              {(tollInfo?.totalCost || 0).toFixed(2)} {tollInfo?.currency || 'USD'}
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Number of Tolls</div>
            <div className="stat-value">{(tollInfo?.segments || []).length}</div>
          </div>
          {tollInfo?.total_distance && (
            <div className="stat-card">
              <div className="stat-label">Toll Distance</div>
              <div className="stat-value">{tollInfo.total_distance.toFixed(1)} km</div>
            </div>
          )}
          {tollInfo?.total_duration && (
            <div className="stat-card">
              <div className="stat-label">Toll Duration</div>
              <div className="stat-value">{tollInfo.total_duration}</div>
            </div>
          )}
        </div>
        
        {/* Toll Segments Table */}
        {tollInfo?.segments && tollInfo.segments.length > 0 ? (
          <div style={{ marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Toll Segments Detail</h3>
            <table className="health-table">
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Distance</th>
                  <th>Cost</th>
                  <th>Map</th>
                </tr>
              </thead>
              <tbody>
                {tollInfo.segments.map((segment, index) => (
                  <tr key={index}>
                    <td>Near destination point #{segment.destinationIndex}</td>
                    <td>{(segment.distanceMeters/1000).toFixed(1)} km</td>
                    <td>{segment.incrementalCost.toFixed(2)} {tollInfo.currency}</td>
                    <td>
                      {segment.location ? (
                        <a 
                          href={`https://www.google.com/maps/search/?api=1&query=${segment.location.latitude},${segment.location.longitude}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          View on map
                        </a>
                      ) : (
                        'Unknown location'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div style={{ marginTop: '1.5rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <i className="fas fa-info-circle" style={{ fontSize: '2rem', marginBottom: '1rem' }}></i>
            <p>No toll information available for this trip.</p>
          </div>
        )}

        {/* Toll Pass Information */}
        {tollInfo?.toll_passes && tollInfo.toll_passes.length > 0 && (
          <div style={{ marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Toll Pass Information</h3>
            <div className="stat-card">
              <div className="stat-label">Toll Passes Used</div>
              <div className="stat-value">
                {tollInfo.toll_passes.map((pass, index) => (
                  <span 
                    key={index} 
                    className="dtc-pill" 
                    style={{ backgroundColor: '#E3F2FD', color: '#1976D2' }}
                  >
                    {pass.replace('US_', '').replace('_', ' ').replace('FL', 'Florida').replace('CA', 'California')}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}