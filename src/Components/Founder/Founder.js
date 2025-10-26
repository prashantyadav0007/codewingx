import React from 'react';
import './Founder.css';

const Founder = () => {
  return (
    <div className="founder-container">
      <div className="founder-card">
        <div className="founder-content">
          <div className="founder-image-section">
            <div className="founder-image">
              <img 
                src="/rd.png" 
                alt="Ram Das Yadav - Founder and CEO" 
                className="profile-image"
              />
            </div>
          </div>
          
          <div className="founder-info-section">
            <div className="founder-header">
              <h2 className="founder-title">
                Building transformative software solutions that empower businesses to lead the future.
              </h2>
            </div>
            
            <div className="founder-description">
              <div className="quote-bar"></div>
              <p className="description-text">
                At Codewingx, our mission is to redefine how businesses harness technology. 
                We believe that software isn’t just about code—it’s about crafting solutions 
                that accelerate growth, inspire innovation, and create meaningful impact. 
                Our team blends creativity, engineering excellence, and strategic insight 
                to help organizations transform ideas into powerful digital experiences.
              </p>
            </div>
            
            <div className="company-description">
              <p>
                As a service-based company, Codewingx specializes in delivering end-to-end 
                software solutions—from product design and development to cloud integration 
                and digital transformation. We partner with startups and enterprises alike, 
                guiding them through every stage of their technological journey with clarity, 
                purpose, and precision. Our commitment is simple: to build scalable, intelligent, 
                and future-ready systems that drive real-world success.
              </p>
            </div>
            
            <div className="founder-details">
              <h3 className="founder-name">Ram Das Yadav</h3>
              <p className="founder-position">FOUNDER AND CEO</p>
              
              <button className="learn-more-btn">
                LEARN MORE
              </button>
            </div>
            
            <div className="signature">
              <div className="signature-image">
                {/* Signature placeholder */}
                <svg viewBox="0 0 200 80" className="signature-svg">
                  <path 
                    d="M20 40 Q40 20 60 40 T100 40 Q120 20 140 40 T180 40" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    className="signature-path"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;