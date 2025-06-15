import React from 'react';
import { Monitor, Smartphone, Palette, TrendingUp } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "We create modern, responsive websites that deliver exceptional user experiences. Our development process focuses on performance, scalability, and cutting-edge technologies to bring your vision to life.",
      icon: Monitor,
      gradient: "from-blue-400 via-purple-500 to-pink-500",
      bgPattern: "bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-pink-500/15",
      iconBg: "from-blue-500 via-purple-600 to-blue-700",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center",
      imageAlt: "Web Development workspace with code and design"
    },
    {
      id: 2,
      title: "Mobile Applications",
      description: "Build powerful mobile applications for iOS and Android platforms. We develop native and cross-platform solutions that engage users and drive business growth with intuitive interfaces.",
      icon: Smartphone,
      gradient: "from-purple-400 via-pink-500 to-blue-500",
      bgPattern: "bg-gradient-to-br from-purple-500/15 via-pink-500/15 to-blue-500/15",
      iconBg: "from-purple-500 via-pink-600 to-purple-700",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop&crop=center",
      imageAlt: "Mobile app development and smartphone interfaces"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Transform your ideas into stunning visual experiences. Our design team creates user-centered interfaces that combine aesthetics with functionality to maximize user engagement and satisfaction.",
      icon: Palette,
      gradient: "from-pink-400 via-blue-500 to-purple-500",
      bgPattern: "bg-gradient-to-br from-pink-500/15 via-blue-500/15 to-purple-500/15",
      iconBg: "from-pink-500 via-blue-600 to-pink-700",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop&crop=center",
      imageAlt: "UI/UX design process with wireframes and prototypes"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Boost your online presence with our comprehensive digital marketing strategies. From SEO optimization to social media campaigns, we help you reach your target audience effectively.",
      icon: TrendingUp,
      gradient: "from-blue-500 via-pink-400 to-purple-600",
      bgPattern: "bg-gradient-to-br from-blue-500/15 via-pink-500/15 to-purple-500/15",
      iconBg: "from-blue-600 via-pink-500 to-purple-600",
      imageUrl: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=250&fit=crop&crop=center",
      imageAlt: "Digital marketing analytics and social media strategy"
    }
  ];

  return (
    <div className="services-container">
      {/* Complex animated background with mixed colors */}
      <div className="background-effects">
        {/* Primary blobs */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        
        {/* Secondary accent blobs */}
        <div className="blob blob-4"></div>
        <div className="blob blob-5"></div>
        
        {/* Geometric patterns */}
        <div className="geometric-pattern pattern-1"></div>
        <div className="geometric-pattern pattern-2"></div>
      </div>

      {/* Overlay gradient for depth */}
      <div className="overlay-gradient"></div>

      <div className="services-content">
        <div className="services-header">
          <h2 className="main-title">Our Core Services</h2>
          <div className="title-divider"></div>
          <p className="subtitle">
            Transforming ideas into digital excellence with cutting-edge solutions that blend 
            <span className="highlight-blue"> innovation</span>,
            <span className="highlight-purple"> creativity</span>, and
            <span className="highlight-pink"> technology</span>
          </p>
        </div>

        {/* 2x2 Grid with mixed color themes */}
        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`service-card ${service.bgPattern}`}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Image Section */}
                <div className="service-image-container">
                  <img 
                    src={service.imageUrl} 
                    alt={service.imageAlt}
                    className="service-image"
                  />
                  <div className={`image-overlay gradient-${service.id}`}></div>
                  
                  {/* Icon overlay on image */}
                  <div className={`service-icon-overlay icon-bg-${service.id}`}>
                    <IconComponent size={24} className="icon-white" />
                  </div>
                </div>

                {/* Complex decorative background pattern */}
                <div className="decorative-bg">
                  <div className="decorative-circle circle-1"></div>
                  <div className="decorative-circle circle-2"></div>
                  <div className="decorative-circle circle-3"></div>
                </div>

                {/* Animated border gradient */}
                <div className={`animated-border border-${service.id}`}>
                  <div className="border-inner"></div>
                </div>

                {/* Content Section */}
                <div className="service-content">
                  <h3 className="service-title">
                    {service.title}
                  </h3>

                  <p className="service-description">
                    {service.description}
                  </p>

                  {/* Multi-colored bottom accent */}
                  <div className={`bottom-accent accent-${service.id}`}></div>

                  {/* Enhanced floating particles effect */}
                  <div className="floating-particles">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                  </div>

                  {/* Enhanced Learn More Button */}
                  <div className="button-container">
                    <button className={`learn-more-btn btn-${service.id}`}>
                      <span className="btn-text">Learn More</span>
                      <svg className="btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {/* Button shimmer effect */}
                      <div className="btn-shimmer"></div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

       


     
      </div>
    </div>
  
  );
};

export default Services;