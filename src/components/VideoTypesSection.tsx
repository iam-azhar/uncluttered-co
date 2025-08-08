import { useState } from 'react';

const VideoTypesSection = () => {
  const [activeType, setActiveType] = useState('Reels');

  const videoTypes = [
    { type: 'Reels', isActive: false },
    { type: 'Podcast', isActive: false },
    { type: 'Talking Head', isActive: false },
    { type: 'Motion Graphic', isActive: false }
  ];

  const videoCardsData = {
    'Reels': [
      { id: 1, title: 'Instagram Reels', description: 'Viral 15-30s vertical videos' },
      { id: 2, title: 'TikTok Content', description: 'Trending short-form videos' },
      { id: 3, title: 'YouTube Shorts', description: 'Quick engaging content' },
      { id: 4, title: 'Story Content', description: 'Behind-the-scenes clips' },
      { id: 5, title: 'Product Demos', description: 'Quick product showcases' },
      { id: 6, title: 'Tutorial Clips', description: 'Bite-sized tutorials' }
    ],
    'Podcast': [
      { id: 1, title: 'Interview Highlights', description: 'Best moments from interviews' },
      { id: 2, title: 'Topic Discussions', description: 'Deep-dive conversations' },
      { id: 3, title: 'Q&A Sessions', description: 'Audience question answers' },
      { id: 4, title: 'Expert Panels', description: 'Multi-person discussions' },
      { id: 5, title: 'Solo Commentary', description: 'Personal insights and thoughts' },
      { id: 6, title: 'News Analysis', description: 'Current events breakdown' }
    ],
    'Talking Head': [
      { id: 1, title: 'CEO Messages', description: 'Executive communications' },
      { id: 2, title: 'Training Videos', description: 'Educational content delivery' },
      { id: 3, title: 'Testimonials', description: 'Customer success stories' },
      { id: 4, title: 'Product Updates', description: 'Feature announcements' },
      { id: 5, title: 'Company Culture', description: 'Team and values showcase' },
      { id: 6, title: 'Expert Opinions', description: 'Industry insights' }
    ],
    'Motion Graphic': [
      { id: 1, title: 'Explainer Videos', description: 'Complex concepts simplified' },
      { id: 2, title: 'Data Visualization', description: 'Statistics and analytics' },
      { id: 3, title: 'Brand Animations', description: 'Logo and brand elements' },
      { id: 4, title: 'Infographic Videos', description: 'Information graphics' },
      { id: 5, title: 'Process Flows', description: 'Step-by-step guides' },
      { id: 6, title: 'Abstract Concepts', description: 'Creative visual storytelling' }
    ]
  };

  const videoCards = videoCardsData[activeType as keyof typeof videoCardsData];

  return (
    <section className="py-20 bg-background" data-animate>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-foreground">Video That </span>
            <span className="text-primary italic">Hooks</span>
          </h2>
        </div>

        {/* Interactive Video Type Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {videoTypes.map((videoType) => (
              <button
                key={videoType.type}
                onClick={() => setActiveType(videoType.type)}
                className={`px-8 py-3 rounded-full border-2 font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                  activeType === videoType.type
                    ? 'border-primary bg-primary text-primary-foreground shadow-glow'
                    : 'border-border text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-background-card/50'
                }`}
              >
                {videoType.type}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scrolling Video Cards */}
        <div className="relative">
          <div className="horizontal-scroll">
            {videoCards.map((card, index) => (
              <div 
                key={card.id}
                className="min-w-[280px] md:min-w-[320px] group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="glass-card p-6 h-64 hover:scale-105 transition-all duration-300 hover:shadow-glow">
                  {/* Video Preview Placeholder */}
                  <div className="w-full h-32 bg-background-alt rounded-xl mb-4 relative overflow-hidden border border-border group-hover:border-primary/30 transition-colors duration-300">
                    {/* Mock video preview */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-l-[12px] border-l-primary border-y-[8px] border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll gradient overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoTypesSection;