'use client';
import React, { useRef, useEffect, useState } from 'react';
import ButtonDemo from './ButtonDemo';

const ParticleCanvas = () => {
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
    const particleCount = 150;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.8 + 0.2
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
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * 0.6})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / 100) * 0.2})`;
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
      style={{ width: '100%', height: '100%' }}
    />
  );
};

const PixelLabHero = () => {
  const [spotsLeft] = useState(12);

  return (
    <div className="relative text-white overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 opacity-30">
        <ParticleCanvas />
      </div>

  
   <div className='flex flex-col items-center justify-center align-baseline'>

   {/* Availability Banner */}
      <div className="relative z-10 flex justify-center mt-[5rem]">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-300">Hurry! Only Few Spots Left</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh] px-6 text-center">
        <h1 style={{lineHeight:'70px'}} className="text-3xl md:text-4xl  font-outfit lg:text-5xl font-medium mb-8 leading-tight lg:w-[100%]">
     Drive Your Car Rental Business
          <br />
         Forward With FleetBold
        </h1>
        
        <p className="text-xl md:text-[18px] font-outfit text-white mb-12 max-w-2xl">
         Crafted by Active Turo Hosts, Incorporating Industry-Leading
         <br/>
          Features Demanded by Car Rental Professionals
        
        </p>


<ButtonDemo />
       

        {/* Logo Section */}
        {/* <div className="mt-16 flex items-center space-x-12 opacity-60">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-500 rounded"></div>
            <span className="text-gray-500">Logoipsum</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            <span className="text-gray-500">Logoipsum</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-500 rounded-full"></div>
            <span className="text-gray-500">Logoipsum</span>
          </div>
        </div> */}
      </div>


   </div>
  
    </div>
  );
};

export default PixelLabHero;