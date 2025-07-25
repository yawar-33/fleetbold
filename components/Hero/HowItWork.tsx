'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import axios from 'axios';
const ProcessBadge = (howItWorksData) => {
    return (
        <>
            <div className="flex justify-center mb-4 sm:mb-6" id="how-it-works-section">
                <div className="bg-[#0C0C0F] rounded px-3 py-1 text-xs font-semibold flex items-center gap-1 select-none border border-[rgba(238,238,238,0.1)]">
                    <img src="https://framerusercontent.com/images/D1xufro5jRUAjALx1V1rogtEfZA.png" alt="Process" height={24} width={24} />
                    <span className="font-outfit text-[13px] font-medium leading-[1.8em] text-white/80 capitalize">
                        Process
                    </span>
                </div>
            </div>

            <section className="text-center max-w-xl mx-auto mb-8 sm:mb-12 px-4">
                <h2 className="font-outfit font-[500] text-[28px] sm:text-[35px] lg:text-[45px] leading-tight tracking-normal text-center text-white no-underline mb-2 sm:mb-4">
                   {howItWorksData.headerTitle}
                </h2>
                <p className="font-outfit font-normal text-[16px] sm:text-[18px] leading-relaxed tracking-normal text-center text-white/80 no-underline">
                   {howItWorksData.headerDescription}
                </p>
            </section>
        </>
    );
};

const StepCard = ({ step, title, description, index }) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 50,
                willChange: 'transform'
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true,
                amount: 0.1,
                margin: "50px"
            }}
            transition={{
                type: "spring",
                damping: 32,
                stiffness: 496,
                mass: 1,
                delay: 0.1 + (index * 0.1)
            }}
            className="relative w-full"
        >
            {/* Main Card Container */}
            <div
                className="w-full rounded-lg h-full min-h-0"
                style={{
                    backgroundColor: 'var(--token-1487e9ff-e7f3-4e6b-8871-b47a173be7cd, rgb(12, 12, 15))',
                    boxShadow: `
                        0px 0.8px 2.4px -0.6px rgba(0, 0, 0, 0.05),
                        0px 2.4px 7.2px -1.3px rgba(0, 0, 0, 0.05),
                        0px 6.4px 19.1px -1.9px rgba(0, 0, 0, 0.05),
                        0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)
                    `
                }}
            >
                {/* Card Frame */}
                <div className="rounded-lg">
                    <div>
                        {/* Inner Card */}
                        <div
                            className="p-4 sm:p-6 lg:p-8 rounded-lg"
                            style={{
                                boxShadow: `
                                    0px 0.8px 2.4px -0.6px rgba(0, 0, 0, 0.05),
                                    0px 2.4px 7.2px -1.3px rgba(0, 0, 0, 0.05),
                                    0px 6.4px 19.1px -1.9px rgba(0, 0, 0, 0.05),
                                    0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)
                                `
                            }}
                        >
                            {/* Counter SVG */}
                            <div className="flex justify-center mb-4 sm:mb-6">
                                <div
                                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex-shrink-0"
                                    style={{
                                        imageRendering: 'pixelated',
                                        backgroundSize: '100% 100%',
                                        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 66"><circle cx="33" cy="33" r="30" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"/><text x="33" y="38" text-anchor="middle" fill="white" font-size="20" font-weight="bold">${step}</text></svg>')`
                                    }}
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Title */}
                            <div className="flex flex-col justify-start flex-shrink-0 mb-3 sm:mb-4">
                                <h3
                                    className="text-center break-words"
                                    style={{
                                        fontFamily: '"Outfit", "Outfit Placeholder", sans-serif',
                                        fontSize: 'clamp(18px, 4vw, 25px)',
                                        fontWeight: '500',
                                        color: 'rgb(255, 255, 255)',
                                        lineHeight: '1.2'
                                    }}
                                >
                                    {title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col justify-start flex-shrink-0">
                                <p className="font-[300] text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.4em] text-center text-white/70 font-outfit break-words">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
 const steps = [
        {
            title: "Link Your GPS Devices",
            description: "Log in with your GPS provider whether it's Tesla, Bouncie, Moovetrax, or another supported platform. FleetBold will instantly detect and sync all active vehicles in your fleet."
        },
        {
            title: "Sync Your Turo Bookings",
            description: "Securely connect your Turo email. FleetBold will automatically import your past and current bookings and keep everything synced in real time going forward."
        },
        {
            title: "Unlock the Full Dashboard",
            description: "Track every trip, view earnings, generate invoices, and receive smart alerts for mileage, late returns, tolls, and more. Everything you need all in one powerful dashboard. Enjoy!"
        }
    ];
const HowItWorksSection = () => {
    const url = process.env.NEXT_PUBLIC_APP_URL
 const [howItWorksData, setHowItWorksData] = useState({
     howItWorksItems:[...steps],
      headerTitle: "How It Works",
      headerDescription: "Our Simple 3-Step Process",
   });
  useEffect(() => {
    getData()
  }, []);
     const getData = async () => {
    axios
      .get(`${url}/howItWorksHeader/howItWorks-section`)
      .then((res) => {
        setHowItWorksData(res.data.data)
      }).catch((error) => {
        
        // toast({
        //   title: "error:",
        //   description:
        //     error.message
        // });
      })

  };
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.1,
        margin: "50px"
    });

   

    return (
        <section
            id="how-it-works"
            ref={sectionRef}
            className="py-12 sm:py-16 lg:py-20 overflow-hidden w-full"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    {/* Badge */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                            transformPerspective: 1200
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transformPerspective: 1200
                        }}
                        viewport={{
                            once: true,
                            amount: 0.1,
                            margin: "50px"
                        }}
                        transition={{
                            type: "spring",
                            damping: 32,
                            stiffness: 496,
                            mass: 1,
                            delay: 0.1
                        }}
                    >
                        <ProcessBadge {...howItWorksData}/>
                    </motion.div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto w-full">
                    {howItWorksData.howItWorksItems.map((step, index) => (
                        <StepCard
                            key={index}
                            step={index + 1}
                            title={step.title}
                            description={step.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;