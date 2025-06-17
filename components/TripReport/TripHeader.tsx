// File: components/trip-report/TripHeader.jsx
import { formatDateTime } from '@/lib/dateUtils';
import React from 'react';

export default function TripHeader({ trip, vehicle, tripDetails }) {
  return (
    <header>
      <div className="container header-content">
        <div className="logo-area">
          <div>
            <div className="report-title">Trip Report</div>
            <div className="subtitle">{formatDateTime(trip?.start_event?.timestamp)}</div>
          </div>
        </div>
        
        <div className="vehicle-info">
          <div className="vehicle-info-item">
            <i className="fas fa-car"></i>
            <span>{vehicle?.year} {vehicle?.make} {vehicle?.model}</span>
          </div>
          <div className="vehicle-info-item">
            <i className="fas fa-barcode"></i>
            <span>{vehicle?.vin}</span>
          </div>
          <div className="vehicle-info-item">
            <i className="fas fa-road"></i>
            <span>{(tripDetails?.distanceMiles || 0).toFixed(1)} mi</span>
          </div>
          <div className="vehicle-info-item">
            <i className="fas fa-clock"></i>
            <span>{Math.round((tripDetails?.duration || 0) / 60)} minutes</span>
          </div>
        </div>
      </div>
    </header>
  );
}