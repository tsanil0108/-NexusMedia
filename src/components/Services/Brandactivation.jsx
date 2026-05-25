import React from 'react';
import { Link } from 'react-router-dom';
import './Brandactivation.css';

const stats = [
  { num: '60+',  label: 'Events Executed'    },
  { num: '5L+',  label: 'Footfall Generated' },
  { num: '40+',  label: 'Cities Covered'     },
  { num: '92%',  label: 'Post-Event Recall'  },
];

const types = [
  { icon: 'ti-building-store', name: 'Retail Activation',     desc: 'In-store experiences, sampling drives, and pop-up installations that convert shoppers.' },
  { icon: 'ti-confetti',       name: 'Experiential Events',   desc: 'Immersive brand worlds designed to create emotional memory and social shareability.' },
  { icon: 'ti-road',           name: 'On-Ground Campaigns',   desc: 'City-wide roadshows and BTL activations reaching audiences where they live.' },
  { icon: 'ti-trophy',         name: 'Sponsorship Leverage',  desc: 'Turning sponsorship assets into tangible brand touchpoints and audience engagement.' },
  { icon: 'ti-camera',         name: 'Photo Moments',         desc: 'Branded installations and photo ops engineered for organic social amplification.' },
  { icon: 'ti-speakerphone',   name: 'Product Launches',      desc: 'High-impact launch events that create buzz, press coverage, and day-one demand.' },
];

const process = [
  { step: '01', title: 'Concept',   desc: 'Insight-driven activation idea aligned to brand and campaign goals.' },
  { step: '02', title: 'Design',    desc: 'Spatial design, logistics, vendor sourcing, and permit management.' },
  { step: '03', title: 'Execute',   desc: 'On-ground team, tech setup, experiential flow management.' },
  { step: '04', title: 'Amplify',   desc: 'Live social coverage, PR outreach, influencer documentation.' },
  { step: '05', title: 'Measure',   desc: 'Footfall, dwell time, earned media, and brand recall reporting.' },
];

export default function BrandActivation() {
  return (
    <div className="ba-page">

      <section className="ba-hero">
        <div className="ba-hero__bg" />
        <div className="ba-hero__overlay" />
        <div className="container ba-hero__inner">
          <Link to="/services" className="ba-back"><i className="ti ti-arrow-left" /> Back to Services</Link>
          <span className="ba-eyebrow ba-eyebrow--light">Brand Activation</span>
          <h1 className="ba-hero__title">
            Experience Your<br /><em>Brand Live.</em>
          </h1>
          <p className="ba-hero__desc">
            We design on-ground and experiential campaigns that make people feel something — turning casual audiences into passionate brand advocates.
          </p>
          <div className="ba-hero__actions">
            <Link to="/contact" className="btn-primary">Plan an Activation →</Link>
            <a href="#types" className="ba-btn-ghost">See What We Do ↓</a>
          </div>
        </div>
        <div className="ba-hero__stats">
          {stats.map((s, i) => (
            <div className="ba-hero__stat" key={i}>
              <span className="ba-hero__stat-num">{s.num}</span>
              <span className="ba-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="ba-types" id="types">
        <div className="container">
          <span className="ba-eyebrow ba-eyebrow--dark">Activation Types</span>
          <h2 className="ba-section-title">How We Activate Brands</h2>
          <div className="ba-types__grid">
            {types.map((t, i) => (
              <div className="ba-type-card" key={i}>
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

      <section className="ba-process">
        <div className="ba-process__bg" />
        <div className="ba-process__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="ba-eyebrow ba-eyebrow--light">How We Work</span>
          <h2 className="ba-section-title ba-section-title--light">From Idea to Impact</h2>
          <div className="ba-process__track">
            {process.map((p, i) => (
              <div className="ba-process__step" key={i}>
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

      <section className="ba-cta">
        <div className="ba-cta__bg" />
        <div className="ba-cta__overlay" />
        <div className="container ba-cta__inner">
          <span className="ba-eyebrow ba-eyebrow--light">Let's Go Live</span>
          <h2 className="ba-cta__title">Let's activate something unforgettable.</h2>
          <p className="ba-cta__desc">Tell us your event vision and we'll make it happen.</p>
          <Link to="/contact" className="btn-primary">Talk to Us →</Link>
        </div>
      </section>

    </div>
  );
}