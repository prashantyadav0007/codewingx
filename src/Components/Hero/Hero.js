// Hero.js
import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const features = [
    { icon: <Zap size={20} />, text: 'Lightning Fast' },
    { icon: <Users size={20} />, text: '10K+ Users' },
    { icon: <Star size={20} />, text: '5-Star Rated' }
  ];

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-grid"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isVisible ? 'animate-fadeInUp' : ''}`}>
            {/* Badge */}
            <div className="hero-badge">
              <span className="badge badge-primary">
                🚀 New Feature Available
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title">
              Build Amazing
              <span className="text-gradient"> Digital Products</span>
              <br />
              That Scale
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Transform your ideas into powerful, scalable solutions with our cutting-edge technology platform. 
              Join thousands of developers and businesses who trust our tools to build the future.
            </p>

            {/* Feature List */}
            <div className="hero-features">
              {features.map((feature, index) => (
                <div key={index} className="hero-feature">
                  <div className="hero-feature-icon">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <button className="btn btn-primary btn-lg">
                Get Started Free
                <ArrowRight size={20} />
              </button>
              <button className="btn btn-secondary btn-lg">
                <Play size={18} />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="hero-social-proof">
              <div className="social-proof-avatars">
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" alt="User" />
                </div>
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" alt="User" />
                </div>
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" alt="User" />
                </div>
                <div className="avatar">
                  <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face" alt="User" />
                </div>
                <div className="avatar-more">+99</div>
              </div>
              <div className="social-proof-text">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  <span>4.9</span>
                </div>
                <p>Trusted by 10,000+ developers worldwide</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className={`hero-visual ${isVisible ? 'animate-fadeInUp' : ''}`}>
            <div className="hero-card">
              <div className="hero-card-header">
                <div className="hero-card-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="hero-card-title">Dashboard</div>
              </div>
              <div className="hero-card-content">
                <div className="hero-stats">
                  <div className="hero-stat">
                    <div className="hero-stat-value">$124K</div>
                    <div className="hero-stat-label">Revenue</div>
                    <div className="hero-stat-chart">
                      <div className="chart-bar" style={{height: '60%'}}></div>
                      <div className="chart-bar" style={{height: '80%'}}></div>
                      <div className="chart-bar" style={{height: '100%'}}></div>
                      <div className="chart-bar" style={{height: '70%'}}></div>
                      <div className="chart-bar" style={{height: '90%'}}></div>
                    </div>
                  </div>
                  <div className="hero-stat">
                    <div className="hero-stat-value">2.4K</div>
                    <div className="hero-stat-label">Users</div>
                    <div className="hero-progress">
                      <div className="progress-bar" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="hero-metrics">
                  <div className="metric">
                    <div className="metric-icon">📈</div>
                    <div className="metric-text">
                      <div>Growth Rate</div>
                      <div className="metric-value">+24%</div>
                    </div>
                  </div>
                  <div className="metric">
                    <div className="metric-icon">🎯</div>
                    <div className="metric-text">
                      <div>Conversion</div>
                      <div className="metric-value">8.2%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="floating-element floating-1">
              <Zap size={24} />
            </div>
            <div className="floating-element floating-2">
              <Star size={20} />
            </div>
            <div className="floating-element floating-3">
              <Users size={22} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;