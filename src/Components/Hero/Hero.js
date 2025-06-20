import React from 'react';
import './Hero.css'

const Hero = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */} 
      <main className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Codewingx</span>
          </h1>
          <p className="hero-subtitle">
            Your Tech Partner from Start to Launch.<br/>
            A New code A New wings Connect with codewingx.
          </p>

          <div className="hero-actions">
            <button className="buy-template-btn">Recent Projects</button>
          </div>
        </div>
      </main>

      {/* Banner Image Section */}
      <section className="banner-section">
        <div className="banner-container">
          <div className="banner-content">
            <div className="banner-image-wrapper">
              <div className="banner-image-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                alt="Technology Innovation Banner" 
                className="banner-image"
              />
            </div>
            
            <div className="banner-text-overlay">
              <h2 className="banner-title">
                <span className="gradient-text">Innovative Solutions</span>
                <br />
                for Tomorrow's Challenges
              </h2>
             
              <div className="banner-stats">
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Delivered</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;