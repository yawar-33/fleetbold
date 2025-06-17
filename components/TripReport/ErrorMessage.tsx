// File: components/shared/ErrorMessage.jsx
import React from 'react';
import { useRouter } from 'next/navigation';

export default function ErrorMessage({ message, title = 'Error' }) {
  const router = useRouter();
  
  return (
    <div className="error-container">
      <h2>{title}</h2>
      <p>{message}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}