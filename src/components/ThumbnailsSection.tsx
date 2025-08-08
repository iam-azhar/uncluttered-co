import AutoScrollSection from "./AutoScrollSection";

const ThumbnailsSection = () => {
  // Mock thumbnail data - in real app these would be dynamic
  const thumbnails = [
    { 
      id: 1, 
      title: '₹2000 PER MONTH', 
      creator: '@Sanjay_Kathuria',
      category: 'Finance',
      views: '1M+',
      bgColor: 'from-red-600 to-red-800'
    },
    { 
      id: 2, 
      title: 'Dangerous', 
      creator: '@theshamsharmashow',
      category: 'Documentary', 
      views: '3.9M+',
      bgColor: 'from-orange-600 to-red-700'
    },
    { 
      id: 3, 
      title: '8 Serious Mistakes', 
      creator: '@prashantodesai',
      category: 'Nutrition',
      views: '5K+',
      bgColor: 'from-yellow-600 to-orange-700'
    },
    { 
      id: 4, 
      title: '100s of Leads in seconds!', 
      creator: '@techburner',
      category: 'Business',
      views: '2.1M+',
      bgColor: 'from-green-600 to-blue-700'
    },
    { 
      id: 5, 
      title: 'Ultimate MELTDOWNS', 
      creator: '@contentcreator',
      category: 'Entertainment',
      views: '850K+',
      bgColor: 'from-purple-600 to-pink-700'
    },
    { 
      id: 6, 
      title: 'PAKISTAN Is NEXT!', 
      creator: '@newsanalyst',
      category: 'News',
      views: '4.2M+',
      bgColor: 'from-blue-600 to-indigo-700'
    },
    { 
      id: 7, 
      title: 'Making Millions Online', 
      creator: '@entrepreneur',
      category: 'Business',
      views: '1.5M+',
      bgColor: 'from-indigo-600 to-purple-700'
    },
    { 
      id: 8, 
      title: 'Secret Formula Revealed', 
      creator: '@lifestyle',
      category: 'Lifestyle',
      views: '720K+',
      bgColor: 'from-pink-600 to-red-700'
    }
  ];

  return (
    <section id="work" className="py-20 bg-background-alt" data-animate>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            <span className="text-foreground">Delivering </span>
            <span className="text-primary italic">Extraordinary</span>
            <span className="text-foreground"> Thumbnail</span>
            <br />
            <span className="text-foreground">Every Single Time.</span>
          </h2>
        </div>

        {/* Auto-scrolling Thumbnails */}
        <AutoScrollSection className="pb-4" speed={2500}>
          {thumbnails.map((thumbnail, index) => (
            <div 
              key={thumbnail.id}
              className="min-w-[320px] md:min-w-[380px] flex-shrink-0 group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Thumbnail Card */}
              <div className="glass-card p-4 hover:scale-105 transition-all duration-300 hover:shadow-glow">
                {/* Thumbnail Image Placeholder */}
                <div className={`w-full h-48 md:h-56 bg-gradient-to-br ${thumbnail.bgColor} rounded-xl mb-4 relative overflow-hidden group-hover:shadow-glow-lg transition-all duration-300`}>
                  {/* Mock thumbnail content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white font-black text-2xl md:text-3xl mb-2 drop-shadow-lg">
                        {thumbnail.title}
                      </div>
                      <div className="text-white/80 text-sm">
                        {thumbnail.creator}
                      </div>
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[16px] border-l-black border-y-[10px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Thumbnail Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">
                      {thumbnail.creator}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        {thumbnail.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        {thumbnail.views} Views
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AutoScrollSection>
      </div>
    </section>
  );
};

export default ThumbnailsSection;