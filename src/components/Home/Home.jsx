import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const heroImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
];

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
  { icon: '📡', name: 'Programmatic Ads'    },
  { icon: '🤝', name: 'Influencer Marketing' },
  { icon: '🎬', name: 'Content Production'  },
  { icon: '📊', name: 'Performance Media'   },
  { icon: '📱', name: 'Social Media'        },
  { icon: '🚀', name: 'Brand Activation'    },
];

/* BG image for sections that need a textured backdrop */
const SECTION_BG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=60';
const CTA_BG     = 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1800&q=60';

export default function Home() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="page">

      {/* ─── HERO ─────────────────────────────────── */}
      <section className="hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="hero__slide"
            style={{ backgroundImage: `url(${img})`, animationDelay: `${i * 5}s` }}
          />
        ))}
        <div className="hero__overlay" />

        {/* colour splash vignette */}
        <div className="hero__vignette" />

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

      {/* ─── STRIP ────────────────────────────────── */}
      {/* subtle office texture behind the strip */}
      <div
        className="home__strip"
        style={{ backgroundImage: `url(${SECTION_BG})` }}
      >
        <div className="home__strip-backdrop" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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

      {/* ─── STATS ────────────────────────────────── */}
      <div className="home__stats">
        <div className="container">
          <div className="home__stats-label">
            <span className="tag">By the numbers</span>
          </div>
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

      {/* ─── SERVICES PREVIEW ─────────────────────── */}
      <section className="home__services">
        <div className="home__services-bg" style={{ backgroundImage: `url(${SECTION_BG})` }} />
        <div className="home__services-bg-mask" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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

      {/* ─── CTA ──────────────────────────────────── */}
      <section className="home__cta">
        <div className="container">
          <div
            className="home__cta-inner"
            style={{ backgroundImage: `url(${CTA_BG})` }}
          >
            <div className="home__cta-overlay" />
            <div className="home__cta-content">
              <span className="tag tag--light">Ready to grow?</span>
              <h2 className="section-title home__cta-heading">Let's build something great together</h2>
              <p className="section-desc home__cta-desc">Tell us about your brand. We'll get back to you within 24 hours.</p>
              <div className="home__cta-actions">
                <Link to="/contact"  className="btn-primary">Get in Touch →</Link>
                <Link to="/services" className="btn-ghost">See Our Services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}