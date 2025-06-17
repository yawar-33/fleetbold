import React, { useRef, useEffect, useState } from 'react';

// Animated Canvas Background Component
const AnimatedCanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particles = [];
    const particleCount = 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around screen edges
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.4})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / 80) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ 
        width: '100%', 
        height: '100%',
        opacity: 0.3
      }}
    />
  );
};

// Animated Border Button Component
const AnimatedBorderButton = ({ 
  children = "DOWNLOAD", 
  onClick,
  className = "",
  ...props 
}) => {
  const buttonRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const strokeElement = button.querySelector('.animated-stroke');
    if (!strokeElement) return;

    let angle = 0;
    
    const animate = () => {
      // Calculate the moving light position
      const centerX = 50;
      const centerY = 50;
      const radius = 80;
      
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      const gradient = `radial-gradient(
        circle at ${x}% ${y}%, 
        rgba(255, 255, 255, 0.8) 0%, 
        rgba(255, 255, 255, 0.4) 20%, 
        rgba(255, 255, 255, 0) 50%
      )`;
      
      strokeElement.style.background = gradient;
      angle += 0.02;
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`
        relative w-44 h-14 cursor-pointer font-sans bg-transparent 
        rounded text-white border-0 outline-none transition-all duration-300
        hover:shadow-lg hover:shadow-white/20
        font-medium text-[15px] tracking-wide
        overflow-hidden
        ${className}
      `}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '4px'
      }}
      {...props}
    >
      {/* Animated Stroke Layer */}
      <div 
        className="animated-stroke absolute inset-0 pointer-events-none"
        style={{
          borderRadius: '4px',
          opacity: 0.8,
          willChange: 'background'
        }}
      />
      
      {/* Fill Layer */}
      <div 
        className="absolute inset-[2px] pointer-events-none"
        style={{
          background: 'linear-gradient(259deg, rgb(36, 36, 36) 0%, rgb(16, 16, 16) 100%)',
          borderRadius: '2px',
          opacity: 1
        }}
      />
      
      {/* Text Content */}
      <span 
        className="relative z-10 flex items-center justify-center h-full"
        style={{
          fontFamily: '"Outfit", "Outfit Placeholder", sans-serif',
          fontSize: '15px',
          fontWeight: '500',
          letterSpacing: '-0.01em',
          color: 'rgb(255, 255, 255)'
        }}
      >
        {children}
      </span>
    </button>
  );
};

// Star Separator Component
const StarSeparator = ({ className = "" }) => {
  return (
    <div className={`w-full flex justify-center py-8 ${className}`}>
      <div className="relative" style={{ opacity: 0.8, flexShrink: 0 }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 205 15"
          className="w-full h-4 max-w-md"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Large center star (filled white) */}
          <path 
            d="M 107.5 0.716 L 109.704 5.182 L 114.633 5.899 L 111.066 9.375 L 111.908 14.284 L 107.5 11.966 L 103.092 14.284 L 103.934 9.375 L 100.367 5.899 L 105.296 5.182 Z" 
            fill="rgb(255, 255, 255)"
          />
          
          {/* Medium left star (outline) */}
          <path 
            d="M 55 2.477 L 56.545 5.769 L 60 6.297 L 57.5 8.859 L 58.09 12.477 L 55 10.769 L 51.91 12.477 L 52.5 8.859 L 50 6.297 L 53.455 5.769 Z" 
            fill="transparent" 
            strokeWidth="0.2" 
            stroke="rgb(255, 255, 255)"
          />
          
          {/* Small left star (gray filled) */}
          <path 
            d="M 2.5 5 L 3.273 6.646 L 5 6.91 L 3.75 8.191 L 4.045 10 L 2.5 9.146 L 0.955 10 L 1.25 8.191 L 0 6.91 L 1.727 6.646 Z" 
            fill="#CCC"
          />
          
          {/* Medium right star (outline) */}
          <path 
            d="M 155 3.477 L 156.469 6.455 L 159.755 6.932 L 157.378 9.25 L 157.939 12.523 L 155 10.977 L 152.061 12.523 L 152.622 9.25 L 150.245 6.932 L 153.531 6.455 Z" 
            fill="transparent" 
            strokeWidth="0.2" 
            stroke="rgb(255, 255, 255)"
          />
          
          {/* Small right star (gray filled) */}
          <path 
            d="M 202.5 5.239 L 203.235 6.727 L 204.878 6.966 L 203.689 8.125 L 203.969 9.761 L 202.5 8.989 L 201.031 9.761 L 201.311 8.125 L 200.122 6.966 L 201.765 6.727 Z" 
            fill="#CCC"
          />
        </svg>
      </div>
    </div>
  );
};

// FlipWords Component
const FlipWords = ({ words, className = "", duration = 3000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => 
          prevIndex === words.length - 1 ? 0 : prevIndex + 1
        );
        setIsVisible(true);
      }, 200);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span 
      className={`transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {words[currentWordIndex]}
    </span>
  );
};

// Main Hero Component
const FleetBoldHeroSection = () => {
  const wordsArray = [
    "Tesla Owners",
    "Bouncie Users", 
    "Turo Hosts",
    "Car Rentals",
  ];

  const handleDownloadClick = () => {
    // Handle download action
    console.log('Download clicked!');
    // window.open('/earlyaccess', '_blank');
  };

  return (
    <div className="hero-section">
      {/* Animated Background */}
      <div className="background-container">
        <AnimatedCanvasBackground />
      </div>

      {/* Beta Badge */}
      <div className="beta-badge-container">
        <div className="beta-badge">
          <div className="status-dot"></div>
          <span className="beta-text">We're Almost Full — Secure Your Spot In The BETA Now</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          <h1 className="main-heading">
            Drive Your Car Rental Business<br />
            Forward with FleetBold
          </h1>
          
          <p className="subheading">
            Crafted by Active Turo Hosts, Incorporating Industry-Leading<br />
            Features Demanded by Car Rental Professionals
          </p>

          <div className="button-container">
            <AnimatedBorderButton onClick={handleDownloadClick}>
              DOWNLOAD
            </AnimatedBorderButton>
          </div>
        </div>
      </div>

      {/* Star Separator */}
      <StarSeparator />

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          background-color: #000;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0 20px;
        }

        .background-container {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .beta-badge-container {
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
        }

        .beta-badge {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 50px;
          padding: 8px 16px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background-color: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .beta-text {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.8);
          font-family: "Inter", sans-serif;
        }

        .main-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 1200px;
          width: 100%;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .main-heading {
          font-family: "Outfit", sans-serif;
          font-size: clamp(32px, 5vw, 72px);
          font-weight: 700;
          line-height: 1.1;
          margin: 0;
          color: #ffffff;
          text-align: center;
        }

        .subheading {
          font-family: "Outfit", sans-serif;
          font-size: clamp(16px, 2vw, 20px);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          text-align: center;
          line-height: 1.5;
        }

        .button-container {
          margin-top: 20px;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .hero-section {
            padding: 0 15px;
          }
          
          .beta-badge-container {
            margin-bottom: 40px;
          }
          
          .beta-badge {
            padding: 6px 12px;
          }
          
          .beta-text {
            font-size: 12px;
          }
          
          .content-wrapper {
            gap: 24px;
          }
          
          .subheading br {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 0 10px;
          }
          
          .beta-badge {
            padding: 6px 10px;
          }
          
          .beta-text {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
};

export default FleetBoldHeroSection;