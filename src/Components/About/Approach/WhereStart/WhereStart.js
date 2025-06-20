import React from 'react';
import './WhereStart.css';

const WhereStart = () => {
  return (
    <div className="cw-wherestart-wrapper">
      {/* Hero Section */}
      <section className="cw-hero-area">
        <div className="cw-hero-inner">
          <div className="cw-hero-textblock">
            <h1>Always Customer-Focused.</h1>
            <h1>Even before the Project</h1>
            <h1>Starts</h1>
            <p>
              Codewingx has a well-oiled process of customer onboarding. Learn how to
              start working with us and what we do to ensure fast response, effective
              communication and legal guarantees to our clients.
            </p>
          </div>
          <div className="cw-hero-visual">
            <div className="cw-flying-team">
              <div className="cw-person cw-person-1"></div>
              <div className="cw-person cw-person-2"></div>
              <div className="cw-person cw-person-3"></div>
              <div className="cw-person cw-person-4"></div>
              <div className="cw-cloud-element"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="cw-problems-area">
        <div className="cw-problems-inner">
          <div className="cw-section-title">
            <h2>Such a Small Step, a Project Start May Still Be Dissatisfying</h2>
          </div>
          
          <div className="cw-comparison-grid">
            <div className="cw-grid-header">
              <div className="cw-header-cell cw-bad-header">Bad practices</div>
              <div className="cw-header-cell cw-good-header">Codewingx's approach</div>
            </div>
            
            <div className="cw-comparison-item">
              <div className="cw-problem-title">
                <h4>Problem #1: A slow project kickoff</h4>
              </div>
              <div className="cw-bad-approach">
                <div className="cw-icon cw-negative-icon"></div>
                <p>Extra hours and days wasted to get the first response, arrange a call or get a proposal put off the project start.</p>
              </div>
              <div className="cw-good-approach">
                <div className="cw-icon cw-positive-icon"></div>
                <p>At Codewingx, we have established and rigorously follow a protocol of communication with prospects that defines requirements for the first response time. Also, we have a rule-based algorithm for distributing requests among salespeople, which allows us to schedule the first call without delay.</p>
              </div>
            </div>
            
            <div className="cw-comparison-item">
              <div className="cw-problem-title">
                <h4>Problem #2: A gap in expectations</h4>
              </div>
              <div className="cw-bad-approach">
                <div className="cw-icon cw-negative-icon"></div>
                <p>IT vendors may adopt a tell-us-what-to-do approach. They may expect their clients to come with a clear understanding of what software or what IT improvements they need.</p>
              </div>
              <div className="cw-good-approach">
                <div className="cw-icon cw-positive-icon"></div>
                <p>At Codewingx, we understand that business people think in terms of profit, costs, productivity, efficiency, and other business success indicators. And it's our responsibility to know the capabilities and limitations of digital technologies. Even before the project starts, we dive into our clients' pains or goals and offer solutions to address them best.</p>
              </div>
            </div>
          </div>
          
          <div className="cw-cta-section">
            <div className="cw-schedule-visual"></div>
            <button className="cw-schedule-button">Schedule a call →</button>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="cw-workflow-area">
        <div className="cw-workflow-inner">
          <h2>Codewingx's Simple and Fast Workflow for Customer Onboarding</h2>
          
          <div className="cw-workflow-list">
            <div className="cw-workflow-item">
              <div className="cw-step-visual cw-step-1-visual"></div>
              <div className="cw-step-details">
                <h3>1. Send us a request</h3>
                <p>You can choose a channel to reach us that is the most convenient for you:</p>
                <ul>
                  <li><strong>A live chat</strong> is perfect if you need to clarify something or seek more information about our services or a specific solution. On average, we reply in 30 seconds.</li>
                  <li>Our <strong>email contact@codewingx.com</strong> or <strong>any contact button on our website</strong>. Our average response time may vary from 1–2 hours to 1 business day, depending on the queue.</li>
                  <li><strong>By phone +1 214 306 68 37 or +1 972 454 47 30</strong>: the quickest way to reach us. We are available round the clock on business days, covering all time zones from GMT-9 in North America to GMT +13 in New Zealand.</li>
                </ul>
              </div>
            </div>
            
            <div className="cw-workflow-item">
              <div className="cw-step-visual cw-step-2-visual"></div>
              <div className="cw-step-details">
                <h3>2. Schedule an introductory call</h3>
                <p>We respect your time. So, before the first contact, our sales reps collect publicly available information about your company to direct the conversation straight to the point.</p>
                <p>We need the call to dive into your situation, and we do care to make the most of this first conversation. We don't listen passively but ask questions to elicit nonobvious pains and detect more value creation opportunities you can leverage.</p>
              </div>
            </div>
            
            <div className="cw-workflow-item">
              <div className="cw-step-visual cw-step-3-visual"></div>
              <div className="cw-step-details">
                <h3>3. Sign an NDA</h3>
                <p>We create trustful relationships by legally protecting your confidential business information. Depending on your legal requirements, we can sign an NDA before the introductory call or only in case we sign a service contract.</p>
              </div>
            </div>
            
            <div className="cw-workflow-item">
              <div className="cw-step-visual cw-step-4-visual"></div>
              <div className="cw-step-details">
                <h3>4. Get a proposal</h3>
                <p>A proposal is free of charge, and it will give you full understanding of the service scope or the solution we offer. We always include:</p>
                <ul>
                  <li>A short summary to make our offering comprehensible at a glance.</li>
                  <li>The scope of work / technical solution description.</li>
                  <li>Team composition and a brief explanation of the expected input of each team member.</li>
                  <li><strong>Cost estimate.</strong></li>
                  <li>Project timelines.</li>
                  <li>Risks (if any) and our mitigation strategy.</li>
                  <li>Deliverables focused on the business value.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="cw-final-cta">
            <div className="cw-schedule-visual"></div>
            <button className="cw-schedule-button">Schedule a call →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhereStart;