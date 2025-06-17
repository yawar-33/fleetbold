// File: components/trip-report/VehicleHealth.jsx
import React from 'react';
import { formatDateTime } from '@/lib/dateUtils';

export default function VehicleHealth({ troubleCodes, healthData }) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">
          <i className="fas fa-heartbeat"></i>
        </div>
        <h2 className="card-title">Vehicle Health</h2>
      </div>
      <div className="card-body">
        {troubleCodes && troubleCodes.length > 0 && (
          <>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Diagnostic Trouble Codes</h3>
            <div style={{ marginBottom: '1.5rem' }}>
              {troubleCodes.map((code, index) => (
                <div key={index} className="dtc-pill">
                  <span>{code.code}</span>
                </div>
              ))}
            </div>
          </>
        )}
        
        {healthData && healthData.length > 0 && (
          <>
            <h3 style={{ fontSize: '1rem', marginBottom: '1rem' }}>Health Records</h3>
            <table className="health-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Battery Status</th>
                  <th>Fuel Level</th>
                  <th>DTCs</th>
                </tr>
              </thead>
              <tbody>
                {healthData.slice(0, 10).map((record, index) => (
                  <tr key={index}>
                    <td>{formatDateTime(record.timestamp)}</td>
                    <td>{record.battery_status || 'N/A'}</td>
                    <td>{record.fuel_level || 'N/A'}</td>
                    <td>
                      {record.dtc_code && record.dtc_code.length > 0 ? (
                        record.dtc_code.map((dtc, i) => (
                          <div key={i} className="dtc-pill">
                            {dtc.code} ({dtc.value})
                          </div>
                        ))
                      ) : (
                        'None'
                      )}
                    </td>
                  </tr>
                ))}
                {healthData.length > 10 && (
                  <tr>
                    <td colSpan={4} style={{ textAlign: 'center' }}>
                      <em>{healthData.length - 10} more records not shown</em>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

