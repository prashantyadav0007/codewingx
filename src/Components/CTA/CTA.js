import React, { useState } from 'react';
import './CTA.css';

const CTA = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const integrations = [
    {
      id: 1,
      name: 'Facebook',
      category: 'Social Media',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      icon: '📘',
      filters: ['All', 'Social Media']
    },
    {
      id: 2,
      name: 'Twitter',
      category: 'Social Media',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      icon: '🐦',
      filters: ['All', 'Social Media']
    },
    {
      id: 3,
      name: 'Google',
      category: 'Productivity',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      icon: '🔍',
      filters: ['All', 'Productivity']
    },
    {
      id: 4,
      name: 'YouTube',
      category: 'Streaming',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      icon: '📺',
      filters: ['All', 'Streaming']
    },
    {
      id: 5,
      name: 'Webflow',
      category: 'Productivity',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      icon: '🌐',
      filters: ['All', 'Productivity']
    },
    {
      id: 6,
      name: 'Pinterest',
      category: 'Social Media',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      icon: '📌',
      filters: ['All', 'Social Media']
    }
  ];

  const socialIcons = [
    { icon: '🐦', name: 'Twitter' },
    { icon: '📘', name: 'Facebook' },
    { icon: '🔍', name: 'Google' },
    { icon: '💬', name: 'Discord' },
    { icon: '📺', name: 'YouTube' },
    { icon: '⭕', name: 'Codewingx' },
    { icon: '📌', name: 'Pinterest' },
    { icon: '🎮', name: 'Twitch' },
    { icon: '📱', name: 'Reddit' },
    { icon: '🌐', name: 'Webflow' },
    { icon: '💬', name: 'Messenger' }
  ];

  const filteredIntegrations = integrations.filter(integration => 
    activeFilter === 'All' || integration.filters.includes(activeFilter)
  );

  return (
    <div className="cta-container">


      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Integrations</h1>
          <p className="hero-description">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur amet
          </p>
          <div className="hero-actions">
            <button className="get-started-btn">Get started</button>
            <button className="browse-btn">Browse Integrations</button>
          </div>
        </div>
        
        {/* Floating Social Icons */}
        <div className="social-icons-grid">
          {socialIcons.map((social, index) => (
            <div 
              key={index} 
              className={`social-icon ${social.name.toLowerCase()}`}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <span className="icon">{social.icon}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section">
        <h2 className="section-title">Our integrations</h2>
        
        {/* Filter Tabs */}
        <div className="filter-tabs">
          {['All', 'Social Media', 'Streaming', 'Productivity'].map(filter => (
            <button
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Integration Cards */}
        <div className="integration-cards">
          {filteredIntegrations.map(integration => (
            <div key={integration.id} className="integration-card">
              <div className="card-header">
                <div className="card-icon">
                  <span>{integration.icon}</span>
                </div>
                <div className="card-info">
                  <h3 className="card-title">{integration.name}</h3>
                  <span className="card-category">{integration.category}</span>
                </div>
              </div>
              <p className="card-description">{integration.description}</p>
              <button className="view-integration-btn">
                View Integration →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CTA;