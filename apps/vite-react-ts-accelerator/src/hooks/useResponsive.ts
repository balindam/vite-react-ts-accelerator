import { useState, useEffect } from 'react';

interface Breakpoints {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useResponsive = (): Breakpoints => {
  const [breakpoints, setBreakpoints] = useState<Breakpoints>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const checkBreakpoints = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches;
      const tablet = window.matchMedia('(min-width: 769px) and (max-width: 1024px)').matches;
      const desktop = window.matchMedia('(min-width: 1025px)').matches;

      setBreakpoints({
        isMobile: mobile,
        isTablet: tablet,
        isDesktop: desktop,
      });
    };

    // Initial check
    checkBreakpoints();

    // Add event listener for window resize
    window.addEventListener('resize', checkBreakpoints);

    // Cleanup
    return () => window.removeEventListener('resize', checkBreakpoints);
  }, []);

  return breakpoints;
}; 