import React from 'react';
import { Link } from 'react-router-dom';
import './Digitalmarketing.css';

const stats = [
  { num: '3x',   label: 'Average ROAS'         },
  { num: '120+', label: 'Campaigns Delivered'   },
  { num: '98%',  label: 'Client Retention'      },
  { num: '3Cr+', label: 'Audience Reached'      },
];

const channels = [
  { icon: 'ti-search',        name: 'SEO & SEM',          desc: 'Rank higher, spend smarter. Organic + paid search dominance.' },
  { icon: 'ti-mail',          name: 'Email Marketing',     desc: 'Drip sequences and newsletters that nurture and convert.' },
  { icon: 'ti-brand-google',  name: 'Google Ads',          desc: 'Search, Display, YouTube — full funnel Google coverage.' },
  { icon: 'ti-device-mobile', name: 'Mobile Marketing',    desc: 'App-first campaigns for India s mobile-first audience.' },
  { icon: 'ti-chart-dots',    name: 'Programmatic',        desc: 'AI-powered buying across premium digital inventory.' },
  { icon: 'ti-affiliate',     name: 'Affiliate & CPA',     desc: 'Pay only for results. Performance-backed growth models.' },
];

const process = [
  { step: '01', title: 'Discovery',   desc: 'Brand audit, competitive analysis, audience mapping.' },
  { step: '02', title: 'Strategy',    desc: 'Channel mix, budget allocation, KPI framework.' },
  { step: '03', title: 'Launch',      desc: 'Creative production, campaign go-live, tracking setup.' },
  { step: '04', title: 'Optimise',    desc: 'Weekly sprints, A/B tests, continuous ROAS improvement.' },
  { step: '05', title: 'Report',      desc: 'Full-transparency dashboards, monthly business reviews.' },
];

export default function DigitalMarketing() {
  return (
    <div className="dm-page">

      {/* ── HERO ── */}
      <section className="dm-hero">
        <div className="dm-hero__bg" />
        <div className="dm-hero__overlay" />
        <div className="dm-hero__noise" />

        <div className="container dm-hero__inner">
          <Link to="/services" className="dm-back">
            <i className="ti ti-arrow-left" /> Back to Services
          </Link>
          <span className="dm-eyebrow">Digital Marketing</span>
          <h1 className="dm-hero__title">
            Data-Driven Growth<br />
            <em>At Scale.</em>
          </h1>
          <p className="dm-hero__desc">
            We architect full-funnel digital marketing ecosystems that attract, engage, and convert your ideal customers — with relentless optimisation at every step.
          </p>
          <div className="dm-hero__actions">
            <Link to="/contact" className="btn-primary">Start a Campaign →</Link>
            <a href="#channels" className="dm-btn-ghost">Explore Channels ↓</a>
          </div>
        </div>

        {/* floating stat cards */}
        <div className="dm-hero__stats">
          {stats.map((s, i) => (
            <div className="dm-hero__stat" key={i}>
              <span className="dm-hero__stat-num">{s.num}</span>
              <span className="dm-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CHANNELS ── */}
      <section className="dm-channels" id="channels">
        <div className="dm-channels__bg" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="dm-eyebrow dm-eyebrow--dark">What's Included</span>
          <h2 className="dm-section-title">Channels We Master</h2>
          <div className="dm-channels__grid">
            {channels.map((c, i) => (
              <div className="dm-channel-card" key={i}>
                <div className="dm-channel-card__icon">
                  <i className={`ti ${c.icon}`} aria-hidden="true" />
                </div>
                <h3 className="dm-channel-card__name">{c.name}</h3>
                <p className="dm-channel-card__desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="dm-process">
        <div className="container">
          <span className="dm-eyebrow dm-eyebrow--dark">How We Work</span>
          <h2 className="dm-section-title">Our 5-Step Process</h2>
          <div className="dm-process__track">
            {process.map((p, i) => (
              <div className="dm-process__step" key={i}>
                <div className="dm-process__step-num">{p.step}</div>
                {i < process.length - 1 && <div className="dm-process__connector" />}
                <div className="dm-process__step-body">
                  <h4 className="dm-process__step-title">{p.title}</h4>
                  <p className="dm-process__step-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="dm-cta">
        <div className="dm-cta__bg" />
        <div className="dm-cta__overlay" />
        <div className="container dm-cta__inner">
          <span className="dm-eyebrow dm-eyebrow--light">Ready?</span>
          <h2 className="dm-cta__title">Let's grow your brand digitally.</h2>
          <p className="dm-cta__desc">Tell us your goals. We'll build the roadmap.</p>
          <Link to="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>

    </div>
  );
}