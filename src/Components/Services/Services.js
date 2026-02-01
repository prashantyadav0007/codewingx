import React, { memo, useState, useCallback } from 'react';
import { Monitor, Smartphone, Palette, TrendingUp } from 'lucide-react';
import './Services.css';

const Services = memo(() => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  const handleImageLoad = useCallback((serviceId) => {
    setLoadedImages(prev => new Set(prev).add(serviceId));
  }, []);

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
    },
    {
      id: 5,
      title: "Cloud Solutions",
      description: "Leverage the power of cloud computing with our scalable infrastructure solutions. We provide secure, reliable cloud services that grow with your business needs and ensure maximum uptime.",
      icon: Monitor,
      gradient: "from-purple-500 via-blue-400 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-500/15 via-blue-500/15 to-pink-500/15",
      iconBg: "from-purple-600 via-blue-500 to-purple-700",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&crop=center",
      imageAlt: "Cloud computing and network infrastructure"
    },
    {
      id: 6,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights. Our analytics solutions help you make data-driven decisions, identify trends, and optimize your business performance with advanced visualization tools.",
      icon: TrendingUp,
      gradient: "from-pink-500 via-purple-400 to-blue-600",
      bgPattern: "bg-gradient-to-br from-pink-500/15 via-purple-500/15 to-blue-500/15",
      iconBg: "from-pink-600 via-purple-500 to-blue-600",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      imageAlt: "Data analytics dashboard and business intelligence"
    }
  ];

  // Split services into three pairs for mobile view (2-2-2 layout)
  const firstPair = services.slice(0, 2);    // Web Dev & Mobile Apps
  const secondPair = services.slice(2, 4);   // UI/UX & Digital Marketing
  const thirdPair = services.slice(4, 6);    // Cloud Solutions & Data Analytics

  const renderServiceCard = (service, index) => {
    const IconComponent = service.icon;
    const isImageLoaded = loadedImages.has(service.id);
    
    return (
      <div
        key={service.id}
        className={`service-card ${service.bgPattern}`}
      >
        {/* Optimized Image Section */}
        <div className="service-image-container">
          <img 
            src={service.imageUrl} 
            alt={service.imageAlt}
            className={`service-image ${isImageLoaded ? 'loaded' : 'loading'}`}
            onLoad={() => handleImageLoad(service.id)}
            loading="lazy"
            decoding="async"
          />
          <div className={`image-overlay gradient-${service.id}`}></div>
          
          {/* Icon overlay on image */}
          <div className={`service-icon-overlay icon-bg-${service.id}`}>
            <IconComponent size={24} className="icon-white" />
          </div>
        </div>

        {/* Simplified decorative background pattern */}
        <div className="decorative-bg">
          <div className="decorative-circle circle-1"></div>
          <div className="decorative-circle circle-2"></div>
        </div>

        {/* Simplified animated border gradient */}
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

          {/* Reduced floating particles effect */}
          <div className="floating-particles">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
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
  };

  return (
    <div className="services-container">
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

        {/* Desktop Grid Layout */}
        <div className="services-grid">
          {services.map((service, index) => renderServiceCard(service, index))}
        </div>

        {/* Mobile 2x2x2 Grid Layout with Separation */}
        <div className="services-mobile-container">
          {/* First Pair - Web Development & Mobile Apps */}
          <div className="services-pair">
            {firstPair.map((service, index) => renderServiceCard(service, index))}
          </div>

          {/* Separator between pairs */}
          <div className="pair-separator"></div>

          {/* Second Pair - UI/UX Design & Digital Marketing */}
          <div className="services-pair">
            {secondPair.map((service, index) => renderServiceCard(service, index + 2))}
          </div>

          {/* Separator between pairs */}
          <div className="pair-separator"></div>

          {/* Third Pair - Cloud Solutions & Data Analytics */}
          <div className="services-pair">
            {thirdPair.map((service, index) => renderServiceCard(service, index + 4))}
          </div>
        </div>
      </div>
    </div>
  );
});

Services.displayName = 'Services';

export default Services;