import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const team = [
  { name: 'Arjun Mehta',  role: 'Founder & CEO',          init: 'AM', color: '#7f77dd' },
  { name: 'Priya Nair',   role: 'Head of Strategy',        init: 'PN', color: '#ef9f27' },
  { name: 'Rohan Desai',  role: 'Creative Director',       init: 'RD', color: '#d85a30' },
  { name: 'Simran Kaur',  role: 'Performance Lead',        init: 'SK', color: '#1d9e75' },
  { name: 'Kabir Shah',   role: 'Influencer Partnerships', init: 'KS', color: '#d4537e' },
  { name: 'Ananya Roy',   role: 'Content Studio Head',     init: 'AR', color: '#185fa5' },
];

const milestones = [
  { year: '2020', event: 'NexusMedia founded in Mumbai with a 3-person team and a bold vision.' },
  { year: '2021', event: 'Crossed 10 brand partnerships. Launched our influencer vertical.' },
  { year: '2022', event: 'Full-service expansion — content production studio goes live.' },
  { year: '2023', event: '50+ brands, 3Cr+ audience reached. Named top agency in West India.' },
  { year: '2024', event: 'Launched programmatic & tech division. Team grows to 40+.' },
];

export default function About() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="about__hero">
        <div className="container">
          <div className="about__hero-grid">
            <div>
              <span className="tag">Our Story</span>
              <h1 className="section-title">Built by Marketers.<br />Driven by <span className="accent">Results.</span></h1>
            </div>
            <div>
              <p className="section-desc">
                NexusMedia was born out of frustration with agencies that overpromise and underdeliver. We set out to build something different — a team that treats every brand like their own.
              </p>
              <p className="section-desc" style={{ marginTop: 16 }}>
                Based in Mumbai, we've grown from a scrappy 3-person startup to a full-service integrated media agency — without losing the hunger that started it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about__timeline">
        <div className="container">
          <span className="tag">Journey</span>
          <h2 className="section-title">How We Got Here</h2>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className="timeline__item" key={i}>
                <span className="timeline__year">{m.year}</span>
                <div className="timeline__dot" />
                <p className="timeline__event">{m.event}</p>
              </div>
            ))}
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
                <div className="team__avatar" style={{ background: t.color + '1a', borderColor: t.color + '40', color: t.color }}>
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