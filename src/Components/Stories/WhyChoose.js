import React from 'react';
import './WhyChoose.css';

const WhyChoose = () => {
  return (
    <div className="why-choose-container">
      <div className="why-choose-header">
        <h1>Why Businesses Choose ScienceSoft</h1>
        
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-bullet">■</span>
            <span>Over 4,000 success stories.</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-bullet">■</span>
            <span>1,300+ satisfied clients.</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-bullet">■</span>
            <span>An inspired, close-knit team of 750+ IT specialists, including IT consultants, project managers, technical architects, software and QA engineers, security and DevOps engineers, AI and blockchain experts, AWS and Azure professionals.</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-bullet">■</span>
            <span>A quality-first approach based on a mature ISO 9001-certified <a href="#" className="link-text">quality management system</a>.</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-bullet">■</span>
            <span>ISO 27001-certified <a href="#" className="link-text">security management</a> based on field-tested security knowledge, ever-green policies, effective processes, advanced security technology, and skilled professionals.</span>
          </div>
        </div>
      </div>

      <div className="content-section">
        <div className="video-section">
          <div className="video-container">
            <div className="video-placeholder">
              <div className="video-content">
                <div className="video-logo">ScienceSoft</div>
                <h2 className="video-title">PICKING THE RIGHT<br/>IT PARTNER</h2>
                <div className="play-button">
                  <svg width="60" height="60" viewBox="0 0 60 60">
                    <circle cx="30" cy="30" r="30" fill="#FF0000"/>
                    <polygon points="24,18 24,42 42,30" fill="white"/>
                  </svg>
                </div>
                <div className="video-info">
                  <span className="video-text">Why Companies Choose ScienceSoft as an IT Partner</span>
                  <button className="copy-link-btn">Copy link</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="trust-section">
          <h2>Building Trust with Transparency</h2>
          <p>
            Outsourcing to another company, however reputable it is, always comes with a risk. The best we can do as a vendor to lower that risk is to be completely transparent about who we are, what we do, and where we have succeeded. At ScienceSoft, we bet on facts rather than promises — that's our first step to building trust.
          </p>
        </div>
      </div>

      <div className="success-section">
        <div className="success-content">
          <div className="success-text">
            <p className="success-label">What makes ScienceSoft different</p>
            <h2 className="success-title">We achieve project success <span className="highlight">no matter what</span></h2>
            <p className="success-description">
              ScienceSoft does not pass mere project administration off as project management, a practice that's unfortunately common in the market. We drive projects to their goals, mitigating risks and overcoming constraints.
            </p>
            <button className="cta-button">
              See how we deliver results →
            </button>
          </div>
          <div className="success-visual">
            <div className="mountain-illustration">
              <svg width="100%" height="100%" viewBox="0 0 400 300" className="mountain-svg">
                <defs>
                  <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="50%" stopColor="#1E40AF" />
                    <stop offset="100%" stopColor="#1E3A8A" />
                  </linearGradient>
                  <linearGradient id="skyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FDE68A" />
                    <stop offset="50%" stopColor="#FCA5A5" />
                    <stop offset="100%" stopColor="#C084FC" />
                  </linearGradient>
                </defs>
                
                <rect width="400" height="300" fill="url(#skyGradient)" />
                
                <polygon points="50,250 200,100 350,250" fill="url(#mountainGradient)" className="mountain" />
                
                <circle cx="80" cy="60" r="15" fill="white" opacity="0.8" className="cloud" />
                <circle cx="320" cy="80" r="20" fill="white" opacity="0.7" className="cloud" />
                <circle cx="250" cy="50" r="12" fill="white" opacity="0.6" className="cloud" />
                
                <polygon points="180,120 200,100 220,120" fill="white" opacity="0.9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;