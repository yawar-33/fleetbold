"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React, { ReactNode, useEffect, useState } from "react";
import { testimonialData } from "./testimonialData";
import axios from "axios";

export const InfiniteMovingCards = ({
    skills,
    direction = "left",
    speed = "fast", 
    pauseOnHover = true,
    className,
}: {
    skills: Array<[string, ReactNode]>;
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const url = process.env.NEXT_PUBLIC_APP_URL
    const [testimonialDataList, setTestimonialDataList] = useState([]);
 const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  };
    const getData = async () => {
    axios
      .get(`${url}/testimonial/public/getAll`, options)
      .then((res) => {
        setTestimonialDataList(res.data.data)
      }).catch((error) => {
         setTestimonialDataList(testimonialData)
        // toast({
        //   title: "error:",
        //   description:
        //     error.message
        // });
      })

  };
    useEffect(() => {
        addAnimation();
        getData()
    }, []);

    const [start, setStart] = useState(false);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 max-w-sm md:max-w-5xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {testimonialData.map((item, index) => (
                    <div className="relative bg-[#0C0C0F] w-max h-[291px] rounded-lg flex-shrink-0" key={index}>
                        <div className="overflow-hidden">
                            <div className="flex space-x-6 snap-x snap-mandatory overflow-x-auto scrollbar-hide">
                                <div className="flex-shrink-0 w-72 rounded-lg bg-opacity-70 p-6 flex flex-col justify-between">
                                    <div className="flex justify-between mb-3">
                                        <div className="flex items-center gap-3">
                                            <img alt="Profile picture of Allen Moran, a man with short dark hair and a blue shirt"
                                                className="w-8 h-8 rounded-full object-cover" height="32"
                                                src="https://storage.googleapis.com/a1aa/image/394f99cf-7686-435f-c41d-0d0cf291ff38.jpg" width="32" />
                                            <span className="font-semibold text-sm">
                                                {item.name}
                                            </span>
                                        </div>
                                        <div className="text-yellow-400 space-x-1">
                                            <Star />
                                        </div>
                                    </div>
                                    <p className="text-xs leading-tight mb-4 font-[Outfit] text-[15px] leading-[1.4] text-white/70 font-normal not-italic tracking-normal no-underline text-left">
                                        {item.content}
                                    </p>
                                    <p className="text-[9px] font-semibold self-end">
                                        — Turo Host
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>

                ))}
            </ul>
        </div>
    );
};