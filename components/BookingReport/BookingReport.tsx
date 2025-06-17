"use client";

import React, { useState, useMemo } from "react";
import { formatDateTime } from "@/lib/dateUtils";
import Link from "next/link";
import { getTripColor } from "@/lib/utils";
import BookingMap from "./BookingMap";
import TripAnalytics from "./TripAnalytics";
import { Car } from "lucide-react";

/**
 * BookingReport component
 * Adds:
 *  - "Reimbursement Opportunity" in the summary
 *  - A section detailing Tolls, Supercharger cost, and Excess Miles fees
 */

export default function BookingReport({ bookingData, mapboxPublicKey }) {
  const [selectedTrip, setSelectedTrip] = useState(null);

  // --------------------------------------
  // Basic computations for distance, tolls, etc.
  // --------------------------------------

  // 1) Total distance
  const totalDistance = useMemo(() => {
    if (!bookingData.trips) return 0;
    return bookingData.trips.reduce(
      (sum, trip) => sum + (trip.distance_miles || 0),
      0
    );
  }, [bookingData.trips]);

  // 2) Total duration (seconds)
  const totalDuration = useMemo(() => {
    if (!bookingData.trips) return 0;
    return bookingData.trips.reduce(
      (sum, trip) => sum + (trip.duration || 0),
      0
    );
  }, [bookingData.trips]);

  // 3) Total toll cost
  const totalTollCost = useMemo(() => {
    if (!bookingData.trips) return 0;
    return bookingData.trips.reduce((sum, trip) => {
      if (trip.toll_info && typeof trip.toll_info.totalCost === "number") {
        return sum + trip.toll_info.totalCost;
      }
      return sum;
    }, 0);
  }, [bookingData.trips]);

  // --------------------------------------
  // Excess Miles calculation
  // --------------------------------------
  const EXCESS_MILE_RATE = 0.5; // Example $0.50 per mile
  const excessMilesInfo = useMemo(() => {
    if (!bookingData.start_datetime || !bookingData.end_datetime) {
      return null;
    }
    const startDate:any = new Date(bookingData.start_datetime);
    const endDate:any = new Date(bookingData.end_datetime);
    const diffMs:any = endDate - startDate;
    if (isNaN(diffMs) || diffMs < 0) return null;

    // Round up to next full day
    const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    const dailyAllowed = bookingData.allowed_mileage || 0;
    const totalAllowed = dailyAllowed * days;

    const overage = totalDistance - totalAllowed;
    if (overage <= 0) {
      return {
        hasExcess: false,
        allowedMiles: totalAllowed,
        excessMiles: 0,
        excessFee: 0,
      };
    }
    const fee = overage * EXCESS_MILE_RATE;
    return {
      hasExcess: true,
      allowedMiles: totalAllowed,
      excessMiles: overage,
      excessFee: fee,
    };
  }, [
    bookingData.start_datetime,
    bookingData.end_datetime,
    bookingData.allowed_mileage,
    totalDistance,
  ]);

  // --------------------------------------
  // Supercharger cost (assuming a rate per kWh)
  // --------------------------------------
  const SUPERC_COST_PER_KWH = 0.3; // Example $0.30 per kWh
  const totalSuperchargerCost = useMemo(() => {
    if (!bookingData.trips) return 0;
    let cost = 0;
    bookingData.trips.forEach((trip) => {
      if (trip.supercharger_data && Array.isArray(trip.supercharger_data)) {
        trip.supercharger_data.forEach((charger) => {
          const kwh = charger.energy_kwh || 0;
          cost += kwh * SUPERC_COST_PER_KWH;
        });
      }
    });
    return cost;
  }, [bookingData.trips]);

  // --------------------------------------
  // Reimbursement Opportunity
  // = tolls + supercharger cost + excess miles fee
  // --------------------------------------
  const totalExcessMilesFee =
    excessMilesInfo && excessMilesInfo.hasExcess
      ? excessMilesInfo.excessFee
      : 0;

  const reimbursementOpportunity =
    totalTollCost + totalSuperchargerCost + totalExcessMilesFee;

  // --------------------------------------
  // Customer & vehicle objects
  // --------------------------------------
  const customer = {
    name: bookingData.guest_name || "N/A",
    email: bookingData.guest_email || "N/A",
    phone: bookingData.guest_phone || "N/A",
    company: "",
  };

  const vehicle = {
    vin: bookingData.vin || "N/A",
    make: bookingData.make || "",
    model: bookingData.model || "",
    year: bookingData.year || "",
    license_plate: "",
    color: "",
  };

  if (bookingData.vehicle_info && bookingData.vehicle_info.length > 0) {
    const vehicleInfo = bookingData.vehicle_info[0];
    if (vehicleInfo) {
      vehicle.make = vehicleInfo.make || "";
      vehicle.model = vehicleInfo.model || "";
      vehicle.year = vehicleInfo.year || "";
      vehicle.license_plate = vehicleInfo.license_plate || "";
      vehicle.color = vehicleInfo.color || "";
    }
  }

  // Booking details
  const booking_details = {
    status_description: bookingData.status || "Unknown",
    notes: "",
  };

  // Payment info
  const payment_info = {
    amount: bookingData.earning || 0,
    currency: "USD",
    method: "",
  };

  // --------------------------------------
  // Helpers
  // --------------------------------------
  const formatTimestamp = (timestamp) => {
    if (!timestamp) return "N/A";
    if (typeof timestamp === "number") {
      const date = new Date(timestamp * 1000);
      return formatDateTime(date);
    }
    if (typeof timestamp === "string" && !isNaN(Number(timestamp))) {
      const date = new Date(Number(timestamp) * 1000);
      return formatDateTime(date);
    }
    return formatDateTime(timestamp);
  };

  const handleTripSelect = (trip) => {
    setSelectedTrip(trip === selectedTrip ? null : trip);
  };

  // --------------------------------------
  // Render
  // --------------------------------------
  return (
    <div className="booking-report">
      {/* Header */}
      <header>
        <div className="container header-content">
          <div className="logo-area">
            <div>
              <div className="report-title">Booking Report</div>
              <div className="subtitle">
                ID: {bookingData._id || bookingData.unique_id || "N/A"}
              </div>
            </div>
          </div>

          <div className="vehicle-info">
            <div className="vehicle-info-item">
              <i className="fas fa-user"></i>
              <span>{customer.name}</span>
            </div>
            {vehicle.make && vehicle.model ? (
              <div className="vehicle-info-item">
                <i className="fas fa-car"></i>
                <span>
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </span>
              </div>
            ) : (
              <div className="vehicle-info-item">
                <i className="fas fa-car"></i>
                <span>VIN: {vehicle.vin}</span>
              </div>
            )}
            <div className="vehicle-info-item">
              <i className="fas fa-calendar"></i>
              <span>
                {formatDateTime(bookingData.start_datetime)} -{" "}
                {formatDateTime(bookingData.end_datetime)}
              </span>
            </div>
            <div className="vehicle-info-item">
              <i className="fas fa-tag"></i>
              <span>{bookingData.status}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        {/* Booking Summary */}
        <div className="card">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-info-circle"></i>
            </div>
            <h2 className="card-title">Booking Summary</h2>
          </div>
          <div className="card-body">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-label">Total Trips</div>
                <div className="stat-value">
                  {bookingData.trips ? bookingData.trips.length : 0}
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Total Distance</div>
                <div className="stat-value">{totalDistance.toFixed(1)} mi</div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Total Duration</div>
                <div className="stat-value">
                  {Math.round(totalDuration / 60)} min
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-label">Status</div>
                <div className="stat-value">
                  {bookingData.status || "Unknown"}
                </div>
                <div className="stat-secondary">
                  {booking_details.status_description}
                </div>
              </div>
              {totalTollCost > 0 && (
                <div className="stat-card">
                  <div className="stat-label">Total Toll Cost</div>
                  <div className="stat-value">${totalTollCost.toFixed(2)}</div>
                </div>
              )}
              {/* NEW: Reimbursement Opp. in the summary */}
              {reimbursementOpportunity > 0 && (
                <div className="stat-card">
                  <div className="stat-label">Reimbursement Opp.</div>
                  <div className="stat-value">
                    ${reimbursementOpportunity.toFixed(2)}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Excess Miles Report */}
        {excessMilesInfo && (
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h2 className="card-title">Excess Miles</h2>
            </div>
            <div className="card-body">
              {excessMilesInfo.hasExcess ? (
                <p>
                  <strong>Allowed Miles:</strong>{" "}
                  {excessMilesInfo.allowedMiles.toFixed(1)} mi
                  <br />
                  <strong>Total Driven:</strong> {totalDistance.toFixed(1)} mi
                  <br />
                  <strong>Excess Miles:</strong>{" "}
                  {excessMilesInfo.excessMiles.toFixed(1)} mi
                  <br />
                  <strong>Estimated Fee:</strong> $
                  {excessMilesInfo.excessFee.toFixed(2)}
                </p>
              ) : (
                <p>No excess miles. All usage is within the allowed limit.</p>
              )}
            </div>
          </div>
        )}

        {/* NEW: Reimbursement Opportunity Details */}
        {reimbursementOpportunity > 0 && (
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h2 className="card-title">Reimbursement Opportunity</h2>
            </div>
            <div className="card-body">
              <p>
                This section shows the combined reimbursement amount for Tolls,
                Supercharger usage, and any Excess Miles fees.
              </p>
              <div className="info-grid">
                <div className="info-card">
                  <div className="info-label">Tolls</div>
                  <div className="info-value">${totalTollCost.toFixed(2)}</div>
                </div>
                <div className="info-card">
                  <div className="info-label">Supercharger Est. Cost</div>
                  <div className="info-value">
                    ${totalSuperchargerCost.toFixed(2)}
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-label">Excess Miles Fee</div>
                  <div className="info-value">
                    ${totalExcessMilesFee.toFixed(2)}
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-label">Total Opportunity</div>
                  <div className="info-value">
                    ${reimbursementOpportunity.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Map Overview */}
        {bookingData.trips &&
          bookingData.trips.length > 0 &&
          mapboxPublicKey && (
            <BookingMap
              trips={bookingData.trips}
              mapboxPublicKey={mapboxPublicKey}
            />
          )}

        {/* Customer Information */}
        {/* <div className="card">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-user"></i>
            </div>
            <h2 className="card-title">Customer Information</h2>
          </div>
          <div className="card-body">
            <div className="info-grid">
              <div className="info-card">
                <div className="info-label">Name</div>
                <div className="info-value">{customer.name}</div>
              </div>
              {customer.email && customer.email !== 'N/A' && (
                <div className="info-card">
                  <div className="info-label">Email</div>
                  <div className="info-value">{customer.email}</div>
                </div>
              )}
              {customer.phone && customer.phone !== 'N/A' && (
                <div className="info-card">
                  <div className="info-label">Phone</div>
                  <div className="info-value">{customer.phone}</div>
                </div>
              )}
              {customer.company && (
                <div className="info-card">
                  <div className="info-label">Company</div>
                  <div className="info-value">{customer.company}</div>
                </div>
              )}
              {bookingData.guest_id && (
                <div className="info-card">
                  <div className="info-label">Guest ID</div>
                  <div className="info-value">{bookingData.guest_id}</div>
                </div>
              )}
            </div>
          </div>
        </div> */}

        {/* Vehicle Information */}
        <div className="card">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-car"></i>
            </div>
            <h2 className="card-title">Vehicle Information</h2>
          </div>
          <div className="card-body">
            <div className="vehicle-info-layout">
              {/* Vehicle Image Section */}
              <div className="vehicle-image-container">
                {bookingData.vehicle_info &&
                bookingData.vehicle_info[0]?.external_vehicle_image ? (
                  <img
                    src={bookingData.vehicle_info[0].external_vehicle_image}
                    alt={
                      bookingData.vehicle_info[0].external_vehicle_full_name ||
                      "Vehicle"
                    }
                    className="vehicle-image"
                
                  />
                ) : (
                  <div className="vehicle-placeholder">
                    <i className="fas fa-car-alt"></i>
                  </div>
                )}
              </div>

              {/* Vehicle Details Grid */}
              <div className="vehicle-details-grid">
                {/* Full Vehicle Name */}
                {bookingData.vehicle_info &&
                  bookingData.vehicle_info[0]?.external_vehicle_full_name && (
                    <div className="vehicle-detail">
                      <div className="detail-label">Vehicle</div>
                      <div className="detail-value highlight">
                        {bookingData.vehicle_info[0].external_vehicle_full_name}
                      </div>
                    </div>
                  )}

                {/* VIN */}
                <div className="vehicle-detail">
                  <div className="detail-label">VIN</div>
                  <div className="detail-value">
                    {bookingData.vin || "Not Available"}
                  </div>
                </div>

               

                {/* Provider */}
                {/* {bookingData.provider && (
                  <div className="vehicle-detail">
                    <div className="detail-label">Provider</div>
                    <div className="detail-value">
                      {bookingData.provider.toUpperCase()}
                    </div>
                  </div>
                )} */}

                {/* External Vehicle ID */}
                {bookingData.vehicle_info &&
                  bookingData.vehicle_info[0]?.external_vehicle_id && (
                    <div className="vehicle-detail">
                      <div className="detail-label">External Vehicle ID ({bookingData.provider.toUpperCase()})</div>
                      <div className="detail-value">
                        {bookingData.vehicle_info[0].external_vehicle_id}
                      </div>
                    </div>
                  )}

                {/* Allowed Mileage */}
                {bookingData.allowed_mileage && (
                  <div className="vehicle-detail">
                    <div className="detail-label">Allowed Mileage</div>
                    <div className="detail-value">
                      {bookingData.allowed_mileage} mi/day
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Location Information */}
        <div className="card">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h2 className="card-title">Pick Up & Drop Off</h2>
          </div>
          <div className="card-body">
            <div className="info-grid">
              {bookingData.pickup_location_name && (
                <div className="info-card">
                  <div className="info-label">Pickup Location</div>
                  <div className="info-value">
                    {bookingData.pickup_location_name}
                  </div>
                  {bookingData.pickup_location_url && (
                    <a
                      href={bookingData.pickup_location_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-link"
                    >
                      View on Map
                    </a>
                  )}
                </div>
              )}
              {bookingData.dropoff_location_name && (
                <div className="info-card">
                  <div className="info-label">Dropoff Location</div>
                  <div className="info-value">
                    {bookingData.dropoff_location_name}
                  </div>
                  {bookingData.dropoff_location_url && (
                    <a
                      href={bookingData.dropoff_location_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="info-link"
                    >
                      View on Map
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Payment Information */}
        {/* {bookingData.earning && (
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <h2 className="card-title">Earning Information</h2>
            </div>
            <div className="card-body">
              <div className="info-grid">
                <div className="info-card">
                  <div className="info-label">Earning</div>
                  <div className="info-value">
                    ${bookingData.earning.toFixed(2)}
                  </div>
                </div>
                {bookingData.external_booking_id && (
                  <div className="info-card">
                    <div className="info-label">External Booking ID</div>
                    <div className="info-value">
                      {bookingData.external_booking_id}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )} */}

        {/* Trip Analytics */}
        {bookingData.trips && bookingData.trips.length > 0 && (
          <TripAnalytics trips={bookingData.trips} />
        )}

        {/* Trip List */}
        <div className="card">
          <div className="card-header">
            <div className="card-icon">
              <i className="fas fa-route"></i>
            </div>
            <h2 className="card-title">Trip Details</h2>
          </div>
          <div className="card-body">
            <table className="health-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Distance</th>
                  <th>Duration</th>
                  <th>Max Speed</th>
                  <th>Tolls</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookingData.trips &&
                  bookingData.trips.map((trip, index) => (
                    <React.Fragment key={index}>
                      <tr
                        className={selectedTrip === trip ? "selected-row" : ""}
                        onClick={() => handleTripSelect(trip)}
                        style={{
                          borderLeft: `4px solid ${getTripColor(index)}`,
                          cursor: "pointer",
                        }}
                      >
                        <td>
                          {trip.start_event &&
                            formatTimestamp(trip.start_event.timestamp)}
                        </td>
                        <td>{trip.origin_address || "Unknown"}</td>
                        <td>{trip.destination_address || "Unknown"}</td>
                        <td>{(trip.distance_miles || 0).toFixed(1)} mi</td>
                        <td>{Math.round((trip.duration || 0) / 60)} min</td>
                        <td>{trip.max_speed || 0} mph</td>
                        <td>
                          {trip.toll_info && trip.toll_info.totalCost > 0
                            ? `$${trip.toll_info.totalCost.toFixed(2)}`
                            : "None"}
                        </td>
                        <td>
                          <div className="action-buttons">
                            <Link
                              href={`/trip-report/${trip.transaction_id}`}
                              className="view-trip-btn"
                            >
                              View Trip
                            </Link>
                            <button
                              className="details-btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleTripSelect(trip);
                              }}
                            >
                              {selectedTrip === trip
                                ? "Hide Details"
                                : "Show Details"}
                            </button>
                          </div>
                        </td>
                      </tr>
                      {selectedTrip === trip && (
                        <tr className="details-row">
                          <td colSpan={8}>
                            <div className="trip-details-container">
                              {/* Fuel/EV usage in % (assuming end_event.fuel_consumed is fraction) */}
                              {trip.end_event &&
                                typeof trip.end_event.fuel_consumed ===
                                  "number" && (
                                  <div className="details-section">
                                    <h4>Fuel/EV Usage</h4>
                                    <p>
                                      {(
                                        trip.end_event.fuel_consumed * 100
                                      ).toFixed(1)}
                                      %
                                    </p>
                                  </div>
                                )}

                              {/* Speeding Events */}
                              {trip.speeding_events &&
                                trip.speeding_events.length > 0 && (
                                  <div className="details-section">
                                    <h4>
                                      Speeding Events (
                                      {trip.speeding_events.length})
                                    </h4>
                                    <table className="nested-table">
                                      <thead>
                                        <tr>
                                          <th>Max Speed</th>
                                          <th>Duration</th>
                                          <th>Start Time</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {trip.speeding_events.map(
                                          (event, idx) => (
                                            <tr key={idx}>
                                              <td>{event.maxSpeed} mph</td>
                                              <td>
                                                {Math.round(event.duration)} sec
                                              </td>
                                              <td>
                                                {formatTimestamp(
                                                  event.startTimestamp
                                                )}
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                )}

                              {/* Toll Information */}
                              {trip.toll_info &&
                                trip.toll_info.segments &&
                                trip.toll_info.segments.length > 0 && (
                                  <div className="details-section">
                                    <h4>
                                      Toll Segments (
                                      {trip.toll_info.segments.length})
                                    </h4>
                                    <table className="nested-table">
                                      <thead>
                                        <tr>
                                          <th>Distance</th>
                                          <th>Duration</th>
                                          <th>Cost</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {trip.toll_info.segments.map(
                                          (segment, idx) => (
                                            <tr key={idx}>
                                              <td>
                                                {(
                                                  segment.distanceMeters / 1609
                                                ).toFixed(1)}{" "}
                                                mi
                                              </td>
                                              <td>{segment.duration}</td>
                                              <td>
                                                ${segment.totalCost.toFixed(2)}
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </table>
                                    <p className="toll-total">
                                      Total Toll Cost: $
                                      {trip.toll_info.totalCost.toFixed(2)}
                                    </p>
                                  </div>
                                )}

                              {/* Supercharger Data */}
                              {trip.supercharger_data &&
                                trip.supercharger_data.length > 0 && (
                                  <div className="details-section">
                                    <h4>Supercharger Usage</h4>
                                    <table className="nested-table">
                                      <thead>
                                        <tr>
                                          <th>Location</th>
                                          <th>Duration (min)</th>
                                          <th>Energy (kWh)</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {trip.supercharger_data.map(
                                          (charger, idx) => (
                                            <tr key={idx}>
                                              <td>
                                                {charger.location || "Unknown"}
                                              </td>
                                              <td>
                                                {charger.duration
                                                  ? Math.round(
                                                      charger.duration / 60
                                                    )
                                                  : 0}
                                              </td>
                                              <td>
                                                {charger.energy_kwh
                                                  ? charger.energy_kwh.toFixed(
                                                      2
                                                    )
                                                  : "0.00"}
                                              </td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                )}

                              {/* Map Data */}
                              {trip.map_data && (
                                <div className="details-section">
                                  <h4>Route Information</h4>
                                  <div className="map-data-info">
                                    <p>
                                      <strong>Start Coordinates:</strong>{" "}
                                      {trip.map_data.start
                                        ? `${trip.map_data.start[0].toFixed(
                                            6
                                          )}, ${trip.map_data.start[1].toFixed(
                                            6
                                          )}`
                                        : "Not available"}
                                    </p>
                                    <p>
                                      <strong>End Coordinates:</strong>{" "}
                                      {trip.map_data.end
                                        ? `${trip.map_data.end[0].toFixed(
                                            6
                                          )}, ${trip.map_data.end[1].toFixed(
                                            6
                                          )}`
                                        : "Not available"}
                                    </p>
                                    <p>
                                      <strong>Route Points:</strong>{" "}
                                      {trip.map_data.route
                                        ? trip.map_data.route.length
                                        : 0}
                                    </p>
                                    {trip.map_data.events &&
                                      trip.map_data.events.length > 0 && (
                                        <p>
                                          <strong>Map Events:</strong>{" "}
                                          {trip.map_data.events.length}
                                        </p>
                                      )}
                                  </div>
                                </div>
                              )}

                              {/* Collision Events */}
                              {trip.collision_events &&
                                trip.collision_events.length > 0 && (
                                  <div className="details-section warning">
                                    <h4>
                                      Collision Events (
                                      {trip.collision_events.length})
                                    </h4>
                                    <table className="nested-table">
                                      <thead>
                                        <tr>
                                          <th>Timestamp</th>
                                          <th>Severity</th>
                                          <th>Type</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {trip.collision_events.map(
                                          (event, idx) => (
                                            <tr key={idx}>
                                              <td>
                                                {formatTimestamp(
                                                  event.timestamp
                                                )}
                                              </td>
                                              <td>
                                                {event.severity || "Unknown"}
                                              </td>
                                              <td>{event.type || "Unknown"}</td>
                                            </tr>
                                          )
                                        )}
                                      </tbody>
                                    </table>
                                  </div>
                                )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                {(!bookingData.trips || bookingData.trips.length === 0) && (
                  <tr>
                    <td colSpan={8} style={{ textAlign: "center" }}>
                      <em>No trips available for this booking</em>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Notes */}
        {booking_details.notes && (
          <div className="card">
            <div className="card-header">
              <div className="card-icon">
                <i className="fas fa-sticky-note"></i>
              </div>
              <h2 className="card-title">Notes</h2>
            </div>
            <div className="card-body">
              <p>{booking_details.notes}</p>
            </div>
          </div>
        )}
      </div>

      <footer className="footer">
        <div className="container">
          <p>
            This report was generated on {formatDateTime(new Date().toString())}
            for Booking ID: {bookingData._id || bookingData.unique_id || "N/A"}
          </p>
        </div>
      </footer>
    </div>
  );
}
