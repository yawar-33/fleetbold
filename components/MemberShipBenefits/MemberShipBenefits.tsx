'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LottieAnimation from './LottieAnimation';
import MembershipHeader from './MembershipHeader';

const MemberShipBenefitsCard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
   <>
   <MembershipHeader />
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              ease: "easeOut"
            }}
            className="relative group"
          >
            <motion.div 
              className="relative p-8 rounded-2xl border border-white/10 bg-black/40 shadow-2xl"
             
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center  " />
              
              <div className="w-24 h-24 mb-6 m-auto flex items-center justify-center relative z-10">
                <LottieAnimation
                  src={feature.src}
                  className="w-24 h-24"
                />
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3 text-white text-center">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed text-center ">
                  {feature.description}
                </p>
              </div>

              <div className="absolute -inset-px bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
   </>
  );
};

export default MemberShipBenefitsCard;