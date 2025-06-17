"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "../ui/animated-list";
 

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
    {
      name: "2024 Tesla Model 3",
      description: "The vehicle has left the lot. Battery: 95%. Odometer: 14,552 miles.",
      time: "15m ago",
      icon: "💸",
      color: "#00C9A7",
    },
    {
      name: "2023 Chevrolet Equinox",
      description: "The vehicle has entered the lot. Fuel: 32%. Odometer: 19,329 miles.",
      time: "10m ago",
      icon: "👤",
      color: "#FFB800",
    },
    {
      name: "2024 Cadillac Escalade",
      description: "Geofence alert: The vehicle is out of town.",
      time: "5m ago",
      icon: "💬",
      color: "#FF3D71",
    },
    {
      name: "2024 Tesla Cybertruck",
      description: "Crash warning: Some sensors indicate that a crash may have occurred in the last 10 minutes.",
      time: "2m ago",
      icon: "🗞️",
      color: "#1E86FF",
    },
    {
      name: "2022 Ford F-150",
      description: "The vehicle is scheduled for maintenance. Mileage: 30,412 miles.",
      time: "25m ago",
      icon: "🛠️",
      color: "#FF5733",
    },
    {
      name: "2023 BMW X5",
      description: "Battery low: Charge immediately. Battery: 5%.",
      time: "1h ago",
      icon: "🔋",
      color: "#00A1D6",
    },
    {
      name: "2021 Honda Civic",
      description: "Fuel refill needed. Fuel level: 8%.",
      time: "2h ago",
      icon: "⛽",
      color: "#FFA726",
    },
    {
      name: "2020 Jeep Wrangler",
      description: "Tire pressure alert: Check rear-left tire.",
      time: "30m ago",
      icon: "🚨",
      color: "#F44336",
    },
    {
      name: "2024 Toyota Corolla",
      description: "The vehicle has entered the lot. Fuel: 60%. Odometer: 8,122 miles.",
      time: "10m ago",
      icon: "🚗",
      color: "#4CAF50",
    },
    {
      name: "2022 Nissan Rogue",
      description: "Geofence alert: The vehicle has entered a restricted area.",
      time: "3h ago",
      icon: "⚠️",
      color: "#FFC107",
    },
    {
      name: "2023 Mercedes-Benz GLE",
      description: "Battery health check required. Battery: 78%.",
      time: "4h ago",
      icon: "🔧",
      color: "#3F51B5",
    },
    {
      name: "2024 Chevrolet Silverado",
      description: "The vehicle has left the lot. Fuel: 50%. Odometer: 23,876 miles.",
      time: "45m ago",
      icon: "🚚",
      color: "#607D8B",
    },
    {
      name: "2021 Hyundai Sonata",
      description: "Engine warning: Possible overheating detected.",
      time: "2h ago",
      icon: "🔥",
      color: "#E91E63",
    },
    {
      name: "2022 Subaru Outback",
      description: "The vehicle is parked in a restricted zone.",
      time: "1h ago",
      icon: "🅿️",
      color: "#9C27B0",
    },
    {
      name: "2024 Porsche Taycan",
      description: "Software update available for the vehicle's operating system.",
      time: "3h ago",
      icon: "📥",
      color: "#8BC34A",
    },
    {
      name: "2022 Tesla Model Y",
      description: "The vehicle is charging. Battery: 45%. Estimated time to full charge: 2 hours.",
      time: "20m ago",
      icon: "⚡",
      color: "#2196F3",
    },
    {
      name: "2023 Kia Sorento",
      description: "Geofence alert: The vehicle has entered a monitored area.",
      time: "10m ago",
      icon: "📍",
      color: "#FF9800",
    },
    {
      name: "2021 Dodge Ram 1500",
      description: "Oil change required soon. Mileage: 45,123 miles.",
      time: "2h ago",
      icon: "🛢️",
      color: "#795548",
    },
    {
      name: "2024 Lexus RX 350",
      description: "The vehicle's doors are unlocked. Please secure them.",
      time: "5m ago",
      icon: "🔓",
      color: "#3F51B5",
    },
    {
      name: "2023 Audi Q5",
      description: "Collision warning: Sudden stop detected within 5 meters.",
      time: "1h ago",
      icon: "🚨",
      color: "#F44336",
    },
  ];
  
  

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
            width:'40px !important',
            minWidth:'40px',
            height: '40px'
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListComponent({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col p-6 overflow-hidden rounded-lg border bg-background md:shadow-xl",
        className,
      )}
    >
      <AnimatedList delay={3000} >
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
