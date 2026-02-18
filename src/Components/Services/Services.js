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
      bgPattern: "svc-bg-pattern-1",
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
      bgPattern: "svc-bg-pattern-2",
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
      bgPattern: "svc-bg-pattern-3",
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
      bgPattern: "svc-bg-pattern-4",
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
      bgPattern: "svc-bg-pattern-5",
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
      bgPattern: "svc-bg-pattern-6",
      iconBg: "from-pink-600 via-purple-500 to-blue-600",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center",
      imageAlt: "Data analytics dashboard and business intelligence"
    }
  ];

  // Split services into three pairs for mobile view (2-2-2 layout)
  const firstPair = services.slice(0, 2);
  const secondPair = services.slice(2, 4);
  const thirdPair = services.slice(4, 6);

  const renderServiceCard = (service, index) => {
    const IconComponent = service.icon;
    const isImageLoaded = loadedImages.has(service.id);

    return (
      <div
        key={service.id}
        className={`svc-card ${service.bgPattern}`}
      >
        {/* Image Section */}
        <div className="svc-image-container">
          <img
            src={service.imageUrl}
            alt={service.imageAlt}
            className={`svc-image ${isImageLoaded ? 'svc-image--loaded' : 'svc-image--loading'}`}
            onLoad={() => handleImageLoad(service.id)}
            loading="lazy"
            decoding="async"
          />
          <div className={`svc-image-overlay svc-image-overlay--${service.id}`}></div>

          {/* Icon overlay on image */}
          <div className={`svc-icon-overlay svc-icon-overlay--${service.id}`}>
            <IconComponent size={24} className="svc-icon" />
          </div>
        </div>

        {/* Decorative background */}
        <div className="svc-decorative-bg">
          <div className="svc-decorative-circle svc-decorative-circle--1"></div>
          <div className="svc-decorative-circle svc-decorative-circle--2"></div>
        </div>

        {/* Animated border */}
        <div className={`svc-animated-border svc-animated-border--${service.id}`}>
          <div className="svc-border-inner"></div>
        </div>

        {/* Content Section */}
        <div className="svc-content">
          <h3 className="svc-title">
            {service.title}
          </h3>

          <p className="svc-description">
            {service.description}
          </p>

          {/* Bottom accent */}
          <div className={`svc-bottom-accent svc-bottom-accent--${service.id}`}></div>

          {/* Floating particles */}
          <div className="svc-particles">
            <div className="svc-particle svc-particle--1"></div>
            <div className="svc-particle svc-particle--2"></div>
          </div>

          {/* Learn More Button */}
          <div className="svc-btn-wrapper">
            <button className={`svc-btn svc-btn--${service.id}`}>
              <span className="svc-btn-text">Learn More</span>
              <svg className="svc-btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <div className="svc-btn-shimmer"></div>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="svc-container">
      <div className="svc-content-wrapper">
        <div className="svc-header">
          <h2 className="svc-main-title">Our Core Services</h2>
          <div className="svc-title-divider"></div>
          <p className="svc-subtitle">
            Transforming ideas into digital excellence with cutting-edge solutions that blend
            <span className="svc-highlight svc-highlight--blue"> innovation</span>,
            <span className="svc-highlight svc-highlight--purple"> creativity</span>, and
            <span className="svc-highlight svc-highlight--pink"> technology</span>
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="svc-grid">
          {services.map((service, index) => renderServiceCard(service, index))}
        </div>

        {/* Mobile 2x2x2 Grid Layout */}
        <div className="svc-mobile-container">
          <div className="svc-pair">
            {firstPair.map((service, index) => renderServiceCard(service, index))}
          </div>
          <div className="svc-pair-separator"></div>
          <div className="svc-pair">
            {secondPair.map((service, index) => renderServiceCard(service, index + 2))}
          </div>
          <div className="svc-pair-separator"></div>
          <div className="svc-pair">
            {thirdPair.map((service, index) => renderServiceCard(service, index + 4))}
          </div>
        </div>
      </div>
    </div>
  );
});

Services.displayName = 'Services';

export default Services;