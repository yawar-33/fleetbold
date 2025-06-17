"use client";
import React from "react";
import { TikTokEmbed } from "react-social-media-embed";
import SectionHeader from "../Common/SectionHeader";
import Image from "next/image";

const TiktokTestimonial = ({ title, details, url }) => {
  return (
    <section
      id={"testimonials"}
      className="relative py-32 white"
    >
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0"></div>
      <div className="relative z-10 container px-4 mx-auto">
        <div className="flex flex-wrap flex-col-reverse md:flex-row md:justify-center lg:items-center -m-8  ">
          <div className="w-full md:w-1/2 p-8">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TikTokEmbed url={url} width={350} />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <div className="relative md:max-w-xl">
              <div className="relative z-10">
                <h2 className="mb-11 text-6xl md:text-8xl xs:text-8xl font-bold font-heading tracking-px-n leading-none text-gray-900">
                  {title}
                </h2>
                <div className="md:max-w-lg">
                  <div className="flex flex-wrap -m-2 mb-3">
                    <div className="w-auto p-2">
                      <svg
                        className="mt-1"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="10" cy="10" r="10" fill="#4F46E5"></circle>
                        <path
                          d="M6 10.6667L8.66667 13.3333L14 8"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex-1 p-2">
                      <p className="font-medium leading-relaxed">{details}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TiktokTestimonial;
