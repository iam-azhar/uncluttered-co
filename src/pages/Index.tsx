import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import BrandsSection from '@/components/BrandsSection';
import ThumbnailsSection from '@/components/ThumbnailsSection';
import VideoTypesSection from '@/components/VideoTypesSection';
import ResultsSection from '@/components/ResultsSection';
import ProcessSection from '@/components/ProcessSection';
import TeamSection from '@/components/TeamSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FooterSection from '@/components/FooterSection';

const Index = () => {
  useEffect(() => {
    // Add intersection observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* SEO meta tags are handled in index.html */}
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <BrandsSection />
        <ThumbnailsSection />
        <VideoTypesSection />
        <ResultsSection />
        <ProcessSection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;