'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LottieAnimation from './LottieAnimation';
import MembershipHeader from './MembershipHeader';
import axios from 'axios';
const MemberShipBenefitsCard = () => {
  const url = process.env.NEXT_PUBLIC_APP_URL
  const [isVisible, setIsVisible] = useState(false);
  const [benefitsList, setBenefitsList] = useState([]);
  useEffect(() => {
    setIsVisible(true);
    getData()
  }, []);
  const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  };
  const getData = async () => {
    axios
      .get(`${url}/services/getlist`, options)
      .then((res) => {
        setBenefitsList(res.data.data)
      }).catch((error) => {
        // toast({
        //   title: "error:",
        //   description:
        //     error.message
        // });
      })

  };

  const convertToJson = (icon) => {
    const json = atob(icon); // decode base64
    try {
      const data = JSON.parse(json);
      console.log('data', data)
      return data
    } catch (err) {
      console.error("Invalid base64 Lottie JSON:", err);
    }
  }

  const features = [
    {
      title: "Unlimited Request",
      description: "Make as many design requests as you need without any limits.",
      src: "https://framerusercontent.com/assets/vgOkoU9rwLT1K2cxGl0cOK8yiXQ.json"
    },
    {
      title: "Unique Designs",
      description: "Stand out with custom, one-of-a-kind designs tailored specifically for your brand.",
      src: "https://framerusercontent.com/assets/I9xlhPU99WGrb5js2m2QFzYN4.json"
    },
    {
      title: "Fast Delivery",
      description: "Get your designs quickly and efficiently, ensuring your projects stay on track.",
      src: "https://framerusercontent.com/assets/PzwKVkOPz3y9ZMjmapEb7adQGU.json"
    },
    {
      title: "Conversion Friendly",
      description: "Our designs are optimized to drive engagement and boost conversions.",
      src: "https://framerusercontent.com/assets/5p3Xq0b1Hhp3NsQeSF1FaopYWI.json"
    },
    {
      title: "Full Solution",
      description: "From concept to completion, we provide design solutions to cover all your needs.",
      src: "https://framerusercontent.com/assets/kuYQckJlc62KSjyDl7yOTLwzzo.json"
    },
    {
      title: "Full Satisfaction",
      description: "Your satisfaction is our top priority. We'll revise the designs until you're 100% satisfied.",
      src: "https://framerusercontent.com/assets/BJ4F7Sz38tbwXHxmoCjePRCKk.json"
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      <MembershipHeader />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full">
          {benefitsList.map((feature, index) =>

          (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut"
              }}
              className="relative group w-full"
            >
              <motion.div
                className="relative p-6 sm:p-8 rounded-2xl border border-white/10 bg-black/40 shadow-2xl w-full min-h-0"
                transition={{ duration: 0.3 }}
              >
                {/* Lottie Animation Container */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 sm:mb-6 mx-auto flex items-center justify-center relative z-10 flex-shrink-0">
                  {/* <LottieAnimation
                    src={()=>convertToJson(feature.icon)}
                    className="w-full h-full max-w-20 max-h-20 sm:max-w-24 sm:max-h-24"
                  /> */}
                  <img
                    src={`data:image/png;base64,${feature.icon}`}
                    alt="Feature Icon"
                    className="w-full h-full max-w-20 max-h-20 sm:max-w-24 sm:max-h-24"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 w-full">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white text-center break-words">
                    {feature.title}
                  </h3>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center break-words hyphens-auto">
                    {feature.description}
                  </p>
                </div>

                {/* Hover gradient effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemberShipBenefitsCard;