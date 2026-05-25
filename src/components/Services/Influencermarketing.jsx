import React from 'react';
import { Link } from 'react-router-dom';
import './Influencermarketing.css';

const stats = [
  { num: '500+', label: 'Creator Network'     },
  { num: '10x',  label: 'Engagement vs Ads'   },
  { num: '80+',  label: 'Brand Campaigns'      },
  { num: '95%',  label: 'Content Approval Rate'},
];

const tiers = [
  { tier: 'Nano', range: '1K – 10K', icon: 'ti-sparkles', desc: 'Hyper-local, ultra-authentic. Perfect for niche targeting and grassroots awareness.' },
  { tier: 'Micro', range: '10K – 100K', icon: 'ti-star', desc: 'High-trust communities with 3–5x better engagement than mega-influencers.' },
  { tier: 'Macro', range: '100K – 1M', icon: 'ti-trophy', desc: 'Mass reach meets credibility. Ideal for product launches and brand recall.' },
  { tier: 'Celebrity', range: '1M+', icon: 'ti-crown', desc: 'Maximum awareness and aspiration. Best for national campaigns and brand prestige.' },
];

const process = [
  { step: '01', title: 'Brief & Goals',    desc: 'Define campaign objectives, target audience, and content format.' },
  { step: '02', title: 'Creator Matching', desc: 'Handpick creators from our vetted network by niche, audience, and brand fit.' },
  { step: '03', title: 'Content Creation', desc: 'Script guidance, brand kit, and approval workflow for on-brand content.' },
  { step: '04', title: 'Amplification',    desc: 'Boost top-performing posts with paid media for maximum reach.' },
  { step: '05', title: 'Reporting',        desc: 'EMV, reach, engagement, and conversion analytics — full transparency.' },
];

export default function InfluencerMarketing() {
  return (
    <div className="im-page">

      {/* HERO */}
      <section className="im-hero">
        <div className="im-hero__bg" />
        <div className="im-hero__overlay" />
        <div className="im-hero__grain" />
        <div className="container im-hero__inner">
          <Link to="/services" className="im-back">
            <i className="ti ti-arrow-left" /> Back to Services
          </Link>
          <span className="im-eyebrow im-eyebrow--light">Influencer Marketing</span>
          <h1 className="im-hero__title">
            Authentic Stories.<br /><em>Real Results.</em>
          </h1>
          <p className="im-hero__desc">
            We connect your brand with the right voices — from nano creators to celebrities — to build genuine trust and measurable impact at every level of the funnel.
          </p>
          <div className="im-hero__actions">
            <Link to="/contact" className="btn-primary">Find Your Creators →</Link>
            <a href="#tiers" className="im-btn-ghost">See Creator Tiers ↓</a>
          </div>
        </div>
        <div className="im-hero__stats">
          {stats.map((s, i) => (
            <div className="im-hero__stat" key={i}>
              <span className="im-hero__stat-num">{s.num}</span>
              <span className="im-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CREATOR TIERS */}
      <section className="im-tiers" id="tiers">
        <div className="container">
          <span className="im-eyebrow im-eyebrow--dark">Creator Tiers</span>
          <h2 className="im-section-title">Right Creator for Every Goal</h2>
          <div className="im-tiers__grid">
            {tiers.map((t, i) => (
              <div className="im-tier-card" key={i}>
                <div className="im-tier-card__icon">
                  <i className={`ti ${t.icon}`} aria-hidden="true" />
                </div>
                <div className="im-tier-card__range">{t.range} followers</div>
                <h3 className="im-tier-card__name">{t.tier}</h3>
                <p className="im-tier-card__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="im-process">
        <div className="im-process__bg" />
        <div className="im-process__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="im-eyebrow im-eyebrow--light">How We Work</span>
          <h2 className="im-section-title im-section-title--light">Campaign Process</h2>
          <div className="im-process__list">
            {process.map((p, i) => (
              <div className="im-process__item" key={i}>
                <div className="im-process__num">{p.step}</div>
                <div className="im-process__body">
                  <h4 className="im-process__title">{p.title}</h4>
                  <p className="im-process__desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="im-cta">
        <div className="container im-cta__inner">
          <span className="im-eyebrow im-eyebrow--dark">Let's Collaborate</span>
          <h2 className="im-cta__title">Your brand deserves<br />the right voice.</h2>
          <p className="im-cta__desc">Tell us your niche and we'll match you with creators who truly resonate.</p>
          <Link to="/contact" className="btn-primary">Start a Collab →</Link>
        </div>
      </section>

    </div>
  );
}