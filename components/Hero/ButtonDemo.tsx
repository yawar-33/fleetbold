'use client'
import React, { useEffect, useRef } from 'react';

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
      const centerX = 50; // Center of button
      const centerY = 50;
      const radius = 80; // How far the light travels
      
      // Calculate position using sine and cosine for circular motion
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;
      
      // Create the moving radial gradient
      const gradient = `radial-gradient(
        circle at ${x}% ${y}%, 
        rgba(255, 255, 255, 0.8) 0%, 
        rgba(255, 255, 255, 0.4) 20%, 
        rgba(255, 255, 255, 0) 50%
      )`;
      
      strokeElement.style.background = gradient;
      
      // Increment angle for smooth circular motion
      angle += 0.02; // Adjust speed here
      
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
    <div className="inline-block">
      <button
        ref={buttonRef}
        onClick={onClick}
        className={`
          relative w-36 h-10 cursor-pointer font-sans bg-transparent 
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
    </div>
  );
};

export const ButtonDemo = () => {
  return (
      <AnimatedBorderButton 
          onClick={() => alert('Button clicked!')}
        >
          DOWNLOAD
        </AnimatedBorderButton>
  );
};

export default ButtonDemo;