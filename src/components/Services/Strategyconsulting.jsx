import React from 'react';
import { Link } from 'react-router-dom';
import './Strategyconsulting.css';

const stats = [
  { num: '50+',  label: 'Brands Advised'     },
  { num: '12+',  label: 'Industries Covered'  },
  { num: '4.9★', label: 'Client Satisfaction' },
  { num: '6Mo',  label: 'Avg. Engagement'     },
];

const offerings = [
  { icon: 'ti-brain',                 name: 'Brand Strategy',        desc: 'Positioning, differentiation, messaging frameworks and brand architecture.' },
  { icon: 'ti-chart-arrows-vertical', name: 'Growth Consulting',     desc: 'Go-to-market strategy, channel selection, and growth roadmap design.' },
  { icon: 'ti-users-group',           name: 'Audience Intelligence', desc: 'Deep customer research, persona development, and segmentation models.' },
  { icon: 'ti-target',                name: 'Competitive Analysis',  desc: 'Market mapping, competitor audits, and whitespace opportunity identification.' },
  { icon: 'ti-report-analytics',      name: 'Marketing Audit',       desc: "Full review of existing marketing activity — what's working and what's not." },
  { icon: 'ti-road',                  name: 'Annual Planning',       desc: 'Campaign calendar, budget allocation, and KPI frameworks for the year ahead.' },
];

const deliverables = [
  'Brand Positioning Document',
  'Audience Persona Deck',
  'Competitive Intelligence Report',
  'Channel Strategy Blueprint',
  'Annual Marketing Calendar',
  'KPI & Measurement Framework',
  'Budget Allocation Model',
  'Quarterly Review Templates',
];

export default function StrategyConsulting() {
  return (
    <div className="sc-page">

      <section className="sc-hero">
        <div className="sc-hero__bg" />
        <div className="sc-hero__overlay" />
        <div className="sc-hero__grid-lines" />
        <div className="container sc-hero__inner">
          <Link to="/services" className="sc-back">
            <i className="ti ti-arrow-left" /> Back to Services
          </Link>
          <span className="sc-eyebrow sc-eyebrow--light">Strategy &amp; Consulting</span>
          <h1 className="sc-hero__title">
            Think First.<br /><em>Win Always.</em>
          </h1>
          <p className="sc-hero__desc">
            Before campaigns come strategies. We help brands build the intellectual
            foundation — deep insights, sharp positioning, and a clear growth roadmap —
            that makes every campaign smarter.
          </p>
          <div className="sc-hero__actions">
            <Link to="/contact" className="btn-primary">Book a Strategy Call →</Link>
            <a href="#offerings" className="sc-btn-ghost">See Offerings ↓</a>
          </div>
        </div>
        <div className="sc-hero__stats">
          {stats.map((s, i) => (
            <div className="sc-hero__stat" key={i}>
              <span className="sc-hero__stat-num">{s.num}</span>
              <span className="sc-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sc-offerings" id="offerings">
        <div className="container">
          <span className="sc-eyebrow sc-eyebrow--dark">What We Offer</span>
          <h2 className="sc-section-title">Strategic Services</h2>
          <div className="sc-offerings__grid">
            {offerings.map((o, i) => (
              <div className="sc-offering-card" key={i}>
                <div className="sc-offering-card__icon">
                  <i className={`ti ${o.icon}`} aria-hidden="true" />
                </div>
                <h3 className="sc-offering-card__name">{o.name}</h3>
                <p className="sc-offering-card__desc">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-deliverables">
        <div className="sc-deliverables__bg" />
        <div className="sc-deliverables__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="sc-eyebrow sc-eyebrow--light">What You Get</span>
          <h2 className="sc-section-title sc-section-title--light">Your Strategy Deliverables</h2>
          <div className="sc-deliverables__grid">
            {deliverables.map((d, i) => (
              <div className="sc-deliverable-item" key={i}>
                <i className="ti ti-circle-check" aria-hidden="true" />
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-cta">
        <div className="container sc-cta__inner">
          <span className="sc-eyebrow sc-eyebrow--dark">Let's Think Together</span>
          <h2 className="sc-cta__title">Strategy is the highest-leverage investment you can make.</h2>
          <p className="sc-cta__desc">
            Let's build yours. Book a complimentary 45-minute discovery session.
          </p>
          <Link to="/contact" className="btn-primary">Book Discovery Call →</Link>
        </div>
      </section>

    </div>
  );
}