import React, { useState } from 'react';
import './ClientReviews.css';

const ClientReviews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedSolution, setSelectedSolution] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const testimonials = [
    {
      id: 1,
      company: "Alta Resources",
      logo: "AR",
      rating: 5,
      description: "a global provider of business process outsourcing services",
      testimonial: "codewingx proved to be flexible and responsive during end-to-end implementation of an enterprise analytics solution.",
      clientName: "Heather Owen Nigl",
      clientTitle: "Chief Financial Officer",
      actions: ["Read in full", "Check the project"]
    },
    {
      id: 2,
      company: "bioAffinity Technologies",
      logo: "BA",
      rating: 5,
      description: "a biotech company creating in-vitro diagnostics solutions",
      testimonial: "In addition to the solid technical expertise shown by CodewingX, its developers demonstrated a profound understanding of laboratory software specifics and integrations.",
      clientName: "Maria Zannes",
      clientTitle: "President & CEO",
      actions: ["Read in full", "Check the project"]
    },
    {
      id: 3,
      company: "Saudia Cargo",
      logo: "SC",
      rating: 5,
      description: "a leading air cargo carrier headquartered in Saudi Arabia",
      testimonial: "The B2B customer portal fully meets our business needs of enhanced pricing invoicing and contracting and overall client communication.",
      clientName: "Shorouq Basnawi",
      clientTitle: "Commercial Application Sr. Analyst",
      actions: ["Check the project"]
    },
    {
      id: 4,
      company: "Frost Insurances Ltd",
      logo: "FI",
      rating: 5,
      description: "a leading insurance broker and insurance underwriting company",
      testimonial: "Partnering with CodewingX for our software maintenance and evolution initiative has been an excellent experience. Over the past 18 months, their team has transformed our underwriting platform into a well-oiled machine.",
      clientName: "Ted Frost",
      clientTitle: "Managing Director",
      actions: ["Read in full"]
    },
    {
      id: 5,
      company: "Brush Claims",
      logo: "BC",
      rating: 5,
      description: "an insurtech claims solution firm",
      testimonial: "Brush Claims engaged CodewingX to develop a new claim software product. The value we derived from partnering with CodewingX is definitely worth the investment.",
      clientName: "Jen Dalton",
      clientTitle: "Chief Information Security Officer",
      actions: ["Read in full", "Check the project"]
    },
    {
      id: 6,
      company: "Nielsen",
      logo: "N",
      rating: 5,
      description: "a global leader in audience measurement, data and analytics",
      testimonial: "CodewingX's engineers have been engaged in the development, deployment, and support stages of our projects, demonstrating a strong commitment to our vision and proactively addressing challenges with foresight and creativity.",
      clientName: "Joost Blox",
      clientTitle: "Senior Manager",
      actions: ["Read in full"]
    },
    {
      id: 7,
      company: "Paramount WorkPlace",
      logo: "PW",
      rating: 5,
      description: "a software development company",
      testimonial: "After product evolution performed by CodewingX, the new software module performs stably even under heavy load.",
      clientName: "Wadih Pazos",
      clientTitle: "Chief Operating Officer",
      actions: ["Read in full"]
    },
    {
      id: 8,
      company: "ScribeAmerica LLC",
      logo: "SA",
      rating: 5,
      description: "the largest medical scribe company in the United States",
      testimonial: "CodewingX's L1 team has already become a valuable asset to ScribeAmerica. We needed full transparency in service provisioning, and we appreciate their regular reporting and clear communication with our IT operations managers.",
      clientName: "David Torres",
      clientTitle: "IT Operations Manager",
      actions: ["Read in full", "Check the project"]
    },
    {
      id: 9,
      company: "ONE Technologies",
      logo: "OT",
      rating: 5,
      description: "a software development company focused on financial IT",
      testimonial: "ONE Technologies engaged CodewingX to develop a suite of business process management apps for a banking client. What always set CodewingX apart is their resistance to mediocre results and their proactive advice on meaningful improvements.",
      clientName: "Almat Zhaparov",
      clientTitle: "Chief Executive Officer",
      actions: ["Check the project"]
    }
  ];

  const filteredTestimonials = testimonials.filter(testimonial =>
    testimonial.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.testimonial.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
    ));
  };

  return (
    <div className="client-reviews">
      {/* Header Section */}
      <div className="header-section">
        <div className="header-content">
          <div className="header-text">
            <h1>Our Satisfied Clients</h1>
            <p>
              We collaborate with companies from <strong>70+ countries</strong> and <strong>30+ industries</strong>. Our
              project portfolio contains <strong>over 4,000 success stories</strong>, including projects for
              Walmart, eBay, NASA JPL, PerkinElmer, Baxter, IBM, Leo Burnett.
            </p>
            <p>
              We're ready to <a href="#" className="connect-link">connect you directly with our clients</a> in relevant industries, regions,
              or technology fields, so you can gain honest insights straight from the source.
            </p>
          </div>
          <div className="stats-circle">
            <div className="circle-content">
              <div className="stats-text">Around</div>
              <div className="stats-number">4,000</div>
              <div className="stats-label">success stories</div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn">🔍</button>
        </div>

        <div className="filter-dropdowns">
          <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>
            <option value="">Services</option>
            <option value="development">Development</option>
            <option value="consulting">Consulting</option>
            <option value="support">Support</option>
          </select>

          <select value={selectedIndustry} onChange={(e) => setSelectedIndustry(e.target.value)}>
            <option value="">Industries</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="insurance">Insurance</option>
          </select>

          <select value={selectedSolution} onChange={(e) => setSelectedSolution(e.target.value)}>
            <option value="">Solutions</option>
            <option value="web">Web Solutions</option>
            <option value="mobile">Mobile Solutions</option>
            <option value="analytics">Analytics</option>
          </select>

          <select value={selectedTechnology} onChange={(e) => setSelectedTechnology(e.target.value)}>
            <option value="">Technologies</option>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="python">Python</option>
          </select>

          <select value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)}>
            <option value="">Regions</option>
            <option value="north-america">North America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
          </select>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="testimonials-grid">
        {filteredTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="card-header">
              <div className="company-info">
                <div className="company-logo">{testimonial.logo}</div>
                <div className="company-details">
                  <h3>{testimonial.company}</h3>
                  <p>{testimonial.description}</p>
                </div>
              </div>
              <div className="rating">
                {renderStars(testimonial.rating)}
              </div>
            </div>

            <div className="testimonial-content">
              <div className="client-avatar">
                <div className="avatar-circle">
                  {testimonial.clientName.split(' ').map(name => name[0]).join('')}
                </div>
              </div>
              <div className="testimonial-text">
                <p>"{testimonial.testimonial}"</p>
                <div className="client-info">
                  <strong>{testimonial.clientName}</strong>
                  <span>{testimonial.clientTitle}</span>
                </div>
              </div>
            </div>

            <div className="card-actions">
              {testimonial.actions.map((action, index) => (
                <button key={index} className={`action-btn ${action === 'Check the project' ? 'secondary' : 'primary'}`}>
                  {action}
                </button>
              ))}
              <button className="share-btn">📤</button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Section */}
      <div className="load-more-section">
        <button className="load-more-btn">Show more testimonials (158)</button>
        <button className="filter-btn">🔽 Filter testimonials</button>
      </div>
    </div>
  );
};

export default ClientReviews;