"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export function WobbleCardGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-[#0086ff] min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Real-Time Vehicle Tracking
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            Monitor your entire fleet with live GPS updates, ensuring every vehicle&#39;s location is just a click away. Stay informed with speed, route, and status data to optimize fleet efficiency and security.
          </p>
        </div>
        <Image
          src="/assets/png/demo.png"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#0086ff]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Maintenance Alerts & Insights
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Keep your rental cars in peak condition with automated maintenance reminders and diagnostic insights. Reduce downtime and costs by addressing potential issues before they become problems.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 bg-[#0086ff] lg:col-span-3 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Driver Behavior Analysis
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Gain insights into driving habits with detailed behavior analysis, including speed monitoring, harsh braking, and idle time. Improve safety, reduce wear and tear, and enhance the customer experience.
          </p>
        </div>
        <Image
          src="/assets/png/demo.png"
          width={1000}
          height={1000}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
