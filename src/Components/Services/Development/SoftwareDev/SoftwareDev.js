import React, { useState } from 'react';
import './SoftwareDev.css';

const SoftwareDev = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const servicesData = {
    business: {
      title: "Business & project management",
      icon: "👨‍💼",
      basicServices: [
        "Business analysis",
        "Project management",
        "Quality assurance",
        "Compliance management",
        "Change management"
      ],
      expandedServices: [
        "Risk management",
        "Process optimization",
        "Workflow automation",
        "Requirements gathering",
        "Stakeholder management",
        "Resource planning",
        "Performance monitoring"
      ]
    },
    sourcing: {
      title: "Sourcing & stock management",
      icon: "👥",
      basicServices: [
        "Supplier management",
        "Inventory management",
        "Procurement"
      ],
      expandedServices: [
        "Vendor evaluation",
        "Purchase order management",
        "Stock optimization",
        "Demand forecasting",
        "Supply chain analytics",
        "Contract management"
      ]
    },
    asset: {
      title: "Asset management",
      icon: "💼",
      basicServices: [
        "Fixed asset management",
        "Digital asset management"
      ],
      expandedServices: [
        "Asset tracking",
        "Depreciation management",
        "Maintenance scheduling",
        "Asset lifecycle management",
        "Performance analytics"
      ]
    },
    sales: {
      title: "Sales, marketing & customer service",
      icon: "📊",
      basicServices: [
        "CRM development",
        "Sales & marketing automation systems",
        "CPQ solutions",
        "Contact center solutions",
        "Self-service portals",
        "Chatbots development"
      ],
      expandedServices: [
        "Customer feedback management",
        "Loyalty management",
        "Subscription management",
        "Revenue management",
        "Field service management",
        "Partner relationship management",
        "Lead management",
        "Campaign management",
        "Social media integration"
      ]
    },
    finance: {
      title: "Corporate finance management",
      icon: "💰",
      basicServices: [
        "Financial planning & analysis",
        "Budgeting software"
      ],
      expandedServices: [
        "Expense management",
        "Invoice processing",
        "Cash flow management",
        "Financial reporting",
        "Tax management",
        "Audit support"
      ]
    },
    analytics: {
      title: "Business analytics",
      icon: "📈",
      basicServices: [
        "BI development",
        "Reporting"
      ],
      expandedServices: [
        "Data visualization",
        "Predictive analytics",
        "Real-time dashboards",
        "Data mining",
        "Statistical analysis",
        "Performance metrics"
      ]
    },
    hr: {
      title: "HR, talent & productivity management",
      icon: "👤",
      basicServices: [
        "HR management systems",
        "Talent management"
      ],
      expandedServices: [
        "Recruitment automation",
        "Performance evaluation",
        "Payroll management",
        "Employee onboarding",
        "Training management",
        "Time tracking"
      ]
    },
    communication: {
      title: "Communication",
      icon: "💬",
      basicServices: [
        "Corporate team collaboration tools",
        "Video conferencing"
      ],
      expandedServices: [
        "Instant messaging",
        "Document sharing",
        "Virtual meetings",
        "Team workspaces",
        "Mobile communication"
      ]
    },
    security: {
      title: "Security & emergency",
      icon: "🔐",
      basicServices: [
        "Security management",
        "Video surveillance"
      ],
      expandedServices: [
        "Access control",
        "Incident response",
        "Threat detection",
        "Compliance monitoring",
        "Emergency protocols",
        "Data protection"
      ]
    }
  };

  const renderServiceCard = (cardId, service) => {
    const isExpanded = expandedCards[cardId];
    const allServices = isExpanded 
      ? [...service.basicServices, ...service.expandedServices]
      : service.basicServices;

    return (
      <div key={cardId} className={`solution-card ${cardId}`}>
        <div className={`solution-icon ${cardId}`}>{service.icon}</div>
        <h3>{service.title}</h3>
        <ul className="solution-list">
          {allServices.map((serviceItem, index) => (
            <li key={index}>
              <a href="#">{serviceItem}</a>
            </li>
          ))}
        </ul>
        <button 
          onClick={() => toggleCard(cardId)}
          className="see-more"
        >
          {isExpanded ? 'Show less ➖' : 'Show more ➕'}
        </button>
      </div>
    );
  };

  return (
    <div className="software-dev-container">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-content">
          <div className="header-text">
            <h1>Software Development Services</h1>
            <p className="header-description">
              At ScienceSoft, we are ready to offer end-to-end development that covers 
              everything from business analysis to post-launch support and maintenance. As 
              a full-service software development company, we deliver both custom solutions 
              and digital transformation services at the highest quality standards that 
              our clients expect.
            </p>
            <div className="header-buttons">
              <button className="btn-primary">Discuss your needs</button>
              <button className="btn-secondary">Calculate your project cost</button>
            </div>
          </div>
          <div className="header-visual">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"ScienceSoft's team has strong technical capabilities and delivers high-quality results within deadline and budget constraints."</p>
              <div className="author">
                
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"The team's communication was clear and they were very responsive to our questions and concerns."</p>
              <div className="author">
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="partnership-section">
        <div className="section-content">
          <h2>ScienceSoft as a Software Development Partner</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">750+</div>
              <div className="stat-label">Experts</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">550+</div>
              <div className="stat-label">Developers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Project managers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">Certified</div>
              <div className="stat-label">Platform experts</div>
            </div>
          </div>
          <div className="achievements-grid">
            <div className="achievement-item">
              <div className="achievement-number">35 years</div>
              <div className="achievement-desc">in software engineering and IT consulting</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">4,000 projects</div>
              <div className="achievement-desc">Successfully completed</div>
            </div>
            <div className="achievement-item">
              <div className="achievement-number">HQ in the US</div>
              <div className="achievement-desc">Offices in Europe and the Gulf</div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="section-content">
          <h2>Explore Services Tailored to You</h2>
          <p className="services-desc">Browse our software development services based on your industry or the solution you need.</p>
          
          <div className="services-subtitle">Industry-specific expertise</div>
          <div className="industry-grid">
            <div className="industry-item">
              <div className="industry-icon">🏥</div>
              <div className="industry-name">Healthcare</div>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🏦</div>
              <div className="industry-name">Banking</div>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🛡️</div>
              <div className="industry-name">Insurance</div>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🎓</div>
              <div className="industry-name">Learning</div>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🛒</div>
              <div className="industry-name">E-commerce</div>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🛍️</div>
              <div className="industry-name">Retail</div>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🏭</div>
              <div className="industry-name">Manufacturing</div>
            </div>
            <div className="industry-item">
              <div className="industry-icon">⚖️</div>
              <div className="industry-name">Professional services</div>
            </div>
            <div className="industry-item">
              <div className="industry-icon">⛽</div>
              <div className="industry-name">Oil and Gas</div>
            </div>
            <div className="industry-item">
              <div className="industry-icon">📱</div>
              <div className="industry-name">Telecoms</div>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🚛</div>
              <div className="industry-name">Logistics and Transportation</div>
            </div>
            <div className="industry-item">
              <div className="industry-icon">🏗️</div>
              <div className="industry-name">Engineering and Construction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Solution-focused Services */}
      <div className="solution-services-section">
        <div className="section-content">
          <h2>Solution-focused services</h2>
          <div className="solution-grid">
            {Object.entries(servicesData).map(([cardId, service]) => 
              renderServiceCard(cardId, service)
            )}
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default SoftwareDev;