'use client';

import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect } from 'react';

const ServicesSection = () => {
  const url = process.env.NEXT_PUBLIC_APP_URL
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [servicesList, setServicesList] = useState([]);
  const leftControls = useAnimation();
  const rightControls = useAnimation();
const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  };
  useEffect(() => {
    setIsVisible(true);
    getData()
    // Start animations
    leftControls.start({
      y: [0, -100],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    });
    rightControls.start({
      y: [-100, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    });
  }, [leftControls, rightControls]);
const getData = async () => {
    axios
      .get(`${url}/services/public/getAll`, options)
      .then((res) => {
        setServicesList(res.data.data)
      }).catch((error) => {
         setServicesList(services)
        // toast({
        //   title: "error:",
        //   description:
        //     error.message
        // });
      })

  };
  const handleLeftHover = (isHovering) => {
    if (isHovering) {
      leftControls.stop();
      setHoveredCard('left');
    } else {
      setHoveredCard(null);
      leftControls.start({
        y: [0, -100],
        transition: {
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }
      });
    }
  };

  const handleRightHover = (isHovering) => {
    if (isHovering) {
      rightControls.stop();
      setHoveredCard('right');
    } else {
      setHoveredCard(null);
      rightControls.start({
        y: [-100, 0],
        transition: {
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }
      });
    }
  };

  const services = [
    {
      title: "3D Design",
      description: "Explore new dimensions with our 3D design services. From product mockups to immersive environments, we deliver high-quality 3D visuals that stand out.",
      icon: "https://framerusercontent.com/images/W7gQ3A9LHL4JFP7XIJtRlK910.svg"
    },
    {
      title: "Logo Design",
      description: "Create a memorable and impactful logo that embodies your brand's identity. Our designers work closely with you to deliver a logo that stands out.",
      icon: "https://framerusercontent.com/images/mshk40AyxRtRxKPbTzFZMsXE.svg"
    },
    {
      title: "Branding",
      description: "Build a strong and cohesive brand identity with our comprehensive branding services. We help you create a consistent and recognizable brand image.",
      icon: "https://framerusercontent.com/images/9heQGaBkz9r5Qd2tkiZZgUcJNY.svg"
    },
    {
      title: "UI/UX Design",
      description: "Improve user experience and interface design with our expert UI/UX services. We focus on creating intuitive and engaging digital experiences for your users.",
      icon: "https://framerusercontent.com/images/knDbwCDQFdVjP3Gg5zDjYJEinyE.svg"
    },
    {
      title: "Website Design",
      description: "Craft stunning, user-friendly websites tailored to your brand's needs. Our design team ensures your online presence is both visually appealing and highly functional.",
      icon: "https://framerusercontent.com/images/Ip5ahIvRsk4Ed8a48qeM3w5q2g.svg"
    },
    {
      title: "Graphics Design",
      description: "Enhance your brand's visual communication with custom graphics. From marketing materials to social media content, our designers bring your ideas to life.",
      icon: "https://framerusercontent.com/images/Z7axBOVLm2D91xX6F83ZPkRmis.svg"
    },
    {
      title: "Illustration",
      description: "Add a unique touch to your projects with custom illustrations. Our talented illustrators can create artwork that perfectly complements your brand.",
      icon: "https://framerusercontent.com/images/xYSEo8npvPP95FSFG7F9dp23rhI.svg"
    },
    {
      title: "Motion Design",
      description: "Bring your ideas to life with dynamic motion designs. Our team creates compelling animations and videos that captivate your audience.",
      icon: "https://framerusercontent.com/images/hSsxTIt1F188CnKmQRlEEJlEXI.svg"
    }
  ];

  // Split services into two columns
  // const leftColumnServices = servicesList.slice(0, 4);
  // const rightColumnServices = servicesList.slice(4, 8);
const leftColumnServices = servicesList.filter((_, index) => index % 2 === 0); // Even indexes
const rightColumnServices = servicesList.filter((_, index) => index % 2 === 1); // Odd indexes

  return (
    <section id="services" className="w-full py-16 ">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-5xl text-center font-bold text-white leading-tight">
                One Stop Design Solution
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-center'
            >
              <p className="text-lg text-gray-300 leading-relaxed max-w-3xl text-center m-auto">
                From web design to branding, our expert team delivers creative solutions that elevate your brand and captivate your audience.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Services Ticker - Two Vertical Columns */}
        <div className="relative h-[600px] overflow-hidden">
          <div className="flex gap-8">

            {/* Left Column - Moving Up to Down */}
            <div className="flex-1 relative overflow-hidden">
              <motion.div
                className="flex flex-col gap-6"
                animate={leftControls}
              >
                {[...leftColumnServices].map((service, index) => (
                  <motion.div
                    key={`left-${index}`}
                    className="relative p-6 rounded-lg  w-full"
                    whileHover={{
                      scale: 1.02,
                      // backgroundColor: "rgba(31, 41, 55, 0.9)"
                    }}
                    onHoverStart={() => handleLeftHover(true)}
                    onHoverEnd={() => handleLeftHover(false)}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-1/3 h-full p-3 rounded-lg bg-gray-800/50">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-full h-full object-contain opacity-90"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-white/90 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Moving Down to Up */}
            <div className="flex-1 relative overflow-hidden">
              <motion.div
                className="flex flex-col gap-6"
                animate={rightControls}
              >
                {[...rightColumnServices].map((service, index) => (
                  <motion.div
                    key={`right-${index}`}
                    className="relative p-6 rounded-lg  w-full"
                    whileHover={{
                      scale: 1.02,
                      // backgroundColor: "rgba(31, 41, 55, 0.9)"
                    }}
                    onHoverStart={() => handleRightHover(true)}
                    onHoverEnd={() => handleRightHover(false)}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0 w-1/3 h-full p-3 rounded-lg bg-gray-800/50">
                        <img
                          src={service.icon}
                          alt={service.title}
                          className="w-full h-full object-contain opacity-90"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl font-medium text-white/90 mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-white/70 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Gradient Masks - Top and Bottom */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 right-0 h-32  z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32  z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;