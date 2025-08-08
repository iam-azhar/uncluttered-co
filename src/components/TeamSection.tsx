const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Satya',
      role: 'Content writer',
      roleColor: 'text-primary',
      description: 'Crafting compelling scripts and narratives',
      avatar: 'S'
    },
    {
      name: 'Butu',
      role: 'Content Sexist',
      roleColor: 'text-primary',
      description: 'Content strategy and optimization',
      avatar: 'B',
      featured: true
    },
    {
      name: 'Haris',
      role: 'Video Editor',
      roleColor: 'text-primary',
      description: 'Expert video editing and post-production',
      avatar: 'H'
    }
  ];

  return (
    <section className="py-20 bg-background-alt" data-animate>
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Core Team
          </h2>
        </div>

        {/* Horizontal Scrolling Team Cards */}
        <div className="relative">
          <div className="horizontal-scroll justify-center">
            {teamMembers.map((member, index) => (
              <div 
                key={member.name}
                className={`${member.featured ? 'min-w-[320px] md:min-w-[380px]' : 'min-w-[280px] md:min-w-[320px]'} group cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`glass-card p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-glow ${
                  member.featured ? 'ring-2 ring-primary/30 scale-105' : ''
                } h-80`}>
                  {/* Avatar */}
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-background-alt border-2 border-primary/20 flex items-center justify-center group-hover:border-primary/40 transition-all duration-300 ${
                    member.featured ? 'w-28 h-28 shadow-glow' : ''
                  }`}>
                    <span className={`font-black text-primary ${member.featured ? 'text-4xl' : 'text-3xl'}`}>
                      {member.avatar}
                    </span>
                  </div>

                  {/* Team Member Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors duration-300 ${
                        member.featured ? 'text-2xl' : 'text-xl'
                      }`}>
                        {member.name}
                      </h3>
                      <p className={`${member.roleColor} font-semibold ${
                        member.featured ? 'text-lg' : 'text-base'
                      }`}>
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Featured badge */}
                  {member.featured && (
                    <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                      LEAD
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background-alt to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background-alt to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;