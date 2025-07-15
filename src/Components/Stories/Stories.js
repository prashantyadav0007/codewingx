import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Filter } from 'lucide-react';
import './Stories.css';

const Stories = () => {
  const [activeFilter, setActiveFilter] = useState({
    services: false,
    industries: false,
    solutions: false
  });

  const [visibleStories, setVisibleStories] = useState(8);

  const toggleFilter = (filterType) => {
    setActiveFilter(prev => ({
      ...prev,
      [filterType]: !prev[filterType]
    }));
  };

  const stories = [
    {
      id: 1,
      title: "GMP4-Compliant Software to Automate Cancer & TPN Drugs Manufacturing",
      image: "/api/placeholder/400/250",
      category: "Healthcare"
    },
    {
      id: 2,
      title: "Custom Software for End-to-End Loan Management Automation",
      image: "/api/placeholder/400/250",
      category: "Finance"
    },
    {
      id: 3,
      title: "Blockchain-Based Wine Supply Chain Software for FIDÉwine",
      image: "/api/placeholder/400/250",
      category: "Supply Chain",
      logo: "FIDÉ wine"
    },
    {
      id: 4,
      title: "Development of Viber, a Messaging and VoIP App with 1B+ Users",
      image: "/api/placeholder/400/250",
      category: "Communication",
      logo: "Viber"
    },
    {
      id: 5,
      title: "IoT-Based Physiotherapy Platform Driving 70% Reduction in Pain and Unneeded Surgeries",
      image: "/api/placeholder/400/250",
      category: "Healthcare",
      logo: "AKLOS Health"
    },
    {
      id: 6,
      title: "Data Analytics System Enabling Cross Analysis of 30,000 Attributes and 100x Faster Reporting",
      image: "/api/placeholder/400/250",
      category: "Analytics"
    },
    {
      id: 7,
      title: "Insurance App with 3D Auto Models to Transform Claim Submission",
      image: "/api/placeholder/400/250",
      category: "Insurance"
    },
    {
      id: 8,
      title: "Underwriting Automation Software for a Global Aviation Insurer with $30B in Assets",
      image: "/api/placeholder/400/250",
      category: "Insurance"
    }
  ];

  const showMoreStories = () => {
    setVisibleStories(prev => prev + 8);
  };

  return (
    <div className="stories-container">
      <div className="stories-header">
        <h1>Success Stories</h1>
        
        <div className="filter-section">
          <span className="filter-label">Filter by:</span>
          
          <div className="filter-dropdown">
            <button 
              className={`filter-btn ${activeFilter.services ? 'active' : ''}`}
              onClick={() => toggleFilter('services')}
            >
              Services <ChevronDown size={16} />
            </button>
            {activeFilter.services && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Web Development</div>
                <div className="dropdown-item">Mobile Development</div>
                <div className="dropdown-item">Cloud Solutions</div>
              </div>
            )}
          </div>

          <div className="filter-dropdown">
            <button 
              className={`filter-btn ${activeFilter.industries ? 'active' : ''}`}
              onClick={() => toggleFilter('industries')}
            >
              Industries <ChevronDown size={16} />
            </button>
            {activeFilter.industries && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Healthcare</div>
                <div className="dropdown-item">Finance</div>
                <div className="dropdown-item">Insurance</div>
              </div>
            )}
          </div>

          <div className="filter-dropdown">
            <button 
              className={`filter-btn ${activeFilter.solutions ? 'active' : ''}`}
              onClick={() => toggleFilter('solutions')}
            >
              Solutions <ChevronDown size={16} />
            </button>
            {activeFilter.solutions && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Custom Software</div>
                <div className="dropdown-item">Automation</div>
                <div className="dropdown-item">Analytics</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="stories-grid">
        {stories.slice(0, visibleStories).map((story) => (
          <div key={story.id} className="story-card">
            <div className="story-image">
              <img src={story.image} alt={story.title} />
            </div>
            <div className="story-content">
              <h3>{story.title}</h3>
              <button className="project-details-btn">
                Project details <ArrowRight size={16} />
              </button>
              {story.logo && (
                <div className="story-logo">
                  <span>{story.logo}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="stories-footer">
        <p className="stories-count">
          You've viewed {Math.min(visibleStories, stories.length)} of {stories.length} success stories
        </p>
        
        {visibleStories < stories.length && (
          <button className="show-more-btn" onClick={showMoreStories}>
            Show more success stories
          </button>
        )}
        
        <button className="filter-projects-btn">
          <Filter size={16} />
          Filter projects
        </button>
      </div>
    </div>
  );
};

export default Stories;