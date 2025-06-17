'use client';

import { useEffect, useRef, useState } from 'react';

const LottieAnimation = ({ 
  src, 
  className = "w-24 h-24",
  autoplay = true,
  loop = true,
  fallbackIcon = null
}) => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadLottieWeb = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        // Dynamically import lottie-web (no React dependency issues)
        const lottie = await import('lottie-web/build/player/lottie_light');
        
        if (!isMounted || !containerRef.current) return;

        // Fetch the animation JSON
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error(`Failed to fetch animation: ${response.status}`);
        }
        
        const animationData = await response.json();
        
        if (!isMounted || !containerRef.current) return;

        // Clear container
        containerRef.current.innerHTML = '';

        // Load animation
        const animation = lottie.default.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop: loop,
          autoplay: autoplay,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet'
          }
        });

        animationRef.current = animation;
        
        animation.addEventListener('DOMLoaded', () => {
          if (isMounted) {
            setIsLoading(false);
            setHasError(false);
          }
        });

        animation.addEventListener('error', () => {
          if (isMounted) {
            setHasError(true);
            setIsLoading(false);
          }
        });

      } catch (error) {
        console.warn('Failed to load Lottie animation:', error);
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
        }
      }
    };

    loadLottieWeb();

    return () => {
      isMounted = false;
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, [src, autoplay, loop]);

  // Loading spinner
  const LoadingSpinner = () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  // Default fallback
  const DefaultFallback = () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  );

  return (
    <div className={className}>
      {isLoading && <LoadingSpinner />}
      {hasError && (fallbackIcon || <DefaultFallback />)}
      <div 
        ref={containerRef}
        className="w-full h-full"
        style={{ display: isLoading || hasError ? 'none' : 'block' }}
      />
    </div>
  );
};

export default LottieAnimation;