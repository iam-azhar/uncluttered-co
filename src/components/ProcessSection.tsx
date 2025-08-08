const ProcessSection = () => {
  const processes = [
    {
      number: '01',
      title: 'Scripting',
      description: 'You will provide us with a content brief and we will give you the best possible script.',
      icon: '✍️'
    },
    {
      number: '02',
      title: 'Video Editing',
      description: 'After the scripting, you will give us the raw video and we will edit the video to hook the audience every 3 seconds.',
      icon: '🎬'
    },
    {
      number: '03',
      title: 'Thumbnail',
      description: 'Once editing is done, the most important part comes next: the thumbnails that make the audience click on the video.',
      icon: '🖼️'
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'As we have a team of experts in this, we will handle your Title, Tags, Descriptions, and SEO.',
      icon: '🚀'
    },
    {
      number: '05',
      title: 'Posting',
      description: 'You don\'t have to go through the hassle of posting. We will post the content on your behalf as per the day and time you decide.',
      icon: '📱'
    },
    {
      number: '06',
      title: 'Performance Review',
      description: 'After posting, we\'ll review the video\'s performance. If needed, we\'ll adjust the Title, SEO, and Thumbnail to improve it and ensure better performance next time.',
      icon: '📊'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden" data-animate>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-foreground">How We </span>
            <span className="text-primary italic">Turn Ideas</span>
            <span className="text-foreground"> Into </span>
            <span className="text-primary italic">Viral Videos</span>
          </h2>
          <p className="text-xl text-muted-foreground italic">
            From script to screen
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/30 transform md:-translate-x-0.5"></div>

          {/* Process Steps */}
          <div className="space-y-16">
            {processes.map((process, index) => (
              <div 
                key={process.number}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className="flex-1 ml-20 md:ml-0">
                  <div className={`glass-card p-8 group hover:scale-105 transition-all duration-300 hover:shadow-glow ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl">{process.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {process.title}
                        </h3>
                        <span className="text-primary font-bold text-lg">
                          {process.number}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                  </div>
                </div>

                {/* Number Circle */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-glow z-10">
                  {process.number}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block px-8 py-4 bg-background-card/50 rounded-2xl border border-border">
            <span className="text-muted-foreground text-lg italic">
              Blah Blah Blah..........
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;