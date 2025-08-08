const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background-alt to-background-card"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/10"></div>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.1) 0%, transparent 50%)'
      }}></div>
      
      <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced main logo/title */}
        <div className="mb-12 animate-scale-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 leading-tight">
            <span className="text-foreground block sm:inline">UnCluttered</span>
            <span className="text-primary glow-text block sm:inline">.co</span>
          </h1>
          
          {/* Enhanced subtitle with better spacing */}
          <div className="space-y-4 mb-8">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-muted-foreground">
              Hi, We as a company
            </div>
            
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
              Help <span className="text-primary font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Creators</span> and <span className="text-primary font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Founders</span> to go
            </div>
            
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-muted-foreground font-light">
              From script to screen
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className="animate-fade-in animation-delay-300 mb-16">
          <button 
            onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 text-white font-semibold rounded-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-glow-lg"
          >
            Get Started Today
          </button>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center bg-background-card/30 backdrop-blur-sm">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse shadow-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;