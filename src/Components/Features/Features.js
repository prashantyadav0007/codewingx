import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-container">
      {/* Header Section */}
      <div className="features-header">
        <h1 className="features-title">Features</h1>
        <p className="features-subtitle">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur excepteur sint cupidata
        </p>
      </div>

      {/* Real-time Trading Section */}
      <div className="feature-section real-time-section">
        <div className="feature-content">
          <h2>Real-time trading</h2>
          <p>
            Egestas diam non odio maecenas porttitor ornare 
            ante aptent dignissim a magnis per, nam conubia 
            sagittis fermentum bibendum.
          </p>
        </div>
        <div className="feature-visual">
          <div className="trading-dashboard">
            <div className="dashboard-header">
              <div className="window-controls">
                <span className="control-dot red"></span>
                <span className="control-dot yellow"></span>
                <span className="control-dot green"></span>
              </div>
            </div>
            <div className="dashboard-content">
              <div className="chart-area">
                <div className="candlestick-chart">
                  <div className="candlestick green" style={{height: '40px'}}></div>
                  <div className="candlestick red" style={{height: '60px'}}></div>
                  <div className="candlestick green" style={{height: '50px'}}></div>
                  <div className="candlestick red" style={{height: '30px'}}></div>
                  <div className="candlestick green" style={{height: '70px'}}></div>
                  <div className="candlestick green" style={{height: '45px'}}></div>
                </div>
                <div className="volume-bars">
                  <div className="volume-bar" style={{height: '15px'}}></div>
                  <div className="volume-bar" style={{height: '25px'}}></div>
                  <div className="volume-bar" style={{height: '20px'}}></div>
                  <div className="volume-bar" style={{height: '30px'}}></div>
                  <div className="volume-bar" style={{height: '18px'}}></div>
                  <div className="volume-bar" style={{height: '22px'}}></div>
                </div>
              </div>
              <div className="trading-info">
                <div className="info-item">
                  <span className="info-label">BTC/USD</span>
                  <span className="info-value green">$45,234.56</span>
                </div>
                <div className="info-item">
                  <span className="info-label">ETH/USD</span>
                  <span className="info-value red">$3,456.78</span>
                </div>
                <div className="info-item">
                  <span className="info-label">ADA/USD</span>
                  <span className="info-value green">$1.23</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three Feature Cards */}
      <div className="feature-cards">
        <div className="feature-card">
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h3>&lt;1 sec operations</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id</p>
        </div>
        
        <div className="feature-card">
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
            </svg>
          </div>
          <h3>No commissions</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id</p>
        </div>
        
        <div className="feature-card">
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h3>Desktop and mobile</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id</p>
        </div>
      </div>

      {/* Security Section */}
      <div className="feature-section security-section">
        <div className="feature-visual">
          <div className="security-dashboard">
            <div className="security-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="security-items">
              <div className="security-item">
                <div className="security-bar"></div>
                <div className="security-check">✓</div>
              </div>
              <div className="security-item">
                <div className="security-bar"></div>
                <div className="security-check">✓</div>
              </div>
              <div className="security-item">
                <div className="security-bar"></div>
                <div className="security-check">✓</div>
              </div>
              <div className="security-item">
                <div className="security-bar"></div>
                <div className="security-check">✓</div>
              </div>
              <div className="security-item">
                <div className="security-bar"></div>
                <div className="security-check">✓</div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-content">
          <h2>Built-in encryption and security</h2>
          <p>
            Egestas diam non odio maecenas porttitor ornare 
            ante aptent dignissim a magnis per, nam conubia 
            sagittis fermentum bibendum.
          </p>
        </div>
      </div>

      {/* Security Feature Cards */}
      <div className="feature-cards">
        <div className="feature-card">
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="16" r="1" fill="currentColor"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h3>256-bit AES encryption</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id</p>
        </div>
        
        <div className="feature-card">
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2"/>
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h3>Advanced security standards</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id</p>
        </div>
        
        <div className="feature-card">
          <div className="card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" stroke="currentColor" strokeWidth="2"/>
              <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          <h3>Two-factor authentication</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit id</p>
        </div>
      </div>

      {/* Smart Investments Section */}
      <div className="feature-section smart-investments-section">
        <div className="feature-content">
          <h2>Smart investments</h2>
          <p>
            Egestas diam non odio maecenas porttitor ornare 
            ante aptent dignissim a magnis per, nam conubia 
            sagittis fermentum bibendum.
          </p>
        </div>
        <div className="feature-visual">
          <div className="investment-dashboard">
            <div className="dashboard-header">
              <div className="window-controls">
                <span className="control-dot red"></span>
                <span className="control-dot yellow"></span>
                <span className="control-dot green"></span>
              </div>
            </div>
            <div className="dashboard-content">
              <div className="investment-charts">
                <div className="chart-line">
                  <svg width="100%" height="40" viewBox="0 0 200 40">
                    <path d="M0,30 Q50,10 100,20 T200,15" stroke="#10b981" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="chart-line">
                  <svg width="100%" height="40" viewBox="0 0 200 40">
                    <path d="M0,25 Q50,35 100,15 T200,25" stroke="#ef4444" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="chart-line">
                  <svg width="100%" height="40" viewBox="0 0 200 40">
                    <path d="M0,20 Q50,15 100,30 T200,10" stroke="#3b82f6" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div className="chart-line">
                  <svg width="100%" height="40" viewBox="0 0 200 40">
                    <path d="M0,35 Q50,20 100,25 T200,30" stroke="#10b981" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
              </div>
              <div className="investment-bars">
                <div className="bar-chart">
                  <div className="bar" style={{height: '30px'}}></div>
                  <div className="bar" style={{height: '45px'}}></div>
                  <div className="bar" style={{height: '25px'}}></div>
                  <div className="bar" style={{height: '55px'}}></div>
                  <div className="bar" style={{height: '35px'}}></div>
                  <div className="bar" style={{height: '40px'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;