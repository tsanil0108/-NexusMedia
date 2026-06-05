import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Digitalmarketing.css';

const stats = [
  { num: 3,   suffix: 'x',   label: 'Average ROAS'        },
  { num: 120, suffix: '+',   label: 'Campaigns Delivered'  },
  { num: 98,  suffix: '%',   label: 'Client Retention'     },
  { num: 3,   suffix: 'Cr+', label: 'Audience Reached'     },
];
const channels = [
  { icon: 'ti-search',        name: 'SEO & SEM',       desc: 'Rank higher, spend smarter. Organic + paid search dominance.' },
  { icon: 'ti-mail',          name: 'Email Marketing',  desc: 'Drip sequences and newsletters that nurture and convert.' },
  { icon: 'ti-brand-google',  name: 'Google Ads',       desc: 'Search, Display, YouTube — full funnel Google coverage.' },
  { icon: 'ti-device-mobile', name: 'Mobile Marketing', desc: "App-first campaigns for India's mobile-first audience." },
  { icon: 'ti-chart-dots',    name: 'Programmatic',     desc: 'AI-powered buying across premium digital inventory.' },
  { icon: 'ti-affiliate',     name: 'Affiliate & CPA',  desc: 'Pay only for results. Performance-backed growth models.' },
];
const process = [
  { step: '01', title: 'Discovery',  desc: 'Brand audit, competitive analysis, audience mapping.' },
  { step: '02', title: 'Strategy',   desc: 'Channel mix, budget allocation, KPI framework.' },
  { step: '03', title: 'Launch',     desc: 'Creative production, campaign go-live, tracking setup.' },
  { step: '04', title: 'Optimise',   desc: 'Weekly sprints, A/B tests, continuous ROAS improvement.' },
  { step: '05', title: 'Report',     desc: 'Full-transparency dashboards, monthly business reviews.' },
];

function Counter({ target, suffix }) {
  const [count, setCount] = useState(0); const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      let v = 0;
      const step = () => { v += Math.ceil(target / 40); if (v >= target) { setCount(target); return; } setCount(v); requestAnimationFrame(step); };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(ref.current); return () => io.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}
function useReveal() { useEffect(() => { const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } }), { threshold: 0.12 }); document.querySelectorAll('.svc-reveal').forEach(el => io.observe(el)); return () => io.disconnect(); }, []); }
function useProgressBar() { useEffect(() => { const bar = document.querySelector('.svc-progress-bar'); if (!bar) return; const fn = () => { bar.style.width = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100) + '%'; }; window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn); }, []); }
function useFloatCTA() { useEffect(() => { const btn = document.querySelector('.svc-float-cta'); if (!btn) return; const fn = () => btn.classList.toggle('is-visible', window.scrollY > 400); window.addEventListener('scroll', fn, { passive: true }); return () => window.removeEventListener('scroll', fn); }, []); }

export default function DigitalMarketing() {
  useReveal(); useProgressBar(); useFloatCTA();
  return (
    <div className="dm-page">
      <div className="svc-progress-bar" aria-hidden="true" />
      <Link to="/contact" className="svc-float-cta"><i className="ti ti-message-circle" aria-hidden="true" /> Start a Campaign</Link>

      <section className="dm-hero">
        <div className="dm-hero__bg" /><div className="dm-hero__overlay" /><div className="dm-hero__grid" /><div className="dm-hero__strip" />
        <div className="container dm-hero__inner">
          <Link to="/services" className="svc-back"><i className="ti ti-arrow-left" /> Back to Services</Link>
          <span className="svc-eyebrow svc-eyebrow--light">Digital Marketing</span>
          <h1 className="dm-hero__title">Data-Driven Growth<br /><em>At Scale.</em></h1>
          <p className="dm-hero__desc">We architect full-funnel digital marketing ecosystems that attract, engage, and convert your ideal customers — with relentless optimisation at every step.</p>
          <div className="dm-hero__actions">
            <Link to="/contact" className="btn-primary">Start a Campaign →</Link>
            <a href="#channels" className="svc-btn-ghost">Explore Channels ↓</a>
          </div>
        </div>
        <div className="dm-hero__stats">
          {stats.map((s, i) => (
            <div className="dm-hero__stat" key={i}>
              <span className="dm-hero__stat-num"><Counter target={s.num} suffix={s.suffix} /></span>
              <span className="dm-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="svc-why">
        <div className="container"><div className="svc-why__inner">
          {[{ num: '3x', label: 'ROAS' }, { num: '120+', label: 'Campaigns' }, { num: '98%', label: 'Retention' }, { num: '3Cr+', label: 'Reach' }].map((w, i) => (
            <div className="svc-why__item svc-reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="svc-why__num">{w.num}</span><span className="svc-why__label">{w.label}</span>
            </div>
          ))}
        </div></div>
      </section>

      <section className="dm-channels" id="channels">
        <div className="container">
          <div className="svc-reveal"><span className="svc-eyebrow svc-eyebrow--dark">What's Included</span><h2 className="dm-section-title">Channels We Master</h2></div>
          <div className="dm-channels__grid">
            {channels.map((c, i) => (
              <div className="dm-channel-card svc-reveal" key={i} style={{ transitionDelay: `${(i % 3) * 0.12}s` }}>
                <div className="dm-channel-card__icon"><i className={`ti ${c.icon}`} aria-hidden="true" /></div>
                <h3 className="dm-channel-card__name">{c.name}</h3>
                <p className="dm-channel-card__desc">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dm-process">
        <div className="container">
          <div className="svc-reveal"><span className="svc-eyebrow svc-eyebrow--light">How We Work</span><h2 className="dm-section-title dm-section-title--light">Our 5-Step Process</h2></div>
          <div className="dm-process__track">
            {process.map((p, i) => (
              <div className="dm-process__step svc-reveal" key={i} style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="dm-process__step-num">{p.step}</div>
                {i < process.length - 1 && <div className="dm-process__connector" />}
                <div className="dm-process__step-body">
                  <h4 className="dm-process__step-title">{p.title}</h4>
                  <p className="dm-process__step-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="dm-cta">
        <div className="dm-cta__bg" /><div className="dm-cta__overlay" />
        <div className="container dm-cta__inner svc-reveal">
          <span className="svc-eyebrow svc-eyebrow--light">Ready?</span>
          <h2 className="dm-cta__title">Let's grow your brand digitally.</h2>
          <p className="dm-cta__desc">Tell us your goals. We'll build the roadmap.</p>
          <Link to="/contact" className="btn-primary">Get in Touch →</Link>
        </div>
      </section>
    </div>
  );
}