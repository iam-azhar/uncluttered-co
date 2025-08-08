import AutoScrollSection from "./AutoScrollSection";

const ResultsSection = () => {
  const results = [
    {
      id: 1,
      title: 'How to Start SIP in Mutual Funds | Begin',
      creator: '@Sanjay_Kathuria',
      views: '1M+',
      category: 'Finance',
      bgColor: 'from-red-600 to-red-800',
      featured: false
    },
    {
      id: 2,
      title: 'Ultimate MELTDOWNS After HISTORIC Waqf',
      creator: '@theshamsharmashow',
      views: '3.9M+',
      category: 'Documentary',
      bgColor: 'from-orange-600 to-yellow-600',
      featured: true
    },
    {
      id: 3,
      title: '8 Serious Mistakes You\'re Making When',
      creator: '@prashantodesai',
      views: '5K',
      category: 'Nutrition',
      bgColor: 'from-green-600 to-blue-600',
      featured: false
    },
    {
      id: 4,
      title: 'DANGEROUS Chemical in Your Food',
      creator: '@healthexpert',
      views: '2.1M+',
      category: 'Health',
      bgColor: 'from-purple-600 to-pink-600',
      featured: false
    },
    {
      id: 5,
      title: 'Pakistan Is NEXT! | Analysis',
      creator: '@newsanalyst',
      views: '4.2M+',
      category: 'News',
      bgColor: 'from-blue-600 to-indigo-600',
      featured: false
    },
    {
      id: 6,
      title: 'Revolutionary Business Strategy',
      creator: '@businessguru',
      views: '1.8M+',
      category: 'Business',
      bgColor: 'from-teal-600 to-cyan-600',
      featured: false
    },
    {
      id: 7,
      title: 'Hidden Secrets of Success',
      creator: '@motivational',
      views: '950K+',
      category: 'Motivation',
      bgColor: 'from-amber-600 to-orange-600',
      featured: false
    }
  ];

  return (
    <section id="results" className="py-20 bg-background-alt" data-animate>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Results
          </h2>
        </div>

        {/* Auto-scrolling Results */}
        <AutoScrollSection className="pb-4" speed={2000}>
          {results.map((result, index) => (
            <div 
              key={result.id}
              className={`${result.featured ? 'min-w-[400px] md:min-w-[480px]' : 'min-w-[320px] md:min-w-[380px]'} flex-shrink-0 group cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`glass-card p-4 hover:scale-105 transition-all duration-300 hover:shadow-glow ${
                result.featured ? 'ring-2 ring-primary/30 scale-105' : ''
              }`}>
                {/* Result Thumbnail */}
                <div className={`w-full ${result.featured ? 'h-64' : 'h-48'} bg-gradient-to-br ${result.bgColor} rounded-xl mb-4 relative overflow-hidden group-hover:shadow-glow-lg transition-all duration-300`}>
                  {/* Mock result content */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="text-center">
                      <div className={`text-white font-black ${result.featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'} mb-2 drop-shadow-lg line-clamp-2`}>
                        {result.title}
                      </div>
                      <div className="text-white/80 text-sm">
                        {result.creator}
                      </div>
                    </div>
                  </div>
                  
                  {/* Success indicator */}
                  {result.featured && (
                    <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[16px] border-l-black border-y-[10px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                </div>

                {/* Result Stats */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-1">
                      {result.creator}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        {result.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      {result.views} Views
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

export default ResultsSection;