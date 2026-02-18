import React from "react";
import "./Terms.css";

// ── Reusable sub-components ────────────────────────────────

const SectionLabel = ({ children }) => (
  <div className="section-label">{children}</div>
);

const TermsSection = ({ number, title, children }) => (
  <div className="policy-section">
    {number && <p className="section-number">§ {number}</p>}
    <h2 className="section-title">{title}</h2>
    {children}
  </div>
);

const InfoCard = ({ children, warning = false }) => (
  <div className={`info-card${warning ? " warning" : ""}`}>
    <p>{children}</p>
  </div>
);

const PolicyList = ({ items }) => (
  <ul className="policy-list">
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

// ── Main Export ────────────────────────────────────────────

export default function Terms() {
  return (
    <>
      {/* Ambient background orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="site-header">
        <div className="logo">
          <span className="logo-dot" />
          CodeWingX
        </div>
        <span className="header-tag">Terms of Service</span>
      </header>

      {/* ── Page Content ───────────────────────────────────── */}
      <main className="page-wrap">

        {/* Hero */}
        <div className="hero">
          <SectionLabel>Legal &amp; Compliance Document</SectionLabel>
          <h1 className="hero-title">
            Terms of <em>Service</em>
          </h1>
          <p className="hero-updated">Last Updated: January 1, 2026</p>
          <p className="hero-intro">
            Please read carefully the following Terms and Conditions relating to your use of
            CodeWingX Technologies websites, applications, platforms, software, training portals,
            ERP systems, SaaS products, APIs, and related services.
          </p>
          <div className="divider" />
          <p className="policy-text">These Terms apply to:</p>
          <div className="applies-grid">
            <a href="https://www.codewingx.com" target="_blank" rel="noreferrer">https://www.codewingx.com</a>
            <a href="https://app.codewingx.com" target="_blank" rel="noreferrer">https://app.codewingx.com</a>
            <a href="https://learn.codewingx.com" target="_blank" rel="noreferrer">https://learn.codewingx.com</a>
            <a href="https://dashboard.codewingx.com" target="_blank" rel="noreferrer">https://dashboard.codewingx.com</a>
            <span>Any successor domains, subdomains, mobile applications, SaaS platforms, APIs, cloud systems, or digital services owned or operated by CodeWingX Technologies</span>
          </div>
          <p className="policy-text">
            (collectively referred to as the <strong>"Sites"</strong> or <strong>"Services"</strong>).
          </p>
        </div>

        {/* 1. Acceptance */}
        <TermsSection number="1" title="Acceptance of Terms">
          <p className="policy-text">
            You may only access or use the Sites or Services if you agree to be bound by these
            Terms of Service (<strong>"TOU"</strong>).
          </p>
          <p className="policy-text">
            By accessing, browsing, registering, subscribing, purchasing, or using the Sites or
            Services, you indicate your assent to these TOU.
          </p>
          <InfoCard warning>
            If you do not agree to be bound by these TOU, <strong>do not access or use the Services.</strong>
          </InfoCard>
        </TermsSection>

        {/* 2. Scope */}
        <TermsSection number="2" title="Scope of these TOU">
          <p className="policy-text">
            CodeWingX Technologies reserves the right to update or modify these TOU at any time
            without prior notice. These TOU apply to:
          </p>
          <PolicyList items={[
            "All CodeWingX-owned websites and successor domain names",
            "SaaS applications and ERP platforms",
            "Internship portals and learning management systems",
            "Client dashboards, APIs, and integrations",
          ]} />
          <InfoCard>
            If certain Services require additional agreements (such as SaaS Agreements, Enterprise
            Contracts, Internship Agreements, or Project Contracts), those agreements will govern
            in case of conflict — but only for the specific Service.
          </InfoCard>
          <p className="policy-text">
            These TOU do not apply to unaffiliated third-party websites that may be linked from
            our Services.
          </p>
        </TermsSection>

        {/* 3. Software & Disclaimers */}
        <TermsSection number="3" title="Software, SaaS Platforms &amp; Disclaimers">
          <p className="policy-text">
            CodeWingX may offer software, digital tools, SaaS platforms, documents, and online
            services for trial, subscription, or purchase. If any specific Service is governed by
            a separate license agreement, that agreement shall supersede these TOU only to the
            extent necessary for that specific Service.
          </p>

          <p className="section-subtitle">3.1 — Limitation of Liability</p>
          <p className="policy-text uppercase-notice">
            IN NO EVENT SHALL CODEWINGX TECHNOLOGIES AND/OR ITS SUPPLIERS BE LIABLE FOR ANY
            SPECIAL, INDIRECT, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT
            LIMITATION LOSS OF USE, DATA, REVENUE, OR PROFITS, ARISING OUT OF OR IN CONNECTION
            WITH THE USE OF THE SITES OR SERVICES.
          </p>
          <p className="policy-text">
            This limitation applies whether the claim arises in contract, negligence, tort, strict
            liability, or otherwise. Total liability shall not exceed the fees paid by you to
            CodeWingX in the preceding three (3) months.
          </p>

          <p className="section-subtitle">3.2 — Software</p>
          <p className="policy-text">
            Any downloadable or cloud-based software made available through the Services is the
            copyrighted work of CodeWingX Technologies and/or its suppliers. Use of the Software
            is governed by the applicable license agreement.
          </p>
          <InfoCard warning>
            <strong>Unauthorized use, reproduction, redistribution, reverse engineering,
            decompilation, or modification is strictly prohibited</strong> and may result in civil
            and criminal penalties.
          </InfoCard>

          <p className="section-subtitle">3.3 — Tools, Patches, APIs &amp; Beta Features</p>
          <p className="policy-text">
            For your convenience, CodeWingX may provide development tools, APIs, beta releases,
            testing environments, patches, or utilities. These are provided <strong>"AS IS"</strong> without
            warranties of any kind. CodeWingX makes no assurance regarding accuracy, reliability,
            or output results derived from such tools.
          </p>

          <p className="section-subtitle">3.4 — Documents</p>
          <p className="policy-text">
            Permission to use documents (help guides, whitepapers, technical documents, course
            materials, FAQs) is granted provided that:
          </p>
          <PolicyList items={[
            "Copyright notices remain intact",
            "Use is informational and non-commercial",
            "No modifications are made",
            "They are not redistributed",
          ]} />
          <p className="policy-text">
            Design elements, UI/UX layouts, logos, branding, and system architecture may not be
            copied or imitated. All documents are provided <strong>"AS IS"</strong> without warranties of any kind.
          </p>
        </TermsSection>

        {/* 4. Acceptable Use */}
        <TermsSection number="4" title="Acceptable Use Policy">
          <p className="policy-text">
            CodeWingX reserves the right, in its sole discretion, to remove content or terminate
            access for any reason. Prohibited actions include but are not limited to:
          </p>
          <PolicyList items={[
            "Posting unlawful, abusive, defamatory, or harmful content",
            "Posting content that promotes violence",
            "Violating intellectual property rights",
            "Uploading malicious code, viruses, or trojans",
            "Attempting to breach security systems",
            "Misrepresenting identity",
            "Sending spam or bulk communications",
            "Using scraping bots or automation tools",
            "Reselling or redistributing Services without authorization",
            "Using Services in violation of applicable laws",
          ]} />
          <InfoCard warning>
            Violations may result in <strong>immediate suspension or termination</strong> and
            potential legal action.
          </InfoCard>
        </TermsSection>

        {/* 5. User Accounts */}
        <TermsSection number="5" title="User Accounts &amp; Confidentiality">
          <p className="policy-text">If registration is required:</p>
          <PolicyList items={[
            "You must provide accurate information",
            "You are responsible for safeguarding credentials",
            "You are responsible for all activity under your account",
            "You must notify CodeWingX immediately of unauthorized access",
          ]} />
          <p className="policy-text">
            CodeWingX is not liable for losses resulting from compromised credentials due to
            your negligence.
          </p>
        </TermsSection>

        {/* 6. Privacy */}
        <TermsSection number="6" title="Privacy">
          <p className="policy-text">
            Use of the Services is governed by our{" "}
            <strong>Privacy Policy</strong>. You acknowledge that electronic communications
            satisfy legal writing requirements and that we may process data in accordance with
            applicable laws.
          </p>
        </TermsSection>

        {/* 7. IP Rights */}
        <TermsSection number="7" title="Intellectual Property Rights">
          <p className="policy-text">
            CodeWingX and/or its suppliers retain all rights, title, and interest in:
          </p>
          <PolicyList items={[
            "Software and source code",
            "Design systems and platform architecture",
            "Trademarks and trade secrets",
            "Training materials and branding",
          ]} />
          <p className="policy-text">
            These TOU do not grant rights to use trademarks or logos without written permission.
          </p>
        </TermsSection>

        {/* 8. Internship */}
        <TermsSection number="8" title="Internship &amp; Industrial Training Programs">
          <p className="policy-text">For internship and training services:</p>
          <PolicyList items={[
            "Certificates are issued only upon completion",
            "Completion requires meeting performance criteria",
            "Placement assistance is not a job guarantee",
            "Scholarships or discounts are discretionary",
            "Misconduct may result in removal without refund",
          ]} />
        </TermsSection>

        {/* 9. Monitoring */}
        <TermsSection number="9" title="Monitoring &amp; Enforcement">
          <p className="policy-text">
            CodeWingX reserves the right, but not the obligation, to monitor user activity and
            investigate violations. We may remove content or suspend accounts at our sole
            discretion.
          </p>
        </TermsSection>

        {/* 10. Indemnification */}
        <TermsSection number="10" title="Indemnification">
          <p className="policy-text">
            You agree to indemnify and hold harmless CodeWingX Technologies and its employees,
            affiliates, contractors, and agents from any claims, liabilities, losses, or expenses
            arising from:
          </p>
          <PolicyList items={[
            "Your use of the Services",
            "Violation of these Terms",
            "Infringement of third-party rights",
          ]} />
          <p className="policy-text">This obligation survives termination.</p>
        </TermsSection>

        {/* 11. Service Availability */}
        <TermsSection number="11" title="Service Availability">
          <p className="policy-text">
            We do not guarantee uninterrupted availability. Services may be suspended due to
            maintenance, system upgrades, security incidents, or force majeure events.
            CodeWingX is not liable for temporary unavailability.
          </p>
        </TermsSection>

        {/* 12. Force Majeure */}
        <TermsSection number="12" title="Force Majeure">
          <p className="policy-text">
            CodeWingX shall not be liable for delays caused by:
          </p>
          <PolicyList items={[
            "Natural disasters or government actions",
            "Internet outages or cybersecurity incidents",
            "Infrastructure failures",
          ]} />
        </TermsSection>

        {/* 13–15. Assignment / Severability / No Waiver */}
        <TermsSection number="13–15" title="Assignment, Severability &amp; No Waiver">
          <p className="section-subtitle">Assignment</p>
          <p className="policy-text">
            You may not assign your rights under these Terms without written consent. CodeWingX
            may assign these Terms in connection with merger, acquisition, or restructuring.
          </p>
          <p className="section-subtitle">Severability</p>
          <p className="policy-text">
            If any provision is found unenforceable, remaining provisions remain valid.
          </p>
          <p className="section-subtitle">No Waiver</p>
          <p className="policy-text">
            Failure to enforce any provision does not constitute waiver.
          </p>
        </TermsSection>

        {/* 16. Copyright Infringement */}
        <TermsSection number="16" title="Notices &amp; Copyright Infringement Procedure">
          <p className="policy-text">
            If you believe that content on the Services infringes your copyright, you must send
            a written notice including:
          </p>
          <PolicyList items={[
            "Identification of the copyrighted work",
            "Identification of the infringing material",
            "Your contact information",
            "A statement of good faith belief",
            "A statement under penalty of perjury",
          ]} />
          <p className="policy-text">
            Non-conforming notices may not receive a response.
          </p>
        </TermsSection>

        {/* 17. Revision / Termination */}
        <TermsSection number="17" title="Revision or Termination of Services">
          <p className="policy-text">
            CodeWingX reserves the right to modify or discontinue Services at any time without
            notice. We may refuse or restrict access to any user at our sole discretion.
          </p>
        </TermsSection>

        {/* 18. Governing Law */}
        <TermsSection number="18" title="Governing Law &amp; Jurisdiction">
          <p className="policy-text">
            These Terms shall be governed by the laws of <strong>India</strong>. All disputes
            shall be subject to the exclusive jurisdiction of courts located in{" "}
            <strong>Uttar Pradesh, India</strong>.
          </p>
        </TermsSection>

        {/* 19. Entire Agreement */}
        <TermsSection number="19" title="Entire Agreement">
          <p className="policy-text">
            These Terms constitute the entire agreement between you and CodeWingX Technologies
            regarding use of the Services.
          </p>
        </TermsSection>

        {/* 20. Contact */}
        <TermsSection number="20" title="Contact Information">
          <p className="policy-text" style={{ marginBottom: "1.8rem" }}>
            For questions regarding these Terms of Service, please contact:
          </p>
          <div className="contact-block">
            <p className="contact-name">CodeWingX Technologies</p>
            <div className="contact-line">
              <span className="label">Email</span>
              <a href="mailto:support@codewingx.com">support@codewingx.com</a>
            </div>
            <div className="contact-line">
              <span className="label">Website</span>
              <a href="https://www.codewingx.com" target="_blank" rel="noreferrer">
                www.codewingx.com
              </a>
            </div>
          </div>
        </TermsSection>

      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="site-footer">
        <span className="footer-copy">© 2026 CodeWingX Technologies — All rights reserved</span>
        <a
          href="https://www.codewingx.com"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
        >
          www.codewingx.com
        </a>
      </footer>
    </>
  );
}