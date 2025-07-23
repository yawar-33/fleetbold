'use client';
import axios from "axios";
import React, { useState, useEffect } from "react";

const NavbarAltV2 = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState('');
const url = process.env.NEXT_PUBLIC_APP_URL
const [data, setdata] = useState([]);
//   useEffect(() => {
//     getData()
//   }, []);
  const options = {
    headers: {
      "Content-Type": "application/json",
      Accept: "*/*",
    },
  };
     const getData = async () => {
    axios
      .get(`${url}/navitem/public/getAll`, options)
      .then((res) => {
        if(res.data.data.length !==0){
         setdata(res.data.data[0])
        }
       
      }).catch((error) => {
        // setdataList(steps)
        // toast({
        //   title: "error:",
        //   description: 
        //     error.message
        // });
      })
    } 
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
            if (window.innerWidth > 768) {
                setIsMobileMenuOpen(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'services', 'how-it-works-section', 'testinomials-section', 'faq-section', 'pricing-section'];
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const element = document.getElementById(sections[i]);
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        // Only add scroll listener if we're on a page with sections
        const hasSections = document.getElementById('hero') || 
                           document.getElementById('services') || 
                           document.getElementById('how-it-works-section') ||
                           document.getElementById('testinomials-section') ||
                           document.getElementById('faq-section') ||
                           document.getElementById('pricing-section');

        if (hasSections) {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Check initial position
        } else {
            setActiveSection(''); // Clear active section if no sections exist
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleContactClick = () => {
        const section = document.getElementById("contact-us-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        closeMobileMenu();
    };

    const handleNavClick = (href: string) => {
        if (href.startsWith('#')) {
            const element = document.getElementById(href.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        closeMobileMenu();
    };

    const isActive = (sectionId: string) => {
        return activeSection === sectionId;
    };

    return (
        <div className="navbar-container">
            <nav className="navbar">
                <div className="navbar-inner">
                    <div className="nav-content">
                        {/* Logo */}
                        <a 
                            href="#hero" 
                            className="logo-container"
                            aria-label="FleetBold Home"
                            onClick={() => handleNavClick('#hero')}
                        >
                            <div className="logo-wrapper">
                                <img 
                                    src="https://framerusercontent.com/images/7GJD6qhMhDrRI9KsaDE4fwrnFAs.png" 
                                    alt="FleetBold Logo" 
                                    className="logo-image"
                                />
                            </div>
                        </a>



                        {/* Desktop Navigation */}
                        {!isMobile && (
                            <>
                                {/* Separator */}
                                <div className="nav-separator"></div>

                                {/* Navigation Links */}
                               
                                <div className="nav-links">
                                     {
                                    data && data.length>0?data.map((item,index)=>(
                                         <a 
                                        href="#services" 
                                        className={`nav-link ${isActive('services') ? 'nav-link-active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick('#services');
                                        }}
                                    >
                                        Features
                                    </a>
                                    )

                                    

                                    ):<>
                                      <a 
                                        href="#services" 
                                        className={`nav-link ${isActive('services') ? 'nav-link-active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick('#services');
                                        }}
                                    >
                                        Features
                                    </a>
                                    <a 
                                        href="https://blog.fleetbold.com/" 
                                        target="_blank" 
                                        rel="noopener" 
                                        className="nav-link"
                                    >
                                        Our Blog
                                    </a>
                                    <a 
                                        href="#how-it-works-section" 
                                        className={`nav-link ${isActive('how-it-works-section') ? 'nav-link-active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick('#how-it-works-section');
                                        }}
                                    >
                                        How it Works
                                    </a>
                                    <a 
                                        href="#testinomials-section"
                                        className={`nav-link ${isActive('testinomials-section') ? 'nav-link-active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick('#testinomials-section');
                                        }}
                                    >
                                        Testimonials
                                    </a>
                                    <a 
                                        href="#faq-section" 
                                        className={`nav-link ${isActive('faq-section') ? 'nav-link-active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick('#faq-section');
                                        }}
                                    >
                                        FAQs
                                    </a>
                                    <a 
                                        href="#pricing-section"
                                        className={`nav-link ${isActive('pricing-section') ? 'nav-link-active' : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick('#pricing-section');
                                        }}
                                    >
                                        Pricing
                                    </a></>
                                }
                                  
                                </div>

                                {/* Contact Button */}
                                <div className="contact-button-container">
                                    <button onClick={handleContactClick} className="contact-button">
                                        <span className="contact-button-text">
                                            Contact Us
                                        </span>
                                    </button>
                                </div>
                            </>
                        )}

                        {/* Mobile Menu Toggle */}
                        {isMobile && (
                            <button 
                                className="mobile-menu-toggle" 
                                onClick={toggleMobileMenu}
                                aria-label="Toggle mobile menu"
                            >
                                <div className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></div>
                                <div className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></div>
                                <div className={`hamburger-line ${isMobileMenuOpen ? 'active' : ''}`}></div>
                            </button>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobile && (
                    <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                        <div className="mobile-menu-content">
                            <div className="mobile-nav-links">
                                <a 
                                    href="#services" 
                                    className={`mobile-nav-link ${isActive('services') ? 'mobile-nav-link-active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('#services');
                                    }}
                                >
                                    Features
                                </a>
                                <a 
                                    href="https://blog.fleetbold.com/" 
                                    target="_blank" 
                                    rel="noopener" 
                                    className="mobile-nav-link"
                                    onClick={closeMobileMenu}
                                >
                                    Our Blog
                                </a>
                                <a 
                                    href="#how-it-works-section" 
                                    className={`mobile-nav-link ${isActive('how-it-works-section') ? 'mobile-nav-link-active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('#how-it-works-section');
                                    }}
                                >
                                    How it Works
                                </a>
                                <a 
                                    href="#testinomials-section"
                                    className={`mobile-nav-link ${isActive('testinomials-section') ? 'mobile-nav-link-active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('#testinomials-section');
                                    }}
                                >
                                    Testimonials
                                </a>
                                <a 
                                    href="#faq-section" 
                                    className={`mobile-nav-link ${isActive('faq-section') ? 'mobile-nav-link-active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('#faq-section');
                                    }}
                                >
                                    FAQs
                                </a>
                                <a 
                                    href="#pricing-section"
                                    className={`mobile-nav-link ${isActive('pricing-section') ? 'mobile-nav-link-active' : ''}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('#pricing-section');
                                    }}
                                >
                                    Pricing
                                </a>
                            </div>

                            <div className="mobile-contact-section">
                                <button onClick={handleContactClick} className="mobile-contact-button">
                                    <span className="mobile-contact-button-text">
                                        Contact Us
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <style jsx>{`
                .navbar-container {
                    position: fixed;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: fit-content;
                    z-index: 50;
                    display: flex;
                    justify-content: center;
                    margin-top: 16px;
                    opacity: 1;
                    will-change: transform;
                }

                .navbar {
                    backdrop-filter: none;
                    background-color: rgba(0, 0, 0, 0);
                    width: 100%;
                    opacity: 1;
                    border: none;
                }

                .navbar-inner {
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    background-color: rgba(13, 13, 13, 0.5);
                    opacity: 1;
                    border-radius: 8px;
                    padding: 0;
                }

                .nav-content {
                    display: flex;
                    align-items: center;
                    padding: 0 16px;
                    height: 48px;
                    gap: 0;
                    opacity: 1;
                }

                .logo-container {
                    display: flex;
                    align-items: center;
                    text-decoration: none;
                    opacity: 1;
                    outline: none;
                    cursor: pointer;
                    transition: opacity 0.2s ease;
                }

                .logo-container:hover {
                    opacity: 0.8;
                }

                .logo-wrapper {
                    width: 32px;
                    height: 32px;
                    opacity: 1;
                    position: relative;
                    border-radius: inherit;
                }

                .logo-image {
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: inherit;
                    object-position: center;
                    object-fit: cover;
                }

                .nav-separator {
                    background-color: rgba(255, 255, 255, 0.25);
                    opacity: 1;
                    border-radius: 4px;
                    will-change: transform;
                    transform: none;
                    transform-origin: 50% 50% 0px;
                    width: 0px;
                    height: 20px;
                    margin: 0 16px;
                }

                .nav-links {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    opacity: 1;
                }

                .nav-links:hover .nav-link-active:not(:hover) {
                    background-color: transparent;
                }

                .nav-link {
                    outline: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    flex-shrink: 0;
                    color: rgb(255, 255, 255);
                    text-decoration: none;
                    transform: none;
                    opacity: 1;
                    font-family: "Outfit", "Outfit Placeholder", sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    position: relative;
                    padding: 6px 12px;
                    margin: -6px -12px;
                    border-radius: 4px;
                }

                .nav-link:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                    text-decoration: none;
                    color: rgb(255, 255, 255);
                    opacity: 1;
                }

                .nav-link-active {
                    background-color: rgba(255, 255, 255, 0.2);
                }

                .nav-link-active:hover {
                    background-color: rgba(255, 255, 255, 0.2);
                    text-decoration: none;
                    color: rgb(255, 255, 255);
                    opacity: 1;
                }

                .contact-button-container {
                    opacity: 1;
                    margin-left: 16px;
                }

                .contact-button {
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    background: linear-gradient(259deg, rgb(36, 36, 36) 0%, rgb(16, 16, 16) 100%);
                    border-radius: 4px;
                    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0px;
                    opacity: 1;
                    will-change: auto;
                    text-decoration: none;
                    outline: none;
                    cursor: pointer;
                    display: inline-block;
                    padding: 8px 12px;
                    transition: all 0.2s ease;
                }

                .contact-button:hover {
                    box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 8px 0px;
                    border-color: rgba(255, 255, 255, 0.7);
                }

                .contact-button-text {
                    outline: none;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    flex-shrink: 0;
                    color: rgb(255, 255, 255);
                    text-decoration: none;
                    transform: none;
                    opacity: 1;
                    font-family: "Outfit", "Outfit Placeholder", sans-serif;
                    font-size: 14px;
                    font-weight: 400;
                }

                /* Mobile Menu Toggle */
                .mobile-menu-toggle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 32px;
                    height: 32px;
                    background: none;
                    border: none;
                    cursor: pointer;
                    margin-left: auto;
                    padding: 4px;
                    transition: all 0.3s ease;
                }

                .hamburger-line {
                    width: 20px;
                    height: 2px;
                    background-color: rgb(255, 255, 255);
                    margin: 2px 0;
                    transition: all 0.3s ease;
                    transform-origin: center;
                }

                .mobile-menu-toggle .hamburger-line:nth-child(1).active {
                    transform: rotate(45deg) translate(6px, 6px);
                }

                .mobile-menu-toggle .hamburger-line:nth-child(2).active {
                    opacity: 0;
                }

                .mobile-menu-toggle .hamburger-line:nth-child(3).active {
                    transform: rotate(-45deg) translate(6px, -6px);
                }

                /* Mobile Menu Overlay */
                .mobile-menu-overlay {
                    position: fixed;
                    top: 80px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: calc(100% - 32px);
                    max-width: 400px;
                    background-color: rgba(13, 13, 13, 0.95);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                    z-index: 40;
                }

                .mobile-menu-overlay.open {
                    opacity: 1;
                    visibility: visible;
                }

                .mobile-menu-content {
                    padding: 24px;
                }

                .mobile-nav-links {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    margin-bottom: 24px;
                }

                .mobile-nav-link {
                    color: rgb(255, 255, 255);
                    text-decoration: none;
                    font-family: "Outfit", "Outfit Placeholder", sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                    padding: 12px 16px;
                    border-radius: 8px;
                    transition: all 0.2s ease;
                    border: 1px solid transparent;
                }

                .mobile-nav-link:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                    border-color: rgba(255, 255, 255, 0.2);
                }

                .mobile-nav-link-active {
                    background-color: rgba(255, 255, 255, 0.15);
                    border-color: rgba(255, 255, 255, 0.3);
                }

                .mobile-contact-section {
                    border-top: 1px solid rgba(255, 255, 255, 0.1);
                    padding-top: 20px;
                    text-align: center;
                }

                .mobile-contact-button {
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    background: linear-gradient(259deg, rgb(36, 36, 36) 0%, rgb(16, 16, 16) 100%);
                    border-radius: 8px;
                    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 0px;
                    cursor: pointer;
                    padding: 12px 24px;
                    transition: all 0.2s ease;
                    width: 100%;
                }

                .mobile-contact-button:hover {
                    box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 8px 0px;
                    border-color: rgba(255, 255, 255, 0.7);
                }

                .mobile-contact-button-text {
                    color: rgb(255, 255, 255);
                    font-family: "Outfit", "Outfit Placeholder", sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                }

                /* Desktop Responsiveness */
                @media (min-width: 769px) {
                    .navbar-container {
                        margin-top: 16px;
                    }
                }

                /* Mobile Responsiveness */
                @media (max-width: 768px) {
                    .navbar-container {
                        margin-top: 8px;
                        width: calc(100% - 16px);
                        max-width: 100%;
                    }

                    .nav-content {
                        padding: 0 16px;
                        height: 48px;
                        justify-content: space-between;
                    }

                    .mobile-menu-overlay {
                        top: 64px;
                    }
                }

                @media (max-width: 480px) {
                    .navbar-container {
                        margin-top: 4px;
                        width: calc(100% - 8px);
                    }

                    .nav-content {
                        padding: 0 12px;
                        height: 44px;
                    }

                    .mobile-menu-overlay {
                        top: 60px;
                        width: calc(100% - 16px);
                    }

                    .mobile-menu-content {
                        padding: 20px;
                    }

                    .mobile-nav-links {
                        gap: 12px;
                    }

                    .mobile-nav-link {
                        font-size: 15px;
                        padding: 10px 14px;
                    }
                }
            `}</style>
        </div>
    );
};

export default NavbarAltV2;