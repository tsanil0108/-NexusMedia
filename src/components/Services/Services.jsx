import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const heroImages = [
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&q=80',
];

const services = [
  {
    icon: 'ti-broadcast', colorClass: 'si0',
    to: '/services/digital-marketing',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75',
    name: 'Digital Marketing',
    desc: 'Precision-targeted ads across premium inventory at scale. Data-driven decisions, maximum ROI.',
  },
  {
    icon: 'ti-users', colorClass: 'si1',
    to: '/services/influencer-marketing',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=75',
    name: 'Influencer Marketing',
    desc: 'Creator ecosystems built for authentic brand storytelling and real audience connection.',
  },
  {
    icon: 'ti-video', colorClass: 'si2',
    to: '/services/content-production',
    img: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=75',
    name: 'Content Production',
    desc: 'Scroll-stopping visuals, reels, and brand narratives that convert and inspire.',
  },
  {
    icon: 'ti-chart-bar', colorClass: 'si3',
    to: '/services/performance-marketing',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75',
    name: 'Performance Marketing',
    desc: 'Data-driven paid campaigns across Google, Meta, and more that generate real ROI.',
  },
  {
    icon: 'ti-device-mobile', colorClass: 'si4',
    to: '/services/brand-activation',
    img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=75',
    name: 'Brand Activation',
    desc: 'On-ground and experiential campaigns that create lasting emotional brand impact.',
  },
  {
    icon: 'ti-rocket', colorClass: 'si5',
    to: '/services/brand-activation',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=75',
    name: 'Brand Activation Events',
    desc: 'Live experiences and activations that create unforgettable brand moments.',
  },
  {
    icon: 'ti-code', colorClass: 'si6',
    to: '/services/tech-web-development',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=75',
    name: 'Tech & Web Development',
    desc: 'High-performance websites, landing pages, and e-commerce built to convert.',
  },
  {
    icon: 'ti-brain', colorClass: 'si7',
    to: '/services/strategy-consulting',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=75',
    name: 'Strategy & Consulting',
    desc: 'Deep market insight and competitive intelligence to shape your brand roadmap.',
  },
];

export default function Services() {
  return (
    <div className="page">

      <section className="services__hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="services__slide"
            style={{ backgroundImage: `url(${img})`, animationDelay: `${i * 5}s` }}
          />
        ))}
        <div className="services__overlay" />
        <div className="container services__hero-content">
          <span className="svc-eyebrow svc-eyebrow--light">What We Do</span>
          <h1 className="services__hero-title">
            End-to-End<br />Marketing<br /><em>Capabilities.</em>
          </h1>
          <p className="services__hero-desc">
            From strategy to execution — a full suite of integrated marketing services
            under one roof. No juggling multiple agencies. One team. Complete accountability.
          </p>
          <Link to="/contact" className="btn-primary">Discuss Your Needs →</Link>
        </div>
      </section>

      <section className="services__grid">
        <div className="container">
          <span className="svc-eyebrow">08 Services</span>
          <h2 className="section-title">Everything Your Brand <em>Needs</em></h2>
          <div className="services__list">
            {services.map((s, i) => (
              <Link className="service__card" key={i} to={s.to}>
                <img className="service__card-img" src={s.img} alt={s.name} />
                <div className="service__body">
                  <div className="service__top">
                    <span className="service__num">0{i + 1}</span>
                    <div className={`service__icon-badge ${s.colorClass}`}>
                      <i className={`ti ${s.icon}`} aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="service__name">{s.name}</h3>
                  <p className="service__desc">{s.desc}</p>
                  <span className="service__link">
                    Learn more <i className="ti ti-arrow-up-right" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="services__cta">
        <div className="container">
          <div className="services__cta-box">
            <img
              className="services__cta-bg"
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=60"
              alt="" aria-hidden="true"
            />
            <div className="services__cta-content">
              <span className="svc-eyebrow" style={{ justifyContent: 'center' }}>Get Started</span>
              <h2 className="section-title">Not sure which service fits?</h2>
              <p className="section-desc">
                Tell us your goals and we'll recommend the right mix of services for your brand.
              </p>
              <Link to="/contact" className="btn-primary">Talk to Our Team →</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}