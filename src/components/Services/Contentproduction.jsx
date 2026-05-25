import React from 'react';
import { Link } from 'react-router-dom';
import './Contentproduction.css';

const stats = [
  { num: '500+', label: 'Videos Produced'     },
  { num: '2M+',  label: 'Views Generated'      },
  { num: '72h',  label: 'Avg. Turnaround'      },
  { num: '100%', label: 'Brand-Approved'       },
];

const formats = [
  { icon: 'ti-movie',         name: 'Brand Films',         desc: 'Cinematic storytelling that communicates your brand essence and purpose.' },
  { icon: 'ti-device-mobile', name: 'Reels & Shorts',      desc: 'Vertical-first content built for Instagram, YouTube, and TikTok virality.' },
  { icon: 'ti-photo',         name: 'Photography',         desc: 'Product, lifestyle, and editorial shoots with studio or on-location setups.' },
  { icon: 'ti-presentation',  name: 'Motion Graphics',     desc: 'Animated explainers, logo reveals, and kinetic typography.' },
  { icon: 'ti-writing',       name: 'Copywriting',         desc: 'Ad copy, scripts, captions, and long-form content that converts.' },
  { icon: 'ti-live-photo',    name: 'Live & Event',        desc: 'Real-time coverage, highlight reels, and event documentation.' },
];

const process = [
  { step: '01', title: 'Concept',    desc: 'Moodboard, script, storyboard — creative direction aligned with brand.' },
  { step: '02', title: 'Pre-Prod',   desc: 'Location, casting, equipment, and scheduling sorted before shoot day.' },
  { step: '03', title: 'Production', desc: 'On-ground shoot or studio session with our in-house crew.' },
  { step: '04', title: 'Post',       desc: 'Editing, colour grading, sound design, and motion graphics.' },
  { step: '05', title: 'Delivery',   desc: 'All formats — social, web, broadcast — delivered on time.' },
];

export default function ContentProduction() {
  return (
    <div className="cp-page">

      <section className="cp-hero">
        <div className="cp-hero__bg" />
        <div className="cp-hero__overlay" />
        <div className="container cp-hero__inner">
          <Link to="/services" className="cp-back"><i className="ti ti-arrow-left" /> Back to Services</Link>
          <span className="cp-eyebrow cp-eyebrow--light">Content Production</span>
          <h1 className="cp-hero__title">
            Stories That<br /><em>Stop the Scroll.</em>
          </h1>
          <p className="cp-hero__desc">
            From concept to final cut — our in-house studio produces brand content that looks premium, performs powerfully, and feels unmistakably yours.
          </p>
          <div className="cp-hero__actions">
            <Link to="/contact" className="btn-primary">Start Creating →</Link>
            <a href="#formats" className="cp-btn-ghost">See Formats ↓</a>
          </div>
        </div>
        <div className="cp-hero__stats">
          {stats.map((s, i) => (
            <div className="cp-hero__stat" key={i}>
              <span className="cp-hero__stat-num">{s.num}</span>
              <span className="cp-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cp-formats" id="formats">
        <div className="container">
          <span className="cp-eyebrow cp-eyebrow--dark">Content Formats</span>
          <h2 className="cp-section-title">What We Produce</h2>
          <div className="cp-formats__grid">
            {formats.map((f, i) => (
              <div className="cp-format-card" key={i}>
                <div className="cp-format-card__icon">
                  <i className={`ti ${f.icon}`} aria-hidden="true" />
                </div>
                <h3 className="cp-format-card__name">{f.name}</h3>
                <p className="cp-format-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-process">
        <div className="cp-process__bg" />
        <div className="cp-process__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="cp-eyebrow cp-eyebrow--light">The Process</span>
          <h2 className="cp-section-title cp-section-title--light">From Brief to Broadcast</h2>
          <div className="cp-process__steps">
            {process.map((p, i) => (
              <div className="cp-process__step" key={i}>
                <span className="cp-process__step-num">{p.step}</span>
                <h4 className="cp-process__step-title">{p.title}</h4>
                <p className="cp-process__step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-cta">
        <div className="container cp-cta__inner">
          <span className="cp-eyebrow cp-eyebrow--dark">Let's Create</span>
          <h2 className="cp-cta__title">Ready to tell your story?</h2>
          <p className="cp-cta__desc">Share your brief and we'll send a creative proposal within 48 hours.</p>
          <Link to="/contact" className="btn-primary">Get a Quote →</Link>
        </div>
      </section>

    </div>
  );
}