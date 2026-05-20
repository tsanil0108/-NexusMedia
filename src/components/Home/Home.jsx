import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const tickerItems = [
  'Digital Marketing','✦','Influencer Collab','✦','Content Studio','✦',
  'Brand Activation','✦','Programmatic Ads','✦','Performance Media','✦',
  'Social Strategy','✦','Creative Production','✦',
];

const strips = [
  { icon: '🎯', title: 'Strategy First',  desc: 'Deep audience research before any creative work begins. We understand your brand DNA.' },
  { icon: '📊', title: 'Data + Creative', desc: 'Analytics meets storytelling for measurable outcomes. Numbers inspire great ideas.' },
  { icon: '🔄', title: 'End-to-End',      desc: 'Ideation to reporting — everything under one roof. One team, full accountability.' },
];

const stats = [
  { num: '50',  suffix: '+',   label: 'Brand Partners'      },
  { num: '3',   suffix: 'Cr+', label: 'Audience Reached'    },
  { num: '120', suffix: '+',   label: 'Campaigns Delivered' },
  { num: '98',  suffix: '%',   label: 'Client Retention'    },
];

const services = [
  { icon: '📡', name: 'Programmatic Ads'   },
  { icon: '🤝', name: 'Influencer Marketing' },
  { icon: '🎬', name: 'Content Production' },
  { icon: '📊', name: 'Performance Media'  },
  { icon: '📱', name: 'Social Media'       },
  { icon: '🚀', name: 'Brand Activation'   },
];

export default function Home() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="page">

      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__grid" />

        <div className="hero__ticker">
          <div className="hero__ticker-track">
            {doubled.map((t, i) =>
              t === '✦'
                ? <span className="hero__ticker-item" key={i}><span className="hero__ticker-sep">✦</span></span>
                : <span className="hero__ticker-item" key={i}>{t}</span>
            )}
          </div>
        </div>

        <div className="hero__inner container">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-line" />
            <span className="hero__eyebrow-text">Integrated Media & Marketing · Mumbai</span>
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">Build Brands</span>
            <span className="hero__title-line">That <span className="accent">Actually</span></span>
            <span className="hero__title-line">Matter.</span>
          </h1>

          <div className="hero__bottom">
            <p className="hero__desc">
              We combine strategic thinking with creative execution — delivering campaigns that drive engagement, build brand recall, and generate measurable results.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn-primary">Start a Project →</Link>
              <Link to="/about"   className="btn-outline">Our Story</Link>
            </div>
          </div>
        </div>

        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* STRIP */}
      <div className="home__strip">
        <div className="container">
          <div className="home__strip-grid">
            {strips.map((s, i) => (
              <div className="home__strip-item" key={i}>
                <div className="home__strip-icon">{s.icon}</div>
                <h3 className="home__strip-title">{s.title}</h3>
                <p className="home__strip-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="home__stats">
        <div className="container">
          <div className="home__stats-grid">
            {stats.map((s, i) => (
              <div className="home__stat" key={i}>
                <div className="home__stat-num">{s.num}<span>{s.suffix}</span></div>
                <div className="home__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="home__services">
        <div className="container">
          <div className="home__services-head">
            <div>
              <span className="tag">What We Do</span>
              <h2 className="section-title">Full-Suite Marketing<br />Under One Roof</h2>
            </div>
            <Link to="/services" className="btn-outline">All Services →</Link>
          </div>
          <div className="home__services-grid">
            {services.map((s, i) => (
              <div className="home__service-pill" key={i}>
                <span>{s.icon}</span>
                <span>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home__cta">
        <div className="container">
          <div className="home__cta-inner">
            <span className="tag">Ready to grow?</span>
            <h2 className="section-title">Let's build something great together</h2>
            <p className="section-desc">Tell us about your brand. We'll get back to you within 24 hours.</p>
            <div className="home__cta-actions">
              <Link to="/contact"  className="btn-primary">Get in Touch →</Link>
              <Link to="/services" className="btn-outline">See Our Services</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}