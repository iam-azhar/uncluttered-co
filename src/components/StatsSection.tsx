import { useEffect, useRef, useState } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { number: 50, suffix: '+', label: 'CLIENTS' },
    { number: 85, suffix: 'M+', label: 'VIEWS GENERATED' },
    { number: 3, suffix: '+', label: 'YEARS EXPERIENCE' },
    { number: 450, suffix: '+', label: 'VIDEOS EDITED TILL NOW' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CounterAnimation = ({ number, suffix, label, delay }: { 
    number: number; 
    suffix: string; 
    label: string; 
    delay: number; 
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        const increment = number / 50;
        let current = 0;
        
        const counter = setInterval(() => {
          current += increment;
          if (current >= number) {
            setCount(number);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, 30);

        return () => clearInterval(counter);
      }, delay);

      return () => clearTimeout(timer);
    }, [isVisible, number, delay]);

    return (
      <div className="text-center group">
        <div className="text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
          {count}
          <span className="text-primary-glow">{suffix}</span>
        </div>
        <div className="text-sm md:text-base font-medium text-muted-foreground tracking-wider">
          {label}
        </div>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-background-alt relative overflow-hidden"
      data-animate
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div key={i} className="border border-border"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <CounterAnimation
              key={stat.label}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;