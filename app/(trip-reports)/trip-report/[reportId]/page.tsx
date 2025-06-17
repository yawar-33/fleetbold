'use client';

import React, { useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Script from 'next/script';
import '../../booking-report.css';
import TripHeader from '@/components/TripReport/TripHeader';
import TripSummary from '@/components/TripReport/TripSummary';
import TripRoute from '@/components/TripReport/TripRoute';
import LoadingIndicator from '@/components/TripReport/LoadingIndicator';
import ErrorMessage from '@/components/TripReport/ErrorMessage';
import { formatDateTime } from '@/lib/dateUtils';
import VehicleHealth from '@/components/TripReport/VehicleHealth';
import TripConditions from '@/components/TripReport/TripConditions';
import TollInformation from '@/components/TripReport/TollInformation';
import DrivingBehavior from '@/components/TripReport/DrivingBehavior';
import { useGetTripData } from '@/queries/GetTripReportData';

export default function TripReportPage() {
  let html2pdf;

  useEffect(() => {
    import('html2pdf.js').then((module) => {
      html2pdf = module.default;
    });
  }, []);
  const params = useParams();
  const {
    getTripData,
    isLoading,
    tripData,
    error
  } = useGetTripData();

  const reportRef = useRef(null);
  const COMPANY_LOGO_URL = process.env.NEXT_PUBLIC_COMPANY_LOGO_URL;
  const MAPBOX_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_KEY;

  useEffect(() => {
    if (params?.reportId) {
      getTripData(params?.reportId as string);
    }
  }, [params?.reportId, getTripData]);

  // Función para descargar el reporte como PDF
  const downloadAsPDF = () => {
    if (!tripData || !tripData.trip) return;

    const element = reportRef.current;
    const filename = `Trip_Report_${tripData.trip.transaction_id}.pdf`;

    // Esperar a que Mapbox se cargue completamente
    const waitForMapboxRender = () => {
      return new Promise(resolve => {
        // Dar tiempo suficiente para que el mapa se renderice
        setTimeout(resolve, 1500);
      });
    };

    // Configuración de html2pdf
    const options = {
      margin: 10,
      filename: filename,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: true,
        letterRendering: true
      },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Generar el PDF
    waitForMapboxRender().then(() => {
      html2pdf().from(element).set(options).save();
    });
  };

  if (isLoading) {
    return <LoadingIndicator message="Loading trip report..." />;
  }

  if (error) {
    return <ErrorMessage message={error || "An error occurred while fetching the trip report"} />;
  }

  if (!tripData) {
    return <ErrorMessage message="The requested trip report could not be found." />;
  }

  return (
    <>
      <Head>
        <title>Trip Report - {formatDateTime(tripData.trip.start_event.timestamp)}</title>
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

      {/* Añadir botón de descarga */}
      <div className="download-button-container" style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
        <button
          onClick={downloadAsPDF}
          className="download-button"
          style={{
            backgroundColor: '#4CAF50',
            border: 'none',
            color: 'white',
            padding: '12px 24px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}
        >
          <i className="fas fa-download" style={{ marginRight: '8px' }}></i>
          Descargar PDF
        </button>
      </div>

      {/* Contenedor principal del reporte que se convertirá a PDF */}
      <div ref={reportRef}>
        <div className="fleetbold-banner">
          <span>powered by</span>
          <a href="https://fleetbold.com">
            <img src={COMPANY_LOGO_URL} alt="FleetBold Logo" />
          </a>
        </div>

        <TripHeader
          trip={tripData.trip}
          vehicle={tripData.vehicle}
          tripDetails={tripData.analytics?.tripDetails}
        />

        <div className="container">
          <TripSummary
            speedMetrics={tripData.analytics?.speedMetrics}
            tripDetails={tripData.analytics?.tripDetails}
          />

          <TripRoute
            mapData={tripData.map_data}
            addresses={tripData.analytics?.addresses}
            trip={tripData.trip}
            tolls={tripData.toll_info}
            mapboxPublicKey={MAPBOX_PUBLIC_KEY}
          />

          <DrivingBehavior
            speedingEvents={tripData.analytics?.speedingEvents}
            collisionEvents={tripData.analytics?.collisionEvents}
            tripDetails={tripData.analytics?.tripDetails}
          />

          {(tripData.analytics?.troubleCodes && tripData.analytics.troubleCodes.length > 0) ||
            (tripData.health_data && tripData.health_data.length > 0) ? (
            <VehicleHealth
              troubleCodes={tripData.analytics?.troubleCodes}
              healthData={tripData.health_data}
            />
          ) : null}

          {tripData.trip_metadata && tripData.trip_metadata.weather && (
            <TripConditions
              weather={tripData.trip_metadata.weather}
              roadCondition={tripData.trip_metadata.roadCondition}
            />
          )}

          {tripData.toll_info && (
            <TollInformation
              tollInfo={tripData.toll_info}
            />
          )}
        </div>

        <footer className="footer">
          <div className="container">
            <p>This report was generated on {formatDateTime(new Date())} for {tripData.vehicle.vin}</p>
            <p>Trip ID: {tripData.trip.transaction_id}</p>
          </div>
        </footer>
      </div>
    </>
  );
}