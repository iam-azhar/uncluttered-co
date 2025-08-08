import { useEffect, useRef } from 'react';

interface AutoScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  pauseOnHover?: boolean;
}

const AutoScrollSection = ({ 
  children, 
  className = "", 
  speed = 1000,
  pauseOnHover = true 
}: AutoScrollSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);

  const startScrolling = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      if (scrollRef.current && !isPausedRef.current) {
        const container = scrollRef.current;
        const scrollAmount = container.clientWidth / 4;
        
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
          // Reset to beginning with smooth transition
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll to next position
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, speed);
  };

  const stopScrolling = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      isPausedRef.current = true;
      stopScrolling();
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      isPausedRef.current = false;
      startScrolling();
    }
  };

  useEffect(() => {
    startScrolling();
    return () => stopScrolling();
  }, [speed]);

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className={`flex gap-6 overflow-x-auto scrollbar-hide ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default AutoScrollSection;