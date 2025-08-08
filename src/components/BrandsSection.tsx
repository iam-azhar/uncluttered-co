import AutoScrollSection from "./AutoScrollSection";

const BrandsSection = () => {
  const brands = [
    {
      name: 'Amazon Home India',
      logo: '/lovable-uploads/8b1aca4b-f700-4d74-8d76-ac9295122749.png',
      description: 'E-commerce Giant'
    },
    {
      name: 'Personal touch Skincare',
      logo: '/lovable-uploads/8b1aca4b-f700-4d74-8d76-ac9295122749.png',
      description: 'Beauty & Skincare'
    },
    {
      name: 'Layers (Tech Burner x iplix)',
      logo: '/lovable-uploads/8b1aca4b-f700-4d74-8d76-ac9295122749.png',
      description: 'Tech Content'
    },
    {
      name: 'The Sham Sharma Show',
      logo: '/lovable-uploads/8b1aca4b-f700-4d74-8d76-ac9295122749.png',
      description: 'Political Commentary'
    },
    {
      name: 'TechCorp Solutions',
      logo: '/lovable-uploads/8b1aca4b-f700-4d74-8d76-ac9295122749.png',
      description: 'Technology Services'
    },
    {
      name: 'Creative Media House',
      logo: '/lovable-uploads/8b1aca4b-f700-4d74-8d76-ac9295122749.png',
      description: 'Media Production'
    },
    {
      name: 'Digital Marketing Pro',
      logo: '/lovable-uploads/8b1aca4b-f700-4d74-8d76-ac9295122749.png',
      description: 'Marketing Agency'
    },
    {
      name: 'Startup Accelerator',
      logo: '/lovable-uploads/8b1aca4b-f700-4d74-8d76-ac9295122749.png',
      description: 'Business Development'
    }
  ];

  return (
    <section id="worked-for" className="py-20 bg-background" data-animate>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-primary">Creators and Brands</span>
            <br />
            <span className="text-foreground">worked for</span>
          </h2>
        </div>

        {/* Auto-scrolling Brands */}
        <AutoScrollSection className="pb-4" speed={3000}>
          {brands.map((brand, index) => (
            <div 
              key={brand.name}
              className="glass-card p-8 min-w-[280px] flex-shrink-0 group cursor-pointer hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                {/* Logo placeholder - circular */}
                <div className="w-24 h-24 rounded-full bg-background-alt border-2 border-primary/20 mb-6 flex items-center justify-center group-hover:border-primary/40 transition-colors duration-300">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {brand.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {brand.name}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </AutoScrollSection>
      </div>
    </section>
  );
};

export default BrandsSection;