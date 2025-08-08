const TestimonialsSection = () => {
  const testimonials = [
    {
      channelName: 'Channel Name',
      subscribers: 'Subs',
      videoUrl: '#',
      featured: false
    },
    {
      channelName: 'Channel Name',
      subscribers: 'Subs',
      videoUrl: '#',
      featured: true
    },
    {
      channelName: 'Channel Name',
      subscribers: 'Subs',
      videoUrl: '#',
      featured: false
    },
    {
      channelName: 'Channel Name',
      subscribers: 'Subs',
      videoUrl: '#',
      featured: false
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background" data-animate>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Testimonials
          </h2>
        </div>

        {/* Horizontal Scrolling Testimonial Cards */}
        <div className="relative">
          <div className="horizontal-scroll justify-center">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`${testimonial.featured ? 'min-w-[320px] md:min-w-[380px]' : 'min-w-[280px] md:min-w-[320px]'} group cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`glass-card p-6 text-center hover:scale-105 transition-all duration-300 hover:shadow-glow ${
                  testimonial.featured ? 'ring-2 ring-primary/30 scale-105' : ''
                } h-80`}>
                  {/* Video Preview */}
                  <div className={`w-full ${testimonial.featured ? 'h-48' : 'h-40'} bg-background-alt rounded-xl mb-4 relative overflow-hidden border border-border group-hover:border-primary/30 transition-colors duration-300`}>
                    {/* Video placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      {/* Play button */}
                      <div className="w-16 h-16 bg-background-card/80 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-primary/20 transition-colors duration-300">
                        <div className="w-0 h-0 border-l-[16px] border-l-foreground border-y-[10px] border-y-transparent ml-1 group-hover:border-l-primary"></div>
                      </div>
                    </div>
                    
                    {/* Video overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Channel Info */}
                  <div className="space-y-2">
                    <h3 className={`font-bold group-hover:text-primary transition-colors duration-300 ${
                      testimonial.featured ? 'text-xl text-primary' : 'text-lg text-foreground'
                    }`}>
                      {testimonial.channelName}
                    </h3>
                    <p className="text-muted-foreground">
                      {testimonial.subscribers}
                    </p>
                  </div>

                  {/* Featured badge */}
                  {testimonial.featured && (
                    <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <button 
            onClick={() => window.open('mailto:hello@uncluttered.co', '_blank')}
            className="btn-primary text-lg"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;