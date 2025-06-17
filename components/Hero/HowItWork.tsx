'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ProcessBadge = () => {
    return (
        <>
            <div className="flex justify-center mb-6 " id="how-it-works-section">
                <div className=" bg-[#0C0C0F] rounded px-3 py-1 text-xs font-semibold flex items-center gap-1 select-none border border-[rgba(238,238,238,0.1)]">
                    <img src="https://framerusercontent.com/images/D1xufro5jRUAjALx1V1rogtEfZA.png" alt="Testinomials" height={24} width={24} />
                    <span className="font-outfit text-[13px] font-medium leading-[1.8em] text-white/80 capitalize">
                        Process
                    </span>
                </div>
            </div>

            <section className="text-center max-w-xl mx-auto mb-12">
                <h2 className="font-outfit font-[500] text-[45px] leading-tight12 tracking-normal text-center text-white no-underline">How It Works</h2>
                <p className="font-outfit font-normal text-[18px] leading-relaxed15 tracking-normal text-center text-white/80 no-underline">
                    Our Simple 3- Step Process
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
                y: 150,
                willChange: 'transform'
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true,
                amount: 0.1,
                margin: "100px"
            }}
            transition={{
                type: "spring",
                damping: 32,
                stiffness: 496,
                mass: 1,
                delay: 0.2 + (index * 0.1)
            }}
            className="relative"
        >
            {/* Main Card Container */}
            <div
                className="w-full rounded-lg h-full"
                style={{
                    backgroundColor: 'var(--token-1487e9ff-e7f3-4e6b-8871-b47a173be7cd, rgb(12, 12, 15))',
                    boxShadow: `
            0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.05),
            0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.05),
            0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.05),
            0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)
          `
                }}
            >
                {/* Card Frame */}
                <div className="rounded-lg">
                    <div>
                        {/* Inner Card */}
                        <div
                            className="p-8 rounded-lg"
                            style={{
                                boxShadow: `
                  0px 0.7961918735236395px 2.3885756205709185px -0.625px rgba(0, 0, 0, 0.05),
                  0px 2.414506143104518px 7.2435184293135535px -1.25px rgba(0, 0, 0, 0.05),
                  0px 6.382653521484461px 19.147960564453385px -1.875px rgba(0, 0, 0, 0.05),
                  0px 20px 60px -2.5px rgba(0, 0, 0, 0.05)
                `
                            }}
                        >
                            {/* Counter SVG placeholder */}
                            <div className="flex justify-center mb-6">
                                <div
                                    className="w-16 h-16 flex-shrink-0"
                                    style={{
                                        imageRendering: 'pixelated',
                                        backgroundSize: '100% 100%',
                                        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 66 66"><circle cx="33" cy="33" r="30" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"/><text x="33" y="38" text-anchor="middle" fill="white" font-size="20" font-weight="bold">${step}</text></svg>')`
                                    }}
                                    aria-hidden="true"
                                />
                            </div>

                            {/* Title */}
                            <div className="flex flex-col justify-start flex-shrink-0 mb-4">
                                <p
                                    className="text-center"
                                    style={{
                                        fontFamily: '"Outfit", "Outfit Placeholder", sans-serif',
                                        fontSize: step === 2 ? '24px' : '25px',
                                        fontWeight: '500',
                                        color: 'rgb(255, 255, 255)'
                                    }}
                                >
                                    {title}
                                </p>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col justify-start flex-shrink-0">
                                <p
                                    className="font-[300] text-[18px] leading-[1.4em] text-center text-white/70 font-outfit"
                                >
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

const HowItWorksSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        once: true,
        amount: 0.1,
        margin: "100px"
    });

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

    return (
        <section
            id="how-it-works"
            ref={sectionRef}
            className="py-20  overflow-hidden max-w-7xl mx-auto "
        >
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
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
                            margin: "100px"
                        }}
                        transition={{
                            type: "spring",
                            damping: 32,
                            stiffness: 496,
                            mass: 1,
                            delay: 0.2
                        }}
                    >
                        <ProcessBadge />
                    </motion.div>


                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
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