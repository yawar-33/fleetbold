'use client'
import React from 'react';

const StarSeparator = ({ 
  className = "",
  opacity = 0.8,
  variant = "default" // "default", "minimal", "dense"
}) => {
  // Different star configurations
  const starConfigs = {
    default: [
      { x: 2.5, y: 5, size: 'small', fill: '#CCC', stroke: false },
      { x: 55, y: 2.477, size: 'medium', fill: 'transparent', stroke: true },
      { x: 107.5, y: 0.716, size: 'large', fill: 'white', stroke: false },
      { x: 155, y: 3.477, size: 'medium', fill: 'transparent', stroke: true },
      { x: 202.5, y: 5.239, size: 'small', fill: '#CCC', stroke: false }
    ],
    minimal: [
      { x: 50, y: 5, size: 'small', fill: 'white', stroke: false, opacity: 0.4 },
      { x: 102.5, y: 2, size: 'medium', fill: 'white', stroke: false, opacity: 0.8 },
      { x: 155, y: 5, size: 'small', fill: 'white', stroke: false, opacity: 0.4 }
    ],
    dense: [
      { x: 15, y: 6, size: 'tiny', fill: '#888', stroke: false },
      { x: 45, y: 3, size: 'small', fill: 'transparent', stroke: true },
      { x: 75, y: 7, size: 'tiny', fill: '#888', stroke: false },
      { x: 102.5, y: 1, size: 'large', fill: 'white', stroke: false },
      { x: 130, y: 7, size: 'tiny', fill: '#888', stroke: false },
      { x: 160, y: 3, size: 'small', fill: 'transparent', stroke: true },
      { x: 190, y: 6, size: 'tiny', fill: '#888', stroke: false }
    ]
  };

  // Star size configurations
  const starSizes = {
    tiny: { scale: 0.6, strokeWidth: 0.15 },
    small: { scale: 0.8, strokeWidth: 0.2 },
    medium: { scale: 1, strokeWidth: 0.2 },
    large: { scale: 1.4, strokeWidth: 0.25 }
  };

  // Generate star path
  const createStarPath = (centerX, centerY, size) => {
    const { scale } = starSizes[size];
    const outerRadius = 5 * scale;
    const innerRadius = 2 * scale;
    
    let path = '';
    for (let i = 0; i < 10; i++) {
      const angle = (i * Math.PI) / 5;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const x = centerX + Math.cos(angle - Math.PI / 2) * radius;
      const y = centerY + Math.sin(angle - Math.PI / 2) * radius;
      path += (i === 0 ? 'M' : 'L') + ` ${x} ${y}`;
    }
    return path + ' Z';
  };

  const stars = starConfigs[variant] || starConfigs.default;
  const viewBoxWidth = variant === 'minimal' ? 205 : variant === 'dense' ? 205 : 205;

  return (
    <div className={`w-full flex justify-center py-8 ${className}`}>
      <div 
        className="relative"
        style={{ 
          opacity,
          imageRendering: 'pixelated',
          flexShrink: 0 
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox={`0 0 ${viewBoxWidth} 15`}
          className="w-full h-4 max-w-md"
          preserveAspectRatio="xMidYMid meet"
        >
          {stars.map((star, index) => {
            const { strokeWidth } = starSizes[star.size];
            return (
              <path
                key={index}
                d={createStarPath(star.x, star.y, star.size)}
                fill={star.fill}
                stroke={star.stroke ? "rgb(255, 255, 255)" : "none"}
                strokeWidth={star.stroke ? strokeWidth : 0}
                opacity={star.opacity || 1}
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

// Alternative version with exact paths from your HTML
const ExactStarSeparator = ({ 
  className = "",
  opacity = 0.8 
}) => {
  return (
    <div className={`w-full flex justify-center py-8 ${className}`}>
      <div 
        className="relative"
        style={{ 
          opacity,
          imageRendering: 'pixelated',
          flexShrink: 0 
        }}
      >
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

// Animated version
const AnimatedStarSeparator = ({ 
  className = "",
  opacity = 0.8 
}) => {
  return (
    <div className={`w-full flex justify-center py-8 ${className}`}>
      <div 
        className="relative"
        style={{ 
          opacity,
          imageRendering: 'pixelated',
          flexShrink: 0 
        }}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 205 15"
          className="w-full h-4 max-w-md"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Large center star (filled white) with pulse */}
          <path 
            d="M 107.5 0.716 L 109.704 5.182 L 114.633 5.899 L 111.066 9.375 L 111.908 14.284 L 107.5 11.966 L 103.092 14.284 L 103.934 9.375 L 100.367 5.899 L 105.296 5.182 Z" 
            fill="rgb(255, 255, 255)"
            className="animate-pulse"
          />
          
          {/* Medium stars (outline) with slower pulse */}
          <path 
            d="M 55 2.477 L 56.545 5.769 L 60 6.297 L 57.5 8.859 L 58.09 12.477 L 55 10.769 L 51.91 12.477 L 52.5 8.859 L 50 6.297 L 53.455 5.769 Z" 
            fill="transparent" 
            strokeWidth="0.2" 
            stroke="rgb(255, 255, 255)"
            style={{ animation: 'pulse 3s ease-in-out infinite' }}
          />
          
          <path 
            d="M 155 3.477 L 156.469 6.455 L 159.755 6.932 L 157.378 9.25 L 157.939 12.523 L 155 10.977 L 152.061 12.523 L 152.622 9.25 L 150.245 6.932 L 153.531 6.455 Z" 
            fill="transparent" 
            strokeWidth="0.2" 
            stroke="rgb(255, 255, 255)"
            style={{ animation: 'pulse 3s ease-in-out infinite 0.5s' }}
          />
          
          {/* Small stars (gray filled) with subtle fade */}
          <path 
            d="M 2.5 5 L 3.273 6.646 L 5 6.91 L 3.75 8.191 L 4.045 10 L 2.5 9.146 L 0.955 10 L 1.25 8.191 L 0 6.91 L 1.727 6.646 Z" 
            fill="#CCC"
            style={{ animation: 'fade 4s ease-in-out infinite' }}
          />
          
          <path 
            d="M 202.5 5.239 L 203.235 6.727 L 204.878 6.966 L 203.689 8.125 L 203.969 9.761 L 202.5 8.989 L 201.031 9.761 L 201.311 8.125 L 200.122 6.966 L 201.765 6.727 Z" 
            fill="#CCC"
            style={{ animation: 'fade 4s ease-in-out infinite 1s' }}
          />
        </svg>
        
        <style jsx>{`
          @keyframes fade {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
};

// Demo component showing all variants
const StarSeparatorDemo = () => {
  return (
    <div className="bg-black min-h-screen py-12 space-y-8">
      <div className="text-center text-white mb-8">
        <h2 className="text-2xl font-bold mb-4">Star Separator Variants</h2>
      </div>
      
      <div className="space-y-12">
        <div>
          <h3 className="text-white text-center mb-4">Exact Original</h3>
          <ExactStarSeparator />
        </div>
        
        <div>
          <h3 className="text-white text-center mb-4">Animated Version</h3>
          <AnimatedStarSeparator />
        </div>
        
        <div>
          <h3 className="text-white text-center mb-4">Minimal Variant</h3>
          <StarSeparator variant="minimal" />
        </div>
        
        <div>
          <h3 className="text-white text-center mb-4">Dense Variant</h3>
          <StarSeparator variant="dense" />
        </div>
      </div>
    </div>
  );
};

export default StarSeparatorDemo;
export { StarSeparator, ExactStarSeparator, AnimatedStarSeparator };