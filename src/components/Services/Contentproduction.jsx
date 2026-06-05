import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Contentproduction.css';

const stats = [
  { num: 500, suffix: '+', label: 'Videos Produced' },
  { num: 2,   suffix: 'M+', label: 'Views Generated' },
  { num: 72,  suffix: 'h',  label: 'Avg. Turnaround' },
  { num: 100, suffix: '%',  label: 'Brand-Approved'  },
];

const formats = [
  { icon: 'ti-movie',         name: 'Brand Films',     desc: 'Cinematic storytelling that communicates your brand essence and purpose.' },
  { icon: 'ti-device-mobile', name: 'Reels & Shorts',  desc: 'Vertical-first content built for Instagram, YouTube, and TikTok virality.' },
  { icon: 'ti-photo',         name: 'Photography',     desc: 'Product, lifestyle, and editorial shoots with studio or on-location setups.' },
  { icon: 'ti-presentation',  name: 'Motion Graphics', desc: 'Animated explainers, logo reveals, and kinetic typography.' },
  { icon: 'ti-writing',       name: 'Copywriting',     desc: 'Ad copy, scripts, captions, and long-form content that converts.' },
  { icon: 'ti-live-photo',    name: 'Live & Event',    desc: 'Real-time coverage, highlight reels, and event documentation.' },
];

const process = [
  { step: '01', title: 'Concept',    desc: 'Moodboard, script, storyboard — creative direction aligned with brand.' },
  { step: '02', title: 'Pre-Prod',   desc: 'Location, casting, equipment, and scheduling sorted before shoot day.' },
  { step: '03', title: 'Production', desc: 'On-ground shoot or studio session with our in-house crew.' },
  { step: '04', title: 'Post',       desc: 'Editing, colour grading, sound design, and motion graphics.' },
  { step: '05', title: 'Delivery',   desc: 'All formats — social, web, broadcast — delivered on time.' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let v = 0;
      const step = () => { v += Math.ceil(target / 40); if (v >= target) { setCount(target); return; } setCount(v); requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.svc-reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function useProgressBar() {
  useEffect(() => {
    const bar = document.querySelector('.svc-progress-bar');
    if (!bar) return;
    const fn = () => { bar.style.width = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100) + '%'; };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
}
function useFloatCTA() {
  useEffect(() => {
    const btn = document.querySelector('.svc-float-cta');
    if (!btn) return;
    const fn = () => btn.classList.toggle('is-visible', window.scrollY > 400);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
}

export default function ContentProduction() {
  useReveal(); useProgressBar(); useFloatCTA();

  return (
    <div className="cp-page">
      <div className="svc-progress-bar" aria-hidden="true" />
      <Link to="/contact" className="svc-float-cta">
        <i className="ti ti-message-circle" aria-hidden="true" /> Start Creating
      </Link>

      <section className="cp-hero">
        <div className="cp-hero__bg" />
        <div className="cp-hero__overlay" />
        <div className="cp-hero__strip" />
        <div className="container cp-hero__inner">
          <Link to="/services" className="svc-back"><i className="ti ti-arrow-left" /> Back to Services</Link>
          <span className="svc-eyebrow svc-eyebrow--light">Content Production</span>
          <h1 className="cp-hero__title">Stories That<br /><em>Stop the Scroll.</em></h1>
          <p className="cp-hero__desc">From concept to final cut — our in-house studio produces brand content that looks premium, performs powerfully, and feels unmistakably yours.</p>
          <div className="cp-hero__actions">
            <Link to="/contact" className="btn-primary">Start Creating →</Link>
            <a href="#formats" className="svc-btn-ghost">See Formats ↓</a>
          </div>
        </div>
        <div className="cp-hero__stats">
          {stats.map((s, i) => (
            <div className="cp-hero__stat" key={i}>
              <span className="cp-hero__stat-num"><Counter target={s.num} suffix={s.suffix} /></span>
              <span className="cp-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="svc-why">
        <div className="container">
          <div className="svc-why__inner">
            {[{ num: '500+', label: 'Videos Made' }, { num: '2M+', label: 'Views' }, { num: '72h', label: 'Turnaround' }, { num: '100%', label: 'Brand Approved' }].map((w, i) => (
              <div className="svc-why__item svc-reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="svc-why__num">{w.num}</span>
                <span className="svc-why__label">{w.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-formats" id="formats">
        <div className="container">
          <div className="svc-reveal">
            <span className="svc-eyebrow svc-eyebrow--dark">Content Formats</span>
            <h2 className="cp-section-title">What We Produce</h2>
          </div>
          <div className="cp-formats__grid">
            {formats.map((f, i) => (
              <div className="cp-format-card svc-reveal" key={i} style={{ transitionDelay: `${(i % 3) * 0.12}s` }}>
                <div className="cp-format-card__icon"><i className={`ti ${f.icon}`} aria-hidden="true" /></div>
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
          <div className="svc-reveal">
            <span className="svc-eyebrow svc-eyebrow--light">The Process</span>
            <h2 className="cp-section-title cp-section-title--light">From Brief to Broadcast</h2>
          </div>
          <div className="cp-process__steps">
            {process.map((p, i) => (
              <div className="cp-process__step svc-reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
                <span className="cp-process__step-num">{p.step}</span>
                <h4 className="cp-process__step-title">{p.title}</h4>
                <p className="cp-process__step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cp-cta">
        <div className="container cp-cta__inner svc-reveal">
          <span className="svc-eyebrow svc-eyebrow--dark">Let's Create</span>
          <h2 className="cp-cta__title">Ready to tell your story?</h2>
          <p className="cp-cta__desc">Share your brief and we'll send a creative proposal within 48 hours.</p>
          <Link to="/contact" className="btn-primary">Get a Quote →</Link>
        </div>
      </section>
    </div>
  );
}