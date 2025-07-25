"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import TestimonialScrolling from "./testimonial-scrolling";
import { testimonialData } from "./testimonialData"
import axios from "axios";

const Testimonial = () => {
   const url = process.env.NEXT_PUBLIC_APP_URL
      const [testimonialDataList, setTestimonialDataList] = useState({
      faqs:[testimonialData],
      headerTitle: 'Frequently Asked Questions (FAQs)',
      headerDescription: 'Find the information you need about our services, plans, and processes. If you have more questions, feel free to reach out to us!'
    
      });
   const options = {
      headers: {
        "Content-Type": "application/json",
        Accept: "*/*",
      },
    };
      const getData = async () => {
      axios
        .get(`${url}/testimonialHeader/testimonial-header`, options)
        .then((res) => {
          setTestimonialDataList(res.data.data)
        }).catch((error) => {
          
          // toast({
          //   title: "error:",
          //   description:
          //     error.message
          // });
        })
  
    };
      useEffect(() => {
          getData()
      }, []);
  
  return (
    <main className="max-w-7xl mx-auto px-4 py-12" id="testinomials-section">

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
            <> <div className="flex justify-center mb-6 ">
              <div className=" bg-[#0C0C0F] rounded px-3 py-1 text-xs font-semibold flex items-center gap-1 select-none border border-[rgba(238,238,238,0.1)]">
                <img src="https://framerusercontent.com/images/D1xufro5jRUAjALx1V1rogtEfZA.png" alt="Testinomials" height={24} width={24} />
                <span className="font-outfit text-[13px] font-medium leading-[1.8em] text-white/80 capitalize">
                  Testinomials
                </span>
              </div>
            </div>

              <section className="text-center max-w-xl mx-auto mb-12">
                <h2 className="font-outfit font-[500] text-[45px] leading-tight12 tracking-normal text-center text-white no-underline">{testimonialDataList.headerTitle}</h2>
                <p className="font-outfit font-normal text-[18px] leading-relaxed15 tracking-normal text-center text-white/80 no-underline">
                 {testimonialDataList.headerDescription}
                </p>
              </section></>
          </motion.div>
        </div>

      </div>
      <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center items-center xl:space-y-0 mx-auto">
        <TestimonialScrolling />
      </motion.div>
    </main>
  );
};

export default Testimonial;
