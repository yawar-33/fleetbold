// File: components/trip-report/DrivingBehavior.jsx
import { formatDateTime } from '@/lib/dateUtils';
import React from 'react';

export default function DrivingBehavior({ speedingEvents, collisionEvents, tripDetails }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <i className="fas fa-car-crash"></i>
        </div>
        <h2 className="card-title">Driving Behavior</h2>
      </div>
      <div className="card-body">
        <div className="events-grid">
          {speedingEvents && speedingEvents.length > 0 && (
            <div className="event-card">
              <div className="event-icon warning">
                <i className="fas fa-tachometer-alt"></i>
              </div>
              <div className="event-details">
                <div className="event-title">Speeding Events</div>
                <div className="event-meta">{speedingEvents.length} events detected</div>
              </div>
            </div>
          )}
          
          {collisionEvents && collisionEvents.length > 0 && (
            <div className="event-card">
              <div className="event-icon danger">
                <i className="fas fa-car-crash"></i>
              </div>
              <div className="event-details">
                <div className="event-title">Hard Braking</div>
                <div className="event-meta">{collisionEvents.length} events detected</div>
              </div>
            </div>
          )}
          
          {tripDetails?.hardAccelerationCount > 0 && (
            <div className="event-card">
              <div className="event-icon warning">
                <i className="fas fa-bolt"></i>
              </div>
              <div className="event-details">
                <div className="event-title">Hard Acceleration</div>
                <div className="event-meta">{tripDetails.hardAccelerationCount} events detected</div>
              </div>
            </div>
          )}
          
          {speedingEvents && speedingEvents.length > 0 && (
            <div className="event-card">
              <div className="event-icon warning">
                <i className="fas fa-stopwatch"></i>
              </div>
              <div className="event-details">
                <div className="event-title">Time Spent Speeding</div>
                <div className="event-meta">{Math.round((tripDetails?.totalSpeedingDuration || 0) / 60)} minutes</div>
              </div>
            </div>
          )}
        </div>
        
        {/* Detailed speeding events */}
        {speedingEvents && speedingEvents.length > 0 && (
          <div style={{ marginTop: '1.5rem' }}>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Speeding Events Detail</h3>
            <table className="health-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Duration</th>
                  <th>Max Speed</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {speedingEvents.slice(0, 10).map((event, index) => (
                  <tr key={index}>
                    <td>{formatDateTime(event.startTimestamp)}</td>
                    <td>{Math.round(event.duration || 0)} seconds</td>
                    <td>{Math.round(event.maxSpeed || 0)} mph</td>
                    <td>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${event.startLocation?.latitude},${event.startLocation?.longitude}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View on map
                      </a>
                    </td>
                  </tr>
                ))}
                {speedingEvents.length > 10 && (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center' }}>
                      <em>{speedingEvents.length - 10} more events not shown</em>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}