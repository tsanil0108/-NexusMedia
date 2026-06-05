import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Brandactivation.css';

const stats = [
  { num: 60,  suffix: '+', label: 'Events Executed'    },
  { num: 500, suffix: 'K+', label: 'Footfall Generated' },
  { num: 40,  suffix: '+', label: 'Cities Covered'     },
  { num: 92,  suffix: '%', label: 'Post-Event Recall'  },
];

const types = [
  { icon: 'ti-building-store', name: 'Retail Activation',    desc: 'In-store experiences, sampling drives, and pop-up installations that convert shoppers.' },
  { icon: 'ti-confetti',       name: 'Experiential Events',  desc: 'Immersive brand worlds designed to create emotional memory and social shareability.' },
  { icon: 'ti-road',           name: 'On-Ground Campaigns',  desc: 'City-wide roadshows and BTL activations reaching audiences where they live.' },
  { icon: 'ti-trophy',         name: 'Sponsorship Leverage', desc: 'Turning sponsorship assets into tangible brand touchpoints and audience engagement.' },
  { icon: 'ti-camera',         name: 'Photo Moments',        desc: 'Branded installations and photo ops engineered for organic social amplification.' },
  { icon: 'ti-speakerphone',   name: 'Product Launches',     desc: 'High-impact launch events that create buzz, press coverage, and day-one demand.' },
];

const process = [
  { step: '01', title: 'Concept',  desc: 'Insight-driven activation idea aligned to brand and campaign goals.' },
  { step: '02', title: 'Design',   desc: 'Spatial design, logistics, vendor sourcing, and permit management.' },
  { step: '03', title: 'Execute',  desc: 'On-ground team, tech setup, and experiential flow management.' },
  { step: '04', title: 'Amplify',  desc: 'Live social coverage, PR outreach, influencer documentation.' },
  { step: '05', title: 'Measure',  desc: 'Footfall, dwell time, earned media, and brand recall reporting.' },
];

/* ── Animated counter ── */
function Counter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      let start = 0;
      const step = () => {
        start += Math.ceil(target / 40);
        if (start >= target) { setCount(target); return; }
        setCount(start); requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Scroll reveal ── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.svc-reveal');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useProgressBar() {
  useEffect(() => {
    const bar = document.querySelector('.svc-progress-bar');
    if (!bar) return;
    const fn = () => {
      const pct = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
      bar.style.width = pct + '%';
    };
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

export default function BrandActivation() {
  useReveal(); useProgressBar(); useFloatCTA();

  return (
    <div className="ba-page">
      <div className="svc-progress-bar" aria-hidden="true" />
      <Link to="/contact" className="svc-float-cta">
        <i className="ti ti-message-circle" aria-hidden="true" /> Plan Activation
      </Link>

      {/* HERO */}
      <section className="ba-hero">
        <div className="ba-hero__bg" />
        <div className="ba-hero__overlay" />
        <div className="ba-hero__strip" />
        <div className="container ba-hero__inner">
          <Link to="/services" className="svc-back"><i className="ti ti-arrow-left" /> Back to Services</Link>
          <span className="svc-eyebrow svc-eyebrow--light">Brand Activation</span>
          <h1 className="ba-hero__title">
            Experience Your<br /><em>Brand Live.</em>
          </h1>
          <p className="ba-hero__desc">
            We design on-ground and experiential campaigns that make people feel something — turning casual audiences into passionate brand advocates.
          </p>
          <div className="ba-hero__actions">
            <Link to="/contact" className="btn-primary">Plan an Activation →</Link>
            <a href="#types" className="svc-btn-ghost">See What We Do ↓</a>
          </div>
        </div>
        <div className="ba-hero__stats">
          {stats.map((s, i) => (
            <div className="ba-hero__stat" key={i}>
              <span className="ba-hero__stat-num"><Counter target={s.num} suffix={s.suffix} /></span>
              <span className="ba-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="svc-why">
        <div className="container">
          <div className="svc-why__inner">
            {[
              { num: '60+', label: 'Events Done' },
              { num: '40+', label: 'Cities' },
              { num: '5L+', label: 'Footfall' },
              { num: '92%', label: 'Recall Rate' },
            ].map((w, i) => (
              <div className="svc-why__item svc-reveal" key={i}
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <span className="svc-why__num">{w.num}</span>
                <span className="svc-why__label">{w.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="ba-types" id="types">
        <div className="container">
          <div className="svc-reveal">
            <span className="svc-eyebrow svc-eyebrow--dark">Activation Types</span>
            <h2 className="ba-section-title">How We Activate Brands</h2>
          </div>
          <div className="ba-types__grid">
            {types.map((t, i) => (
              <div className="ba-type-card svc-reveal" key={i}
                style={{ transitionDelay: `${(i % 3) * 0.12}s` }}>
                <div className="ba-type-card__icon">
                  <i className={`ti ${t.icon}`} aria-hidden="true" />
                </div>
                <h3 className="ba-type-card__name">{t.name}</h3>
                <p className="ba-type-card__desc">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ba-process">
        <div className="ba-process__bg" />
        <div className="ba-process__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="svc-reveal">
            <span className="svc-eyebrow svc-eyebrow--light">How We Work</span>
            <h2 className="ba-section-title ba-section-title--light">From Idea to Impact</h2>
          </div>
          <div className="ba-process__track">
            {process.map((p, i) => (
              <div className="ba-process__step svc-reveal" key={i}
                style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="ba-process__step-num">{p.step}</div>
                {i < process.length - 1 && <div className="ba-process__connector" />}
                <div className="ba-process__step-body">
                  <h4 className="ba-process__step-title">{p.title}</h4>
                  <p className="ba-process__step-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ba-cta">
        <div className="ba-cta__bg" />
        <div className="ba-cta__overlay" />
        <div className="container ba-cta__inner svc-reveal">
          <span className="svc-eyebrow svc-eyebrow--light">Let's Go Live</span>
          <h2 className="ba-cta__title">Let's activate something unforgettable.</h2>
          <p className="ba-cta__desc">Tell us your event vision and we'll make it happen.</p>
          <Link to="/contact" className="btn-primary">Talk to Us →</Link>
        </div>
      </section>
    </div>
  );
}