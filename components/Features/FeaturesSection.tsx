"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import createGlobe from "cobe";
 
import { AnimatedListComponent } from "../Lists/AnimatedListComponent";
import { IphoneMockupComponent } from "../Mockup/IphoneMockupComponent";
import HeroVideoDialog from "../ui/hero-video-dialog";
import Image from "next/image";

export function FeaturesSection() {
  const features = [
    {
      title: "Never miss important notifications",
      description:
        "Perform maintenance on time, charge penalties to your clients, and act quickly if a vehicle is involved in an accident.",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Live Location",
      description:
        "Track your vehicles in real-time with live location updates directly in the app",
      skeleton: <SkeletonTwo />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Explore Our App on YouTube",
      description:
        "Discover detailed insights and features about our product through engaging YouTube content.",
      skeleton: <SkeletonThree />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800 max-h-[400px]",
    },
    {
      title: "Access Your Vehicles Anytime",
      description:
        "Stay connected with your vehicles 24/7. Monitor and manage them effortlessly from anywhere, at any time",
      skeleton: <SkeletonFour />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none max-h-[400px]",
    },
  ];

  return (
    <div className="relative z-20 py-0 lg:pt-20 lg:pb-40 max-w-7xl mx-auto px-0 sm:px-0">
      <div className="md:px-0 sm:px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          Packed with essential features
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
        From real-time tracking to smart notifications, every feature is thoughtfully designed to keep you connected, informed, and in control, making fleet management effortless and intuitive
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`md:p-4 py-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="relative flex py-8 md:px-2 gap-10 h-full">
      <div className="w-full md:p-5 mx-auto dark:bg-neutral-900 group h-full">
        <AnimatedListComponent />
      </div>
      <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-black via-white dark:via-black to-transparent w-full pointer-events-none" />
      <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent w-full pointer-events-none" />
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="relative flex flex-col md:p-8 sm:p-0 py-8 gap-10 h-full overflow-hidden">
      <div className="flex flex-row items-center justify-center">
        <Image className="" src='/assets/png/live-gps.png' height={300} width={300} alt="imagen"/>
        {/* <IphoneMockupComponent src="assets/png/live-gps.png" /> */}
      </div>
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <HeroVideoDialog
      className="dark:hidden block"
      animationStyle="from-center"
      videoSrc="https://www.youtube.com/embed/BaK2rQtH1ho?si=L5YKbUz0-U7xU2qW"
      thumbnailSrc="https://i.ytimg.com/vi/BaK2rQtH1ho/hq720.jpg"
      thumbnailAlt="Hero Video"
    />
  );
};

export const SkeletonFour = () => {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
};

export const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};
