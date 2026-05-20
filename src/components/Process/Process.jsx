import React from 'react';
import { Link } from 'react-router-dom';
import './Process.css';

const heroImages = [
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80',
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
];

const steps = [
  {
    num: '01', icon: 'ti-search', title: 'Discovery', tag: 'Week 1',
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=75',
    desc: 'Deep dive into your brand, goals, audience landscape, and competitive environment. We ask the questions other agencies skip.',
  },
  {
    num: '02', icon: 'ti-map', title: 'Strategy', tag: 'Week 2',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=75',
    desc: 'Craft a tailored roadmap aligned with your objectives — channel mix, messaging framework, budget allocation, and success metrics.',
  },
  {
    num: '03', icon: 'ti-rocket', title: 'Execution', tag: 'Week 3–4',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=75',
    desc: 'Launch campaigns with precision across all relevant channels. Creative, copy, targeting — all handled by our in-house team.',
  },
  {
    num: '04', icon: 'ti-chart-bar', title: 'Optimization', tag: 'Ongoing',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=75',
    desc: 'Continuous refinement based on real-time data insights. We test, learn, and improve week over week to maximize results.',
  },

];

const whys = [
  {
    icon: 'ti-lock', colorClass: 'wi0',
    img: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=75',
    title: 'Full Transparency',
    desc: "You always know what we're working on, why, and what results it's driving. No black boxes.",
  },
  {
    icon: 'ti-adjustments', colorClass: 'wi1',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=75',
    title: 'Tailored, Not Template',
    desc: "Every strategy is built from scratch for your brand. We don't copy-paste campaigns.",
  },
  {
    icon: 'ti-bolt', colorClass: 'wi2',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=75',
    title: 'Fast Time to Value',
    desc: 'From kick-off to live campaign in under 4 weeks. Speed without sacrificing quality.',
  },
];

export default function Process() {
  return (
    <div className="page">

      {/* HERO SLIDESHOW */}
      <section className="process__hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="process__slide"
            style={{ backgroundImage: `url(${img})`, animationDelay: `${i * 5}s` }}
          />
        ))}
        <div className="process__overlay" />
        <div className="container process__hero-content">
          <span className="p-eyebrow p-eyebrow--light">Our Process</span>
          <h1 className="process__hero-title">
            How We <em>Work</em>
          </h1>
          <p className="process__hero-desc">
            A simple, proven 5-step process that gives you full clarity before, during, and after every campaign. No surprises — just results.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="process__steps-section">
        <div className="container">
          <span className="p-eyebrow">5 Steps</span>
          <h2 className="process__sec-title">From Brief to <em>Results</em></h2>
          <div className="process__steps">
            {steps.map((s, i) => (
              <div className="process__step" key={i}>
                <div className="process__step-img-wrap">
                  <img src={s.img} alt={s.title} className="process__step-img" />
                </div>
                <span className="step__num">{s.num}</span>
                <div className="step__content">
                  <h3>
                    <i className={`ti ${s.icon}`} aria-hidden="true" />
                    {s.title}
                  </h3>
                  <p>{s.desc}</p>
                </div>
                <span className="step__tag">{s.tag}</span>
                <span className="step__arrow">
                  <i className="ti ti-arrow-up-right" aria-hidden="true" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="process__why">
        <div className="container">
          <span className="p-eyebrow">Why It Works</span>
          <h2 className="process__sec-title">Built for Clarity <em>& Speed</em></h2>
          <div className="process__why-grid">
            {whys.map((w, i) => (
              <div className="process__why-card" key={i}>
                <img className="why__card-img" src={w.img} alt={w.title} />
                <div className="why__body">
                  <div className={`why__icon ${w.colorClass}`}>
                    <i className={`ti ${w.icon}`} aria-hidden="true" />
                  </div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
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