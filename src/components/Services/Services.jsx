import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
  { icon: '📡', name: 'Programmatic Advertising', desc: 'Precision-targeted ads across premium inventory at scale. Data-driven decisions, maximum ROI.' },
  { icon: '🤝', name: 'Influencer Marketing',     desc: 'Creator ecosystems built for authentic brand storytelling and real audience connection.' },
  { icon: '🎬', name: 'Content Production',        desc: 'Scroll-stopping visuals, reels, and brand narratives that convert and inspire.' },
  { icon: '📊', name: 'Performance Marketing',     desc: 'Data-driven paid campaigns across Google, Meta, and more that generate real ROI.' },
  { icon: '📱', name: 'Social Media Management',   desc: 'Daily strategy, content calendars, community building, and engagement — handled.' },
  { icon: '🚀', name: 'Brand Activation',           desc: 'On-ground and experiential campaigns that create lasting emotional brand impact.' },
  { icon: '💻', name: 'Tech & Web Development',    desc: 'High-performance websites, landing pages, and e-commerce built to convert.' },
  { icon: '🧠', name: 'Strategy & Consulting',     desc: 'Deep market insight and competitive intelligence to shape your brand roadmap.' },
];

export default function Services() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="services__hero">
        <div className="container">
          <div className="services__hero-grid">
            <div>
              <span className="tag">What We Do</span>
              <h1 className="section-title">End-to-End<br />Marketing<br /><em style={{ color: 'var(--accent)', fontStyle: 'normal' }}>Capabilities.</em></h1>
            </div>
            <div className="services__hero-right">
              <p className="section-desc">
                From strategy to execution, we offer a full suite of integrated marketing services — all under one roof. No juggling multiple agencies. One team. Complete accountability.
              </p>
              <Link to="/contact" className="btn-primary">Discuss Your Needs →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="services__grid">
        <div className="container">
          <span className="tag">08 Services</span>
          <h2 className="section-title">Everything Your Brand Needs</h2>
          <div className="services__list">
            {services.map((s, i) => (
              <div className="service__card" key={i}>
                <span className="service__num">0{i + 1}</span>
                <span className="service__icon">{s.icon}</span>
                <h3 className="service__name">{s.name}</h3>
                <p className="service__desc">{s.desc}</p>
                <span className="service__arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services__cta">
        <div className="container">
          <div className="services__cta-box">
            <span className="tag">Get Started</span>
            <h2 className="section-title">Not sure which service fits?</h2>
            <p className="section-desc">Tell us your goals and we'll recommend the right mix of services for your brand.</p>
            <Link to="/contact" className="btn-primary">Talk to Our Team →</Link>
          </div>
        </div>
      </section>

    </div>
  );
}