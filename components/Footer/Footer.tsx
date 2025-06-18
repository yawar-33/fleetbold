'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const navigationLinks = [
    { name: 'Process', href: '#process' },
    { name: 'Benefits', href: '#benefit' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Careers', href: '/carrers' },
    { name: 'Investor', href: '/investor' },
    { name: 'FAQs', href: '#faq' },
    // { name: '404', href: '/404' }
  ];

  return (
    <>

      <div className="text-white  w-full" id="contact-us-section">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="bg-[#0C0C0F] rounded-xl p-6 space-y-6 text-xs leading-relaxed">
            <div className="rounded-lg p-8 text-center ">
              <h2 className="text-[45px] font-medium leading-[1.2] text-center">
                Have any Question? Let's Talk
              </h2>
              <p className="mt-5 text-white/80 text-[18px] font-normal leading-[1.5em] tracking-normal text-center not-italic no-underline">
                Schedule a free discovery call to learn more how we work and
                <br className="hidden sm:block" />
                how can we help you and your business.
              </p>
              <button className="mt-5 border border-gray-600 px-6 py-2 rounded text-sm hover:bg-gray-900 inline-flex items-center mx-auto" type="button">
                Book a call
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <footer className="w-full  py-12 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col  items-center justify-between gap-8">

            {/* Logo Section */}
            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo Image */}
              <Link href="#hero" className="block">
                <div className="w-full h-16 opacity-70 hover:opacity-100 transition-opacity duration-300">
                  <img
                    src="/assets/png/branding/logo2.png"
                    alt="PixelLab Logo"
                    className="w-full h-full object-cover object-center rounded"
                  />
                </div>
              </Link>

              {/* Brand Name */}
           
            </motion.div>

            {/* Navigation Links */}
            <motion.nav
              className="flex  gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <Link
                    href={link.href}
                    className=" text-white text-sm font-normal hover:underline block text-white font-light hover:text-white transition-colors duration-300 text-lg"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/carrers"
                className="text-white text-sm font-normal hover:underline block text-white font-light hover:text-white transition-colors duration-300 text-lg"/>
            </motion.nav>
          </div>

          {/* Bottom Border/Divider */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
              <p>FleetBold © 2025 —  Designed with care, written in clean code, driven by AI. Zero bugs, just vibes.</p>
              <div className="flex gap-6">
                <Link href="/privacy" className="hover:text-white/70 transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-white/70 transition-colors duration-300">
                  Terms of Service
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </>


  );
};

export default Footer;


const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20" fill="white">
    <path d="M 17.317 10.442 L 11.692 16.067 C 11.448 16.311 11.052 16.311 10.808 16.067 C 10.564 15.823 10.564 15.427 10.808 15.183 L 15.366 10.625 L 3.125 10.625 C 2.78 10.625 2.5 10.345 2.5 10 C 2.5 9.655 2.78 9.375 3.125 9.375 L 15.366 9.375 L 10.808 4.817 C 10.564 4.573 10.564 4.177 10.808 3.933 C 11.052 3.689 11.448 3.689 11.692 3.933 L 17.317 9.558 C 17.435 9.675 17.5 9.834 17.5 10 C 17.5 10.166 17.435 10.325 17.317 10.442 Z" />
  </svg>
);
