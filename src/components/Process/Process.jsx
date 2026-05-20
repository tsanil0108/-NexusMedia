import React from 'react';
import { Link } from 'react-router-dom';
import './Process.css';

const steps = [
  { num: '01', icon: '🔍', title: 'Discovery',    tag: 'Week 1',    desc: 'Deep dive into your brand, goals, audience landscape, and competitive environment. We ask the questions other agencies skip.' },
  { num: '02', icon: '🗺️', title: 'Strategy',     tag: 'Week 2',    desc: 'Craft a tailored roadmap aligned with your objectives — channel mix, messaging framework, budget allocation, and success metrics.' },
  { num: '03', icon: '⚡', title: 'Execution',    tag: 'Week 3–4',  desc: 'Launch campaigns with precision across all relevant channels. Creative, copy, targeting — all handled by our in-house team.' },
  { num: '04', icon: '📈', title: 'Optimization', tag: 'Ongoing',   desc: 'Continuous refinement based on real-time data insights. We test, learn, and improve week over week to maximize results.' },
  { num: '05', icon: '📋', title: 'Reporting',    tag: 'Monthly',   desc: 'Transparent reporting with clear ROI metrics, insights, and next-step recommendations. No jargon — just clarity.' },
];

const whys = [
  { icon: '🔒', title: 'Full Transparency',  desc: 'You always know what we\'re working on, why, and what results it\'s driving. No black boxes.' },
  { icon: '📐', title: 'Tailored, Not Template', desc: 'Every strategy is built from scratch for your brand. We don\'t copy-paste campaigns.' },
  { icon: '⚡', title: 'Fast Time to Value', desc: 'From kick-off to live campaign in under 4 weeks. Speed without sacrificing quality.' },
];

export default function Process() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="process__hero">
        <span className="tag">Our Process</span>
        <h1 className="section-title">How We Work</h1>
        <p className="section-desc">
          A simple, proven 5-step process that gives you full clarity before, during, and after every campaign. No surprises — just results.
        </p>
      </section>

      {/* STEPS */}
      <section className="process__steps-section">
        <div className="container">
          <span className="tag">5 Steps</span>
          <h2 className="section-title">From Brief to Results</h2>
          <div className="process__steps">
            {steps.map((s, i) => (
              <div className="process__step" key={i}>
                <span className="step__num">{s.num}</span>
                <div className="step__content">
                  <h3>{s.icon} {s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <span className="step__tag">{s.tag}</span>
                <span className="step__arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="process__why">
        <div className="container">
          <span className="tag">Why It Works</span>
          <h2 className="section-title">Built for Clarity & Speed</h2>
          <div className="process__why-grid">
            {whys.map((w, i) => (
              <div className="process__why-card" key={i}>
                <div style={{ fontSize: 24, marginBottom: 16 }}>{w.icon}</div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="process__cta">
        <div className="container">
          <p>"Ready to start your brand journey?"</p>
          <Link to="/contact" className="btn-primary">Let's Talk →</Link>
        </div>
      </section>

    </div>
  );
}