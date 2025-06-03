import React from 'react';
import './Stats.css';

const Stats = () => {
  const statsData = [
    {
      number: '250M',
      suffix: '+',
      label: 'Traded monthly'
    },
    {
      number: '300K',
      suffix: '+',
      label: 'Active users'
    },
    {
      number: '10M',
      suffix: '+',
      label: 'Saved in commissions'
    },
    {
      number: '75M',
      suffix: '+',
      label: 'Capital in funding'
    }
  ];

  const valuesData = [
    {
      icon: '⭐',
      title: 'Innovation',
      description: 'Lorem ipsum dolor sit amet consec tetur do adipiscing elit ut odio tortor quam enim ipsum.'
    },
    {
      icon: '🎯',
      title: 'Accessibility',
      description: 'Lorem ipsum dolor sit amet consec tetur do adipiscing elit ut odio tortor quam enim ipsum.'
    },
    {
      icon: '🔓',
      title: 'Openness',
      description: 'Lorem ipsum dolor sit amet consec tetur do adipiscing elit ut odio tortor quam enim ipsum.'
    },
    {
      icon: '💪',
      title: 'Empowerment',
      description: 'Lorem ipsum dolor sit amet consec tetur do adipiscing elit ut odio tortor quam enim ipsum.'
    }
  ];

  return (
    <div className="stats-container">
      {/* Header */}
      <header className="header">
        <div className="nav">
          <div className="logo">
            <span className="logo-icon">⚫</span>
            <span className="logo-text">Dark X</span>
          </div>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#pricing">Pricing</a>
            <a href="#pages">Pages ↓</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="nav-buttons">
            <button className="sign-in-btn">Sign in</button>
            <button className="get-started-btn">Get started</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            We're on a mission to <br />
            <span className="gradient-text">democratize finance</span>
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit<br />
            id dolor venenatis auctor maecenas egestas arcu ut.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-number">
                {stat.number}<span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-content">
          <div className="story-text">
            <h2 className="section-title">The story behind us</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu.
            </p>
          </div>
          <div className="story-image">
            <div className="image-placeholder">👥</div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <div className="mission-image">
            <div className="image-placeholder">💼</div>
          </div>
          <div className="mission-text">
            <h2 className="section-title">The mission behind all our work</h2>
            <p className="section-description">
              Aliquam ultrices sagittis orci a scelerisque purus tristique nulla
              aliquet enim tortor at auctor urna nunc id. Fringilla phasellus
              faucibus scelerisque eleifend donec pretium vulputate non
              blandit massa enim nec dui. Maecenas volutpat blandit
              aliquam etiam erat velit scelerisque duis at consectetur.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-header">
          <h2 className="section-title">The values that drive everything we do</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit congue
            elementum velit se senectus urna amet cras neque.
          </p>
        </div>
        <div className="values-grid">
          {valuesData.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stats;