import React from 'react';
import './OurPartners.css';

const OurPartners = () => {
  return (
    <div className="partners-container">
      <div className="partners-content">
        <h1 className="partners-title">Our Partners</h1>
        <p className="partners-description">
          Our productive collaboration with IT product providers leads to new growth opportunities and brings to our clients all the advantages of the most up-to-date
          technologies. We hold partnerships with leaders in enterprise software products, data management systems and cloud technologies, which allows us to safely rely
          on the quality of tech products we recommend.
        </p>

        <div className="partners-grid">
          {/* Microsoft Partner */}
          <div className="partner-card">
            <div className="partner-logo">
              <div className="microsoft-logo">
                <div className="ms-squares">
                  <div className="ms-square red"></div>
                  <div className="ms-square green"></div>
                  <div className="ms-square blue"></div>
                  <div className="ms-square yellow"></div>
                </div>
                <div className="ms-text">
                  <div className="ms-title">Microsoft</div>
                  <div className="ms-subtitle">Solutions Partner</div>
                </div>
              </div>
            </div>
            <p className="partner-description">
              ScienceSoft joined Microsoft Partner Network in 2008. Since then, we have built profound expertise in
              Microsoft products and successfully deliver solutions in Dynamics 365 suite, Power Apps, SharePoint,
              Power BI. We received <span className="highlight">recognition for ScienceSoft's expertise in SharePoint intranets</span> from
              Microsoft.
            </p>
            <a href="#" className="partner-link">More about Microsoft Partnership →</a>
          </div>

          {/* AWS Partner */}
          <div className="partner-card">
            <div className="partner-logo">
              <div className="aws-logo">
                <div className="aws-badge">
                  <span className="aws-text">aws</span>
                  <div className="aws-partner-text">
                    <div>PARTNER</div>
                    <div className="aws-small">Amazon Web Services</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="partner-description">
              An AWS partner, ScienceSoft helps businesses build and manage secure and resilient cloud environments.
              Our AWS-accredited solution architects, cloud practitioners and SysOps administrators bring their
              expertise to diverse projects for the development of business applications, databases and data
              warehouses, IoT infrastructures, big data processing and analytics solutions, application migration to AWS,
              managed services to keep AWS services and apps stable.
            </p>
            <a href="#" className="partner-link">More about AWS Partnership →</a>
          </div>

          {/* Oracle Partner */}
          <div className="partner-card">
            <div className="partner-logo">
              <div className="oracle-logo">
                <span className="oracle-text">ORACLE</span>
                <span className="oracle-partner">Partner</span>
              </div>
            </div>
            <p className="partner-description">
              Since ScienceSoft partnered with Oracle in 2007, we've been helping our clients achieve the best value
              for money by creating robust data analytics solutions as well as high performing and secure database
              environments powered by Oracle expertise.
            </p>
            <a href="#" className="partner-link">More about Oracle Partnership →</a>
          </div>

          {/* ServiceNow Partner */}
          <div className="partner-card">
            <div className="partner-logo">
              <div className="servicenow-logo">
                <span className="servicenow-text">servicen</span>
                <span className="servicenow-now">ow</span>
              </div>
            </div>
            <p className="partner-description">
              A ServiceNow Partner, ScienceSoft delivers efficient ITSM solutions that bring visibility into all clients' IT
              processes and infrastructure, allow timely reaction to incidents, problems and events, minimize negative
              impact of infrastructural changes, and help to optimize IT support costs.
            </p>
            <a href="#" className="partner-link">More about ServiceNow Partnership →</a>
          </div>

          {/* Adobe Partner */}
          <div className="partner-card">
            <div className="partner-logo">
              <div className="adobe-logo">
                <span className="adobe-text">Adobe</span>
              </div>
            </div>
            <p className="partner-description">
              Initially a <span className="highlight">Magento partner</span>, we continue working with Adobe Commerce Cloud for the businesses that digitize
              their customer interactions and thus secure the viability of their business models in the digital age.
              We build ecommerce solutions and web portals for businesses in retail, manufacturing, healthcare,
              education, and other industries.
            </p>
            <a href="#" className="partner-link">More about Adobe Partnership →</a>
          </div>

          {/* Ispirer Partner */}
          <div className="partner-card">
            <div className="partner-logo">
              <div className="ispirer-logo">
                <span className="ispirer-text">Ispirer</span>
              </div>
            </div>
            <p className="partner-description">
              An enterprise software modernization consultancy with 15 years of experience in IT, ScienceSoft partners
              with Ispirer — a trusted provider of advanced tools for automated database and application code
              migration. Ispirer's solutions cover numerous migration directions and enable 80%-95%
              automation of the process, dramatically accelerating legacy system transformation.
            </p>
            <a href="#" className="partner-link">More about Ispirer Partnership →</a>
          </div>
        </div>

        <div className="share-section">
          <span className="share-text">Share:</span>
          <div className="share-icons">
            <a href="#" className="share-icon facebook">f</a>
            <a href="#" className="share-icon twitter">t</a>
            <a href="#" className="share-icon linkedin">in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPartners;