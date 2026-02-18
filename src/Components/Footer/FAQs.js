/**
 * FAQs.js — CodeWingX FAQ Page
 * ─────────────────────────────────────────────────────────────
 * Import this component into your App.js or router.
 * Requires:  ./FAQs.css  (must be in the same folder)
 *
 * FOLDER STRUCTURE
 * ─────────────────
 * src/
 * ├── pages/
 * │   ├── FAQs.js        ← this file
 * │   └── FAQs.css       ← companion stylesheet
 * └── App.js
 *
 * SETUP
 * ──────
 * npm create react-app my-app
 * cd my-app
 * Copy FAQs.js + FAQs.css into src/pages/
 * In App.js:
 *   import FAQs from './pages/FAQs';
 *   export default function App() { return <FAQs />; }
 * npm start
 */

import { useState, useRef, useEffect } from 'react';
import './FAQs.css';

/* ─────────────────────────────────────────────────────────────
   FAQ DATA
   Each category has: id, label, icon, accentColor, items[]
   To modify questions → edit this array only.
───────────────────────────────────────────────────────────── */
const FAQ_DATA = [
  {
    id: 'general',
    label: 'General & Company',
    icon: '🏢',
    accentColor: '#3b82f6',
    items: [
      {
        q: 'What services do you offer?',
        a: 'We provide a range of IT services including custom software development, SaaS solutions, UI/UX design, cloud consulting, and API integration — all delivered by a team of seasoned engineers and designers.',
      },
      {
        q: 'What industries do you serve?',
        a: 'We serve diverse industries including manufacturing, healthcare, finance, and retail — bringing deep domain-specific expertise to every engagement.',
      },
      {
        q: 'Do you offer custom software development?',
        a: 'Yes. We specialise in building bespoke software, mobile apps, and web applications tailored to your specific business needs, workflows, and growth targets.',
      },
      {
        q: 'What is your development process?',
        a: 'Our end-to-end process covers discovery & scoping, UI/UX design, agile sprint-based development, rigorous QA testing, and deployment — with full transparency at every stage.',
      },
    ],
  },
  {
    id: 'support',
    label: 'Product & Technical Support',
    icon: '🛠️',
    accentColor: '#6366f1',
    items: [
      {
        q: 'What technical support do you provide?',
        a: 'We offer 24/7 technical support including troubleshooting, API support, and maintenance — reachable via email, live chat, and phone so your operations never stall.',
      },
      {
        q: 'How often is the software updated?',
        a: 'We ship regular releases to improve performance, introduce new features, and address security patches — communicated through our changelog and in-app notifications.',
      },
      {
        q: 'Does your software integrate with other tools?',
        a: 'Yes. Our API-first architecture enables seamless integration with major third-party tools and enterprise systems, from ERPs and payment gateways to analytics platforms.',
      },
      {
        q: 'How do I troubleshoot a common error?',
        a: 'Start with our comprehensive documentation portal. If you need hands-on help, our in-app chat support connects you with a technical specialist in minutes.',
      },
    ],
  },
  {
    id: 'security',
    label: 'Security & Data Privacy',
    icon: '🔐',
    accentColor: '#10b981',
    items: [
      {
        q: 'How do you ensure data security?',
        a: 'We implement AES-256 encryption, OWASP secure coding practices, regular third-party security audits, penetration testing, and full GDPR / ISO 27001 compliance.',
      },
      {
        q: 'Where is my data stored?',
        a: 'Your data resides in secure, geo-redundant cloud environments on AWS or Azure with strict role-based access controls, VPC isolation, and comprehensive audit logging.',
      },
      {
        q: 'Are you GDPR compliant?',
        a: 'Absolutely. Our systems are fully GDPR-compliant — including data subject rights management, breach notification processes, and a published Data Processing Agreement (DPA).',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Licensing',
    icon: '💳',
    accentColor: '#f59e0b',
    items: [
      {
        q: 'What are your pricing models?',
        a: 'We offer flexible pricing: subscription-based SaaS plans for ongoing products, per-user seat licensing for team tools, and project-based fixed pricing for custom builds.',
      },
      {
        q: 'Do you offer a free trial or demo?',
        a: 'Yes — enjoy a full-featured 14-day free trial with no credit card required, plus personalised product demos led by a solutions engineer.',
      },
      {
        q: 'What is your cancellation policy?',
        a: 'Cancel anytime, no questions asked. Your access continues through the end of the current billing cycle, and we will export all your data on request.',
      },
    ],
  },
  {
    id: 'dev',
    label: 'Data / API & Development Services',
    icon: '⚙️',
    accentColor: '#8b5cf6',
    items: [
      {
        q: 'What programming languages and frameworks do you use?',
        a: 'Our core stack includes Python, Java, React, Node.js, and cloud-native technologies (Kubernetes, Terraform, serverless) — selected to match your scalability and performance goals.',
      },
      {
        q: 'Can you handle legacy software modernisation?',
        a: 'Yes. We assess, refactor, and re-architect legacy systems — replacing technical debt with modern, scalable, cloud-ready solutions while preserving business continuity throughout the migration.',
      },
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   PARTICLES CONFIG
   Purely decorative animated dots in the background.
───────────────────────────────────────────────────────────── */
const PARTICLES = [
  { top: '8%',  left: '12%', size: 3,   delay: '0s',   duration: '6s'   },
  { top: '18%', left: '82%', size: 2,   delay: '1s',   duration: '8s'   },
  { top: '42%', left: '5%',  size: 2,   delay: '2s',   duration: '7s'   },
  { top: '55%', left: '91%', size: 3,   delay: '0.5s', duration: '9s'   },
  { top: '72%', left: '25%', size: 2,   delay: '1.5s', duration: '6.5s' },
  { top: '85%', left: '70%', size: 2,   delay: '3s',   duration: '7.5s' },
  { top: '30%', left: '50%', size: 1.5, delay: '2.5s', duration: '8.5s' },
  { top: '65%', left: '58%', size: 2,   delay: '4s',   duration: '6s'   },
];

/* ─────────────────────────────────────────────────────────────
   TOTAL QUESTIONS COUNT (computed from data)
───────────────────────────────────────────────────────────── */
const TOTAL_QUESTIONS = FAQ_DATA.reduce((sum, cat) => sum + cat.items.length, 0);

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: ToggleIcon
   Shows plus (closed) or minus (open) inside the accordion.
   The vertical bar uses CSS scale transform to animate away.
───────────────────────────────────────────────────────────── */
function ToggleIcon({ isOpen, accentColor }) {
  const barColor = isOpen ? accentColor : '#94a3b8';

  return (
    <span
      className={`faq-item__icon${isOpen ? ' faq-item__icon--open' : ''}`}
      aria-hidden="true"
      style={{
        borderColor: isOpen ? `${accentColor}88` : undefined,
        background:  isOpen ? `${accentColor}22` : undefined,
      }}
    >
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        {/* Horizontal bar — always visible */}
        <rect
          className="faq-item__icon-bar-h"
          x="2" y="6" width="9" height="1.4" rx="0.7"
          fill={barColor}
        />
        {/* Vertical bar — scaleY(0) when open, handled by CSS */}
        <rect
          className="faq-item__icon-bar-v"
          x="6" y="2" width="1.4" height="9" rx="0.7"
          fill={barColor}
          style={{
            transform: isOpen ? 'scaleY(0)' : 'scaleY(1)',
          }}
        />
      </svg>
    </span>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: FAQItem
   Single accordion row.

   ACCORDION LOGIC:
   ─────────────────
   1. `isOpen` prop (boolean) is controlled by the parent.
   2. A `ref` on the inner answer <div> lets us read its
      natural `scrollHeight` (full content height).
   3. We store `height` in local state:
        • isOpen → height = bodyRef.current.scrollHeight
        • closed → height = 0
   4. The wrapper div has `overflow: hidden` and CSS
      `transition: height 0.38s` via the .faq-item__body class.
   5. When the user clicks, parent calls setActiveKey() which
      trickles back down as a new `isOpen` value, triggering
      the useEffect and the smooth height animation.
───────────────────────────────────────────────────────────── */
function FAQItem({ item, itemId, answerId, isOpen, onToggle, accentColor }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  /* Recalculate height when open state changes */
  useEffect(() => {
    if (!bodyRef.current) return;
    setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
  }, [isOpen]);

  /* Recalculate on window resize (in case text reflows) */
  useEffect(() => {
    const onResize = () => {
      if (isOpen && bodyRef.current) {
        setHeight(bodyRef.current.scrollHeight);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isOpen]);

  return (
    <div
      className={`faq-item${isOpen ? ' faq-item--open' : ''}`}
      style={{
        borderColor: isOpen ? `${accentColor}44` : undefined,
        boxShadow:   isOpen ? `0 0 28px ${accentColor}18` : undefined,
      }}
    >
      {/* ── Question Button ── */}
      <button
        id={itemId}
        className="faq-item__btn"
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
      >
        <span className="faq-item__question">
          {item.q}
        </span>
        <ToggleIcon isOpen={isOpen} accentColor={accentColor} />
      </button>

      {/* ── Animated Answer Panel ── */}
      <div
        id={answerId}
        className="faq-item__body"
        role="region"
        aria-labelledby={itemId}
        style={{ height }}
      >
        <div ref={bodyRef}>
          <p className="faq-item__answer">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: CategoryBlock
   Renders one glassmorphism card containing a group of FAQItems.
───────────────────────────────────────────────────────────── */
function CategoryBlock({ category, activeKey, setActiveKey }) {
  const makeKey = (qi) => `${category.id}-${qi}`;

  return (
    <div className="faq-category">
      {/* Ambient glow — colour injected via inline style only for the dynamic colour */}
      <div
        className="faq-category__glow"
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, ${category.accentColor}18, transparent 70%)`,
        }}
      />

      {/* Category Header */}
      <div className="faq-category__header">
        <span className="faq-category__icon" aria-hidden="true">
          {category.icon}
        </span>
        <h2 className="faq-category__title">{category.label}</h2>
        <span
          className="faq-category__pill"
          style={{
            background:   `${category.accentColor}22`,
            border:       `1px solid ${category.accentColor}44`,
            color:         category.accentColor,
          }}
        >
          {category.items.length} Q
        </span>
      </div>

      {/* FAQ Items */}
      <div className="faq-items">
        {category.items.map((item, qi) => {
          const key      = makeKey(qi);
          const itemId   = `faq-btn-${key}`;
          const answerId = `faq-ans-${key}`;
          return (
            <FAQItem
              key={key}
              item={item}
              itemId={itemId}
              answerId={answerId}
              isOpen={activeKey === key}
              onToggle={() => setActiveKey(activeKey === key ? null : key)}
              accentColor={category.accentColor}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SUB-COMPONENT: FilterBar
   Tabs that filter which category block is shown.
───────────────────────────────────────────────────────────── */
function FilterBar({ categories, selectedCategory, onSelect }) {
  return (
    <nav className="faq-filter" role="tablist" aria-label="FAQ categories">
      {/* "All" button */}
      <button
        role="tab"
        aria-selected={selectedCategory === null}
        className={`faq-filter__btn${selectedCategory === null ? ' faq-filter__btn--active' : ''}`}
        onClick={() => onSelect(null)}
      >
        All Categories
      </button>

      {/* One tab per category */}
      {categories.map((cat) => (
        <button
          key={cat.id}
          role="tab"
          aria-selected={selectedCategory === cat.id}
          className={`faq-filter__btn${selectedCategory === cat.id ? ' faq-filter__btn--active' : ''}`}
          onClick={() => onSelect(cat.id)}
        >
          {cat.icon} {cat.label}
        </button>
      ))}
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT: FAQs (default export)
───────────────────────────────────────────────────────────── */
export default function FAQs() {
  /**
   * activeKey — string | null
   *   Tracks the currently open FAQ item across ALL categories.
   *   Format: "{categoryId}-{questionIndex}"  e.g. "general-0"
   *   null = all items closed.
   *
   *   Passing this single value through every FAQItem ensures only
   *   ONE item can be open at a time (one-at-a-time accordion).
   */
  const [activeKey, setActiveKey] = useState(null);

  /**
   * selectedCategory — string | null
   *   Filters which category blocks are visible.
   *   null = show all.
   */
  const [selectedCategory, setSelectedCategory] = useState(null);

  /* Close all open items when the user switches category */
  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    setActiveKey(null);
  };

  /* Derive visible categories */
  const visibleCategories =
    selectedCategory === null
      ? FAQ_DATA
      : FAQ_DATA.filter((cat) => cat.id === selectedCategory);

  return (
    <div className="faq-page">

      {/* ── Background Decorations ─────────────────────────────── */}
      <div className="faq-bg-blob faq-bg-blob--1" aria-hidden="true" />
      <div className="faq-bg-blob faq-bg-blob--2" aria-hidden="true" />
      <div className="faq-bg-blob faq-bg-blob--3" aria-hidden="true" />
      <div className="faq-bg-ring"                aria-hidden="true" />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="faq-particle"
          aria-hidden="true"
          style={{
            top:                p.top,
            left:               p.left,
            width:              p.size,
            height:             p.size,
            animationDuration:  p.duration,
            animationDelay:     p.delay,
          }}
        />
      ))}

      {/* ── Main Content ───────────────────────────────────────── */}
      <main className="faq-main">

        {/* ── HEADER ──────────────────────────────────────────── */}
        <header className="faq-header">
          {/* Brand badge */}
          <div className="faq-badge">
            <span className="faq-badge__dot" />
            <span className="faq-badge__text">CodeWingX Help Center</span>
          </div>

          {/* Main heading */}
          <h1 className="faq-heading">
            <span className="faq-heading__muted">Frequently </span>
            <span className="faq-heading__white">Asked</span>
            <br />
            <span className="faq-heading__gradient">Questions</span>
          </h1>

          {/* Subtext */}
          <p className="faq-subtext">
            Everything you need to know about CodeWingX's services, security,
            pricing, and development. Can't find the answer?{' '}
            <a href="mailto:hello@codewingx.com">Contact our team.</a>
          </p>

          {/* Stats row */}
          <div className="faq-stats">
            {[
              { value: FAQ_DATA.length,  label: 'Categories' },
              { value: TOTAL_QUESTIONS,  label: 'Questions'  },
              { value: '24/7',           label: 'Support'    },
            ].map((stat, i) => (
              <div key={i} className="faq-stat">
                <div className="faq-stat__value">{stat.value}</div>
                <div className="faq-stat__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </header>

        {/* ── FILTER BAR ──────────────────────────────────────── */}
        <FilterBar
          categories={FAQ_DATA}
          selectedCategory={selectedCategory}
          onSelect={handleCategorySelect}
        />

        {/* ── CATEGORY BLOCKS ─────────────────────────────────── */}
        <div className="faq-categories">
          {visibleCategories.map((category) => (
            <CategoryBlock
              key={category.id}
              category={category}
              activeKey={activeKey}
              setActiveKey={setActiveKey}
            />
          ))}
        </div>

        {/* ── BOTTOM CTA ──────────────────────────────────────── */}
        <section className="faq-cta" aria-label="Still have questions?">
          <div className="faq-cta__glow" aria-hidden="true" />

          <p className="faq-cta__eyebrow">Still have questions?</p>
          <h3 className="faq-cta__heading">Can't find what you're looking for?</h3>
          <p className="faq-cta__sub">
            Our support team is available 24/7. Reach out and we'll get back to
            you within one business day.
          </p>

          <div className="faq-cta__btns">
            <a href="mailto:hello@codewingx.com" className="btn-primary">
              Contact Support →
            </a>
            <a href="#docs" className="btn-secondary">
              View Documentation
            </a>
          </div>
        </section>

      </main>
    </div>
  );
}