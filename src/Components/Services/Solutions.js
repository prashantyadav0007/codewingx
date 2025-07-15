import React, { useState } from 'react';
import './Solutions.css';

const Solutions = () => {
  const [ripples, setRipples] = useState([]);

  const solutionsData = [
    'Enterprise applications',
    'ERP',
    'Financial management',
    'Supply chain management',
    'Asset management',
    'Fleet management',
    'HR software',
    'eLearning software',
    'eCommerce',
    'Mobile apps',
    'Content management',
    'Document management',
    'CRM',
    'Marketing & advertising',
    'Web portals',
    'Data analytics'
  ];

  const handleCardClick = (solution, event) => {
    console.log(`Clicked on: ${solution}`);
    
    // Create ripple effect
    const rect = event.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
      size
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    // Add your navigation logic here
    // For example: navigate(`/solutions/${solution.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="solutions-container">
      <div className="solutions-wrapper">
        <div className="solutions-header">
          <h1>Solutions We Deliver</h1>
          <p>We IT-enable all kinds of B2B, B2C interactions and internal operations.</p>
        </div>

        <div className="solutions-grid">
          {solutionsData.map((solution, index) => (
            <div
              key={solution}
              className="solution-card"
              onClick={(e) => handleCardClick(solution, e)}
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <h3>
                {solution}
                <span className="arrow">→</span>
              </h3>
              
              {/* Ripple effects */}
              {ripples.map(ripple => (
                <span
                  key={ripple.id}
                  className="ripple"
                  style={{
                    left: ripple.x,
                    top: ripple.y,
                    width: ripple.size,
                    height: ripple.size
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;