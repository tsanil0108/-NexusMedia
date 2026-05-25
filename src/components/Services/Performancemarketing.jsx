import React from 'react';
import { Link } from 'react-router-dom';
import './Performancemarketing.css';

const stats = [
  { num: '3.8x', label: 'Avg. ROAS Delivered' },
  { num: '₹50Cr+', label: 'Ad Spend Managed'  },
  { num: '60%',  label: 'CPA Reduction'        },
  { num: '100+', label: 'Campaigns Optimised'  },
];

const platforms = [
  { icon: 'ti-brand-google',    name: 'Google Ads',       desc: 'Search, Shopping, Display, and YouTube campaigns built for conversion.' },
  { icon: 'ti-brand-meta',      name: 'Meta Ads',         desc: 'Facebook & Instagram — advanced retargeting, lookalikes, and catalogues.' },
  { icon: 'ti-brand-youtube',   name: 'YouTube Ads',      desc: 'TrueView, bumper, and connected TV formats for brand and performance.' },
  { icon: 'ti-brand-linkedin',  name: 'LinkedIn Ads',     desc: 'B2B lead gen, account-based marketing, and thought leadership ads.' },
  { icon: 'ti-brand-snapchat',  name: 'Snapchat & TikTok', desc: 'Gen-Z and millennial audience capture with creative-first ad formats.' },
  { icon: 'ti-chart-dots',      name: 'Programmatic DSP', desc: 'Precision inventory buying across the open web at scale.' },
];

const process = [
  { step: '01', title: 'Audit',     desc: 'Account structure review, pixel health, and historical performance analysis.' },
  { step: '02', title: 'Strategy',  desc: 'Funnel mapping, bid strategy, audience segmentation, and creative brief.' },
  { step: '03', title: 'Launch',    desc: 'Campaign build, tracking implementation, and go-live.' },
  { step: '04', title: 'Optimise',  desc: 'Weekly budget pacing, bid adjustments, A/B creative testing.' },
  { step: '05', title: 'Scale',     desc: 'Winning ad replication, audience expansion, new platform testing.' },
];

export default function PerformanceMarketing() {
  return (
    <div className="pm-page">

      <section className="pm-hero">
        <div className="pm-hero__bg" />
        <div className="pm-hero__overlay" />
        <div className="container pm-hero__inner">
          <Link to="/services" className="pm-back"><i className="ti ti-arrow-left" /> Back to Services</Link>
          <span className="pm-eyebrow pm-eyebrow--light">Performance Marketing</span>
          <h1 className="pm-hero__title">
            Every Rupee.<br /><em>Accountable.</em>
          </h1>
          <p className="pm-hero__desc">
            We run paid campaigns across every major platform with a singular focus — measurable ROI. No vanity metrics. Pure performance, backed by data.
          </p>
          <div className="pm-hero__actions">
            <Link to="/contact" className="btn-primary">Audit My Campaigns →</Link>
            <a href="#platforms" className="pm-btn-ghost">See Platforms ↓</a>
          </div>
        </div>
        <div className="pm-hero__stats">
          {stats.map((s, i) => (
            <div className="pm-hero__stat" key={i}>
              <span className="pm-hero__stat-num">{s.num}</span>
              <span className="pm-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pm-platforms" id="platforms">
        <div className="container">
          <span className="pm-eyebrow pm-eyebrow--dark">Where We Run Ads</span>
          <h2 className="pm-section-title">Platforms We Dominate</h2>
          <div className="pm-platforms__grid">
            {platforms.map((p, i) => (
              <div className="pm-platform-card" key={i}>
                <div className="pm-platform-card__icon">
                  <i className={`ti ${p.icon}`} aria-hidden="true" />
                </div>
                <h3 className="pm-platform-card__name">{p.name}</h3>
                <p className="pm-platform-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-process">
        <div className="pm-process__bg" />
        <div className="pm-process__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="pm-eyebrow pm-eyebrow--light">Our Methodology</span>
          <h2 className="pm-section-title pm-section-title--light">How We Deliver Results</h2>
          <div className="pm-process__list">
            {process.map((p, i) => (
              <div className="pm-process__item" key={i}>
                <div className="pm-process__num">{p.step}</div>
                <div className="pm-process__body">
                  <h4 className="pm-process__title">{p.title}</h4>
                  <p className="pm-process__desc">{p.desc}</p>
                </div>
                <div className="pm-process__arrow">
                  {i < process.length - 1 && <i className="ti ti-arrow-right" aria-hidden="true" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pm-cta">
        <div className="container pm-cta__inner">
          <span className="pm-eyebrow pm-eyebrow--dark">Get Started</span>
          <h2 className="pm-cta__title">Stop guessing. Start scaling.</h2>
          <p className="pm-cta__desc">Get a free audit of your current ad accounts and see exactly where you're leaving money on the table.</p>
          <Link to="/contact" className="btn-primary">Free Audit →</Link>
        </div>
      </section>

    </div>
  );
}