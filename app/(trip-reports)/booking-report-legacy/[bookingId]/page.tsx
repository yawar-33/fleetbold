'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Script from 'next/script';
import BookingReport from '@/components/BookingReport/BookingReport';
import LoadingIndicator from '@/components/TripReport/LoadingIndicator';
import ErrorMessage from '@/components/TripReport/ErrorMessage';
import { useGetBookingData } from '@/queries/GetBookingData';


export default function BookingPage() {
  const params = useParams();
  const { 
    getBookingData, 
    isLoading, 
    tripData: bookingData, 
    error 
  } = useGetBookingData(true);
  
  const COMPANY_LOGO_URL = process.env.NEXT_PUBLIC_COMPANY_LOGO_URL;
  const MAPBOX_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY;

  useEffect(() => {
    if (params?.bookingId) {
      getBookingData(params?.bookingId as string);
    }
  }, [params?.bookingId, getBookingData]);

  if (isLoading) {
    return <LoadingIndicator message="Loading booking report..." />;
  }

  if (error) {
    return <ErrorMessage message={error || "An error occurred while fetching the booking report"} />;
  }

  if (!bookingData) {
    return <ErrorMessage message="The requested booking report could not be found." />;
  }

  return (
    <>
      <Head>
        <title>Booking Report #{params?.bookingId}</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" 
        integrity="sha512-fD9DI5bZwQxOi7MhYWnnNPlvXdp/2Pj3XSTRrFs5FQa4mizyGLnJcN6tuvUS6LbmgN1ut+XGSABKvjN0H6Aoow==" 
        crossOrigin="anonymous" 
      />
      <Script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js" />
      <link href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css" rel="stylesheet" />

      <div className="fleetbold-banner">
        <span>powered by</span>
        <a href="https://fleetbold.com">
          <img src={COMPANY_LOGO_URL} alt="FleetBold Logo" />
        </a>
      </div>

      <div className="container mt-4 mb-5">
        <div className="d-flex align-items-center mb-4">
          <h1 className="m-0">Booking Report</h1>
        </div>
        
        <BookingReport 
          bookingData={bookingData}
          mapboxPublicKey={MAPBOX_PUBLIC_KEY} 
        />
      </div>
    </>
  );
}