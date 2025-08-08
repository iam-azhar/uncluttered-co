const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Video Production', href: '#' },
      { name: 'Content Creation', href: '#' },
      { name: 'Brand Strategy', href: '#' },
      { name: 'Social Media', href: '#' }
    ],
    Company: [
      { name: 'About Us', href: '#team' },
      { name: 'Our Process', href: '#process' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#' }
    ],
    Resources: [
      { name: 'Blog', href: '#' },
      { name: 'Case Studies', href: '#results' },
      { name: 'Portfolio', href: '#thumbnails' },
      { name: 'FAQ', href: '#' }
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: '📸' },
    { name: 'YouTube', href: '#', icon: '📺' },
    { name: 'LinkedIn', href: '#', icon: '💼' },
    { name: 'Twitter', href: '#', icon: '🐦' }
  ];

  return (
    <footer className="bg-background-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-3xl font-black mb-4">
                  <span className="text-foreground">UnCluttered</span>
                  <span className="text-primary glow-text">.co</span>
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed max-w-md">
                  Helping creators and founders transform their vision from script to screen with 
                  professional video production and content creation services.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-background-alt hover:bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-border hover:border-primary/30"
                    aria-label={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="lg:col-span-1">
                <h4 className="text-foreground font-semibold text-lg mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-foreground font-semibold text-lg mb-2">Stay Updated</h4>
              <p className="text-muted-foreground text-sm">
                Get the latest insights on video production and content creation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-background-alt border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-300 min-w-[280px]"
              />
              <button className="btn-primary whitespace-nowrap px-6 py-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm text-center md:text-left">
              © {currentYear} UnCluttered.co. All rights reserved. Made with ❤️ for creators.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;