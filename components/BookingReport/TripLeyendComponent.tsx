import React from "react";
import { formatDateTime } from "@/lib/dateUtils";
import { Play, CircleStop, Eye, EyeOff } from "lucide-react";
import { getTripColor } from "@/lib/utils";

const TripLegendItem = ({ 
  trip, 
  index, 
  isSelected, 
  onToggle 
}: { 
  trip: any, 
  index: number, 
  isSelected: boolean, 
  onToggle: () => void 
}) => {
  const tripColor = getTripColor(index);

  return (
    <div
      className="trip-legend-item"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.5rem",
        backgroundColor: isSelected ? "#f0f0f0" : "white",
        borderRadius: "6px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "background-color 0.2s",
      }}
      onClick={onToggle}
    >
      {/* Visibility toggle */}
      <div 
        style={{ 
          display: "flex", 
          alignItems: "center", 
          marginRight: "0.5rem" 
        }}
      >
        {isSelected ? (
          <Eye size={16} color="#3366FF" />
        ) : (
          <EyeOff size={16} color="#999" />
        )}
      </div>

      {/* Trip color indicator */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          flex: 1,
        }}
      >
        <div
          style={{
            width: "20px",
            height: "6px",
            backgroundColor: tripColor,
            borderRadius: "3px",
            opacity: isSelected ? 1 : 0.5,
          }}
        ></div>
        <span 
          style={{ 
            fontWeight: "bold", 
            marginRight: "0.5rem",
            color: isSelected ? "#000" : "#999"
          }}
        >
          Trip {index + 1}
        </span>
      </div>
      
      {/* Start and end times */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.75rem",
          color: isSelected ? "#666" : "#999",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#0ACF83",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: isSelected ? 1 : 0.5,
            }}
          >
            <Play size={8} color="white" />
          </div>
          <span>{formatDateTime(trip.start_event.timestamp)}</span>
        </div>

        <span>→</span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: "#FF5252",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: isSelected ? 1 : 0.5,
            }}
          >
            <CircleStop size={8} color="white" />
          </div>
          <span>{formatDateTime(trip.end_event.timestamp)}</span>
        </div>
      </div>
    </div>
  );
};

export default function TripLegend({ 
  trips, 
  selectedTrips, 
  onTripToggle 
}: { 
  trips: any[], 
  selectedTrips: Record<number, boolean>, 
  onTripToggle: (index: number) => void 
}) {
  return (
    <div
      className="map-legend"
      style={{
        maxHeight: "150px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        padding: "0.5rem",
        backgroundColor: "#f8f4fc",
        borderRadius: "8px",
        marginTop: "1rem",
        border: "1px solid #e1d4eb",
      }}
    >
      {trips.map((trip, index) => (
        <TripLegendItem 
          key={index} 
          trip={trip} 
          index={index} 
          isSelected={selectedTrips[index] || false}
          onToggle={() => onTripToggle(index)}
        />
      ))}
    </div>
  );
}