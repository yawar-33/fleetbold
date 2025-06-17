// File: components/shared/LoadingIndicator.jsx
import React from 'react';

export default function LoadingIndicator({ message = 'Loading...' }) {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p>{message}</p>
    </div>
  );
}
