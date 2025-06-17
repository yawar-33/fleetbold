import React from "react";

const NavbarAltV2 = () => {
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
                        >
                            <div className="logo-wrapper">
                                <img 
                                    src="https://framerusercontent.com/images/7GJD6qhMhDrRI9KsaDE4fwrnFAs.png" 
                                    alt="FleetBold Logo" 
                                    className="logo-image"
                                />
                            </div>
                        </a>

                        {/* Separator */}
                        <div className="nav-separator"></div>

                        {/* Navigation Links */}
                        <div className="nav-links">
                            <a  href="#services" className="nav-link">
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
                            <a href="#how-it-works-section"  className="nav-link">
                                How it Works
                            </a>
                            <a href="#testinomials-section"className="nav-link nav-link-active">
                                Testimonials
                            </a>
                            <a href="#faq-section" className="nav-link">
                                FAQs
                            </a>
                            <a href="#pricing-section"className="nav-link">
                                Pricing
                            </a>
                        </div>

                        {/* Contact Button */}
                        <div className="contact-button-container">
                            <a href="#contact" className="contact-button" onClick={() => {
						const section = document.getElementById("contact-us-section");
						if (section) {
							section.scrollIntoView({ behavior: "smooth" });
						}
					}}>
                                <span className="contact-button-text">
                                    Contact Us
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
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

                /* Mobile Responsiveness */
                @media (max-width: 768px) {
                    .navbar-container {
                        margin-top: 4px;
                        width: calc(100% - 16px);
                        max-width: 100%;
                    }

                    .nav-content {
                        padding: 0 12px;
                        height: 44px;
                    }

                    .nav-links {
                        gap: 16px;
                        overflow-x: auto;
                        scrollbar-width: none;
                        -ms-overflow-style: none;
                    }

                    .nav-links::-webkit-scrollbar {
                        display: none;
                    }

                    .nav-separator {
                        margin: 0 12px;
                    }

                    .contact-button-container {
                        margin-left: 12px;
                    }

                    .nav-link {
                        font-size: 13px;
                        white-space: nowrap;
                    }

                    .contact-button-text {
                        font-size: 13px;
                    }
                }

                @media (max-width: 640px) {
                    .nav-links {
                        gap: 12px;
                    }

                    .nav-separator {
                        margin: 0 8px;
                    }

                    .contact-button-container {
                        margin-left: 8px;
                    }

                    .nav-link {
                        font-size: 12px;
                    }

                    .contact-button {
                        padding: 3px 7px;
                    }

                    .contact-button-text {
                        font-size: 12px;
                    }
                }
            `}</style>
        </div>
    );
};

export default NavbarAltV2;