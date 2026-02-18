import React from "react";
import "./Privacy.css";

// ── Reusable sub-components ────────────────────────────────

const SectionLabel = ({ children }) => (
  <div className="section-label">{children}</div>
);

const PolicySection = ({ title, children }) => (
  <div className="policy-section">
    <h2 className="section-title" dangerouslySetInnerHTML={{ __html: title }} />
    {children}
  </div>
);

const InfoCard = ({ children }) => (
  <div className="info-card">
    <p>{children}</p>
  </div>
);

const PolicyList = ({ items, lettered = false }) => (
  <ul className={`policy-list${lettered ? " lettered" : ""}`}>
    {items.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
);

// ── Main Export ────────────────────────────────────────────

export default function Privacy() {
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
        <span className="header-tag">Privacy Policy</span>
      </header>

      {/* ── Page Content ───────────────────────────────────── */}
      <main className="page-wrap">

        {/* Hero */}
        <div className="hero">
          <SectionLabel>Legal &amp; Compliance Document</SectionLabel>
          <h1 className="hero-title">
            Privacy <em>Policy</em>
          </h1>
          <p className="hero-updated">Updated on February 18, 2026</p>
          <p className="hero-intro">
            At CodeWingX Technologies, we value the trust you place in us when you visit our website
            or use our software solutions, digital platforms, or professional services. We are committed
            to maintaining transparency, integrity, and accountability in the way we collect, use,
            process, and protect personal information.
          </p>
          <div className="divider" />
          <p className="policy-text">
            This CodeWingX Privacy Policy ("Policy") describes how we collect and use your personal
            information when you visit our websites, use our web or mobile applications, enroll in our
            training or internship programs, or engage with our services. In this Policy, "we" and "our"
            refer to CodeWingX Technologies and "you" and "your" refer to any person who uses our
            websites, platforms, applications, or services.
          </p>
        </div>

        {/* 1. What is Personal Information */}
        <PolicySection title="What is Personal Information?">
          <p className="policy-text">
            By personal information, we mean information that can be used to identify, locate, contact,
            or reasonably be linked to an individual, whether used alone or when combined with other
            identifying information.
          </p>
          <InfoCard>
            Personal information does not include{" "}
            <strong>anonymized, aggregated, or publicly available information</strong> lawfully
            obtained from public records.
          </InfoCard>
          <p className="policy-text">
            This Privacy Policy may include service-specific disclosures listing the types of personal
            information CodeWingX collects and the business purpose for collecting such information.
          </p>
        </PolicySection>

        {/* 2. Use of Sites & Services */}
        <PolicySection title="Use of Our Sites &amp; Services">
          <p className="policy-text">
            This website and all tools, dashboards, portals, SaaS platforms, ERP systems, internship
            programs, and consulting services are owned and operated by CodeWingX Technologies.
          </p>
          <p className="policy-text">
            By visiting <strong>www.codewingx.com</strong> (or any associated subdomains) and/or
            licensing and using our products and services, including but not limited to:
          </p>
          <div className="services-grid">
            {[
              ["Platform",       "ERP & SaaS Solutions"],
              ["Development",    "Web & Mobile Applications"],
              ["Education",      "Internship & Industrial Training Programs"],
              ["Services",       "Consulting & Software Development"],
              ["Infrastructure", "Cloud-based Dashboards & Admin Portals"],
            ].map(([label, name]) => (
              <div key={label} className="service-item">
                <span>{label}</span>
                {name}
              </div>
            ))}
          </div>
          <p className="policy-text">
            (collectively referred to as "Services"), you accept the practices described in this Policy.
          </p>
          <p className="policy-text">
            This Policy applies to the use of any CodeWingX websites or services that link directly to
            this Policy, display this Policy, or otherwise indicate that this Policy applies (collectively
            referred to as "Sites and Services").
          </p>
          <InfoCard>
            Preview, Beta, Promotional, Internship, or Pre-release versions of software or services may
            be governed by <strong>additional contractual terms</strong>.
          </InfoCard>
          <p className="policy-text">
            By accessing or using CodeWingX Sites and Services covered by this Policy, you agree to this
            Privacy Policy. If you do not agree, you must not access or use our Sites and Services.
          </p>
        </PolicySection>

        {/* 3. Notice of Collection */}
        <PolicySection title="Notice of Collection">
          <p className="policy-text">
            We collect personal information actively and passively and may also obtain information from
            authorized third-party sources. When using our Sites and Services:
          </p>
          <PolicyList items={[
            "You may provide personal information when registering, subscribing, applying for internship programs, requesting support, or making payments.",
            "Our systems may passively collect technical information to ensure proper functioning and security.",
            "We may receive information from publicly available business records or authorized third-party service providers.",
          ]} />
          <p className="policy-text">
            This information is necessary to ensure our platforms operate securely, efficiently, and in
            compliance with applicable laws.
          </p>
        </PolicySection>

        {/* 4. Business Purpose */}
        <PolicySection title="Collecting for Business Purpose">
          <p className="policy-text">
            We collect personal information and use it within our Sites and Services for legitimate
            business purposes. Examples include:
          </p>
          <PolicyList items={[
            "Account creation and authentication",
            "Service delivery and platform access",
            "Internship and training program management",
            "Customer support",
            "Billing and payment processing",
            "Internal analytics and performance optimization",
          ]} />
          <p className="policy-text">
            We may anonymize or aggregate certain information for research, analytics, product
            improvement, or operational efficiency.
          </p>
        </PolicySection>

        {/* 5. Commercial Purpose */}
        <PolicySection title="Collecting for Commercial Purpose">
          <p className="policy-text">
            CodeWingX may use personal information for commercial purposes such as:
          </p>
          <PolicyList items={[
            "Marketing communications",
            "Service promotions",
            "Business analytics",
            "Customer engagement initiatives",
          ]} />
          <InfoCard>
            <strong>We do not sell personal information to third parties.</strong> If we engage in
            data-driven partnerships in the future, we will provide appropriate opt-out mechanisms in
            accordance with applicable laws.
          </InfoCard>
        </PolicySection>

        {/* 6. Required Info */}
        <PolicySection title="Personal Information Required to Use Services">
          <p className="policy-text">
            To register and use CodeWingX Services, you may be required to provide certain personal
            information. Submission of required personal information is necessary to:
          </p>
          <PolicyList items={[
            "Access licensed platforms",
            "Participate in internship or training programs",
            "Process payments",
            "Receive certifications",
            "Use client dashboards",
          ]} />
          <p className="policy-text">
            Without such information, we may not be able to provide full access to our Services.
          </p>
        </PolicySection>

        {/* 7. User-Controlled Access */}
        <PolicySection title="User-Controlled Access to Personal Information and Data">
          <p className="policy-text">
            Certain CodeWingX platforms allow clients or users to upload, manage, and control their own
            data. For enterprise or SaaS clients:
          </p>
          <PolicyList items={[
            "You control access permissions for your users.",
            "CodeWingX will not access your business data unless authorized by you.",
            "We will not allow third-party access to your data unless required by law or necessary for system security and compliance.",
          ]} />
        </PolicySection>

        {/* 8. CWX Access */}
        <PolicySection title="CodeWingX Access to Personal Information and Data">
          <p className="policy-text">
            We may access or disclose personal information only when necessary to:
          </p>
          <PolicyList lettered items={[
            "Comply with legal obligations",
            "Protect the rights, property, or security of CodeWingX or our customers",
            "Investigate fraud, security incidents, or policy violations",
            "Complete corporate transactions such as mergers or acquisitions",
          ]} />
          <p className="policy-text">Any such disclosure will be limited to what is legally required.</p>
        </PolicySection>

        {/* 9. Third Parties */}
        <PolicySection title="What We Share with Third Parties">
          <p className="policy-text">CodeWingX may share personal information with:</p>
          <PolicyList items={[
            "Payment processors",
            "Cloud hosting providers",
            "CRM and communication platforms",
            "Analytics providers",
            "Legal or regulatory authorities",
          ]} />
          <p className="policy-text">
            These service providers are contractually obligated to maintain confidentiality and use the
            information only for authorized purposes.
          </p>
          <InfoCard>
            <strong>We do not sell personal information.</strong>
          </InfoCard>
        </PolicySection>

        {/* 10. Security */}
        <PolicySection title="Security">
          <div className="two-col">
            <div className="col-block">
              <p className="section-subtitle">Our Responsibility</p>
              <p className="policy-text">
                CodeWingX is committed to protecting your information using industry-standard security
                practices, including:
              </p>
              <PolicyList items={[
                "Encryption protocols (SSL/TLS)",
                "Secure server infrastructure",
                "Role-based access controls",
                "Regular security audits",
                "Firewalls and intrusion detection systems",
              ]} />
            </div>
            <div className="col-block">
              <p className="section-subtitle">Your Responsibility</p>
              <p className="policy-text">
                If a username or password is used to protect your account, it is your responsibility to
                maintain confidentiality and safeguard your login credentials.
              </p>
            </div>
          </div>
        </PolicySection>

        {/* 11. Cookies */}
        <PolicySection title="Cookies, Analytics &amp; Advertising Technologies">
          <p className="policy-text">CodeWingX may use cookies and similar technologies to:</p>
          <PolicyList items={[
            "Improve user experience",
            "Analyze website traffic",
            "Customize communications",
            "Enhance platform performance",
          ]} />
          <p className="policy-text">
            We may use third-party analytics services such as Google Analytics to monitor usage trends.
            By continuing to use our Sites and Services, you consent to our use of cookies and similar
            technologies.
          </p>
          <p className="policy-text">
            You may disable cookies through your browser settings; however, certain features may not
            function properly.
          </p>
        </PolicySection>

        {/* 12. Rights */}
        <PolicySection title="Your Rights">
          <p className="section-subtitle">Right to Access</p>
          <p className="policy-text">You may request details regarding:</p>
          <PolicyList items={[
            "Categories of personal information collected",
            "Sources of information",
            "Business purposes of processing",
            "Categories of third parties with whom information is shared",
          ]} />
          <p className="policy-text">Requests may be submitted through our official contact channels.</p>

          <p className="section-subtitle">Right to Request Deletion</p>
          <p className="policy-text">You may request deletion of personal information, subject to:</p>
          <PolicyList items={[
            "Legal retention requirements",
            "Contractual obligations",
            "Security and fraud prevention needs",
            "Regulatory compliance",
          ]} />
          <p className="policy-text">
            Upon verification, we will delete eligible data in accordance with applicable laws.
          </p>

          <p className="section-subtitle">Right to Non-Discrimination</p>
          <p className="policy-text">
            CodeWingX will not discriminate against individuals for exercising their privacy rights.
          </p>
        </PolicySection>

        {/* 13. Data Retention */}
        <PolicySection title="Data Retention">
          <p className="policy-text">We retain personal information only as long as necessary to:</p>
          <PolicyList items={[
            "Provide services",
            "Fulfill contracts",
            "Comply with legal obligations",
            "Resolve disputes",
            "Enforce agreements",
          ]} />
          <p className="policy-text">After the retention period, data is securely deleted or anonymized.</p>
        </PolicySection>

        {/* 14. International Transfers */}
        <PolicySection title="International Data Transfers">
          <p className="policy-text">
            Personal information may be processed or stored in India or other jurisdictions where our
            service providers operate. We implement reasonable safeguards to protect data transferred
            across borders.
          </p>
        </PolicySection>

        {/* 15. Changes */}
        <PolicySection title="Changes to Our Privacy Policy">
          <p className="policy-text">
            CodeWingX may update this Policy to reflect legal, technological, or business changes. The
            revised date will always appear at the beginning of this Policy. Continued use of our
            Services constitutes acceptance of any updated terms.
          </p>
        </PolicySection>

        {/* 16. Contact */}
        <PolicySection title="Contact Us">
          <p className="policy-text" style={{ marginBottom: "1.8rem" }}>
            For questions regarding this Privacy Policy, please contact:
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
            <div className="contact-line">
              <span className="label">Location</span>
              India
            </div>
          </div>
        </PolicySection>

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