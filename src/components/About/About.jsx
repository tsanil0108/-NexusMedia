import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const heroImages = [
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80',
];

const team = [
  { name: 'Arjun Mehta',  role: 'Founder & CEO',          init: 'AM', color: '#7f77dd' },
  { name: 'Priya Nair',   role: 'Head of Strategy',        init: 'PN', color: '#ef9f27' },
  { name: 'Rohan Desai',  role: 'Creative Director',       init: 'RD', color: '#d85a30' },
  { name: 'Simran Kaur',  role: 'Performance Lead',        init: 'SK', color: '#1d9e75' },
  { name: 'Kabir Shah',   role: 'Influencer Partnerships', init: 'KS', color: '#d4537e' },
  { name: 'Ananya Roy',   role: 'Content Studio Head',     init: 'AR', color: '#185fa5' },
];

export default function About() {
  return (
    <div className="page">

      {/* HERO SLIDESHOW */}
      <section className="about__hero">
        {heroImages.map((img, i) => (
          <div key={i} className="about__slide"
            style={{ backgroundImage: `url(${img})`, animationDelay: `${i * 5}s` }} />
        ))}
        <div className="about__overlay" />
        <div className="container about__hero-content">
          <div className="about__hero-grid">
            <div>
              <span className="tag about__tag-light">Who We Are</span>
              <h1 className="about__hero-title">
                Not Just an Agency.<br />
                Your <span className="accent">Growth Partner.</span>
              </h1>
            </div>
            <div>
              <p className="about__hero-desc">
                Influgrow Media was built on one simple belief — brands deserve more than vanity metrics. That's why we've brought together a team of strategists, creators, and analysts focused on what truly matters: real, measurable growth.
              </p>
              <p className="about__hero-desc" style={{ marginTop: 16 }}>
                What started as a small setup in Mumbai has grown into a 20-member full-service agency driven by creativity, performance, and transparency. Our journey has always been about staying agile, staying authentic, and consistently delivering results that matter.
              </p>
              <div className="about__hero-btns">
                <Link to="/contact"  className="btn-primary">Let's Talk →</Link>
                <Link to="/services" className="btn-outline about__btn-light">What We Do</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="about__team">
        <div className="container">
          <span className="tag">The People</span>
          <h2 className="section-title">Meet the Team</h2>
          <div className="team__grid">
            {team.map((t, i) => (
              <div className="team__card" key={i}>
                <div className="team__avatar"
                  style={{ background: t.color + '1a', borderColor: t.color + '40', color: t.color }}>
                  {t.init}
                </div>
                <div className="team__name">{t.name}</div>
                <div className="team__role">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about__cta">
        <div className="container">
          <div className="about__cta-inner">
            <span className="tag">Work With Us</span>
            <h2 className="section-title">Ready to grow your brand?</h2>
            <p className="section-desc">Let's talk about your goals and build something extraordinary together.</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 32, flexWrap: 'wrap' }}>
              <Link to="/contact"  className="btn-primary">Start a Project →</Link>
              <Link to="/services" className="btn-outline">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}