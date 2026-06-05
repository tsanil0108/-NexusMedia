import React from 'react';
import { Link } from 'react-router-dom';
import './TechWebdevelopment.css';

const stats = [
  { num: '80+',  label: 'Sites Launched'       },
  { num: '0.8s', label: 'Avg. Load Time'        },
  { num: '99.9%', label: 'Uptime Guaranteed'   },
  { num: '4.8★', label: 'Client Rating'         },
];

const services = [
  { icon: 'ti-world',         name: 'Corporate Websites',  desc: 'Brand-first, performance-optimised websites that convert visitors into leads.' },
  { icon: 'ti-shopping-cart', name: 'E-Commerce',          desc: 'Shopify, WooCommerce, and custom storefronts built for maximum conversion.' },
  { icon: 'ti-device-mobile', name: 'Landing Pages',       desc: 'High-converting campaign pages with A/B testing and CRO built in.' },
  { icon: 'ti-api',           name: 'Web Apps',            desc: 'Dashboards, portals, and custom SaaS interfaces with clean UX.' },
  { icon: 'ti-search',        name: 'Technical SEO',       desc: 'Core Web Vitals, schema markup, site architecture — built to rank.' },
  { icon: 'ti-shield-check',  name: 'Maintenance & CRO',  desc: 'Ongoing support, speed optimisation, and conversion rate improvement.' },
];

const stack = [

];

const process = [
  { step: '01', title: 'Discover',   desc: 'Goals, audience, sitemap, and technical requirements workshop.' },
  { step: '02', title: 'Design',     desc: 'Wireframes → high-fidelity Figma prototypes → client sign-off.' },
  { step: '03', title: 'Develop',    desc: 'Agile sprints, weekly demos, staging environment review.' },
  { step: '04', title: 'Launch',     desc: 'QA testing, performance audit, SEO setup, and go-live.' },
  { step: '05', title: 'Support',    desc: 'Monthly retainer for updates, performance, and CRO.' },
];

export default function TechWebDevelopment() {
  return (
    <div className="tw-page">

      <section className="tw-hero">
        <div className="tw-hero__bg" />
        <div className="tw-hero__overlay" />
        <div className="tw-hero__code-bg" />
        <div className="container tw-hero__inner">
          <Link to="/services" className="tw-back"><i className="ti ti-arrow-left" /> Back to Services</Link>
          <span className="tw-eyebrow tw-eyebrow--light">Tech & Web Development</span>
          <h1 className="tw-hero__title">
            Built to<br /><em>Perform.</em>
          </h1>
          <p className="tw-hero__desc">
            We build fast, beautiful, and conversion-optimised digital products — from brand websites to complex e-commerce platforms — that become your hardest-working sales tool.
          </p>
          <div className="tw-hero__actions">
            <Link to="/contact" className="btn-primary">Start a Project →</Link>
            <a href="#services" className="tw-btn-ghost">What We Build ↓</a>
          </div>
        </div>
        <div className="tw-hero__stats">
          {stats.map((s, i) => (
            <div className="tw-hero__stat" key={i}>
              <span className="tw-hero__stat-num">{s.num}</span>
              <span className="tw-hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tw-services" id="services">
        <div className="container">
          <span className="tw-eyebrow tw-eyebrow--dark">What We Build</span>
          <h2 className="tw-section-title">Web Services</h2>
          <div className="tw-services__grid">
            {services.map((s, i) => (
              <div className="tw-service-card" key={i}>
                <div className="tw-service-card__icon">
                  <i className={`ti ${s.icon}`} aria-hidden="true" />
                </div>
                <h3 className="tw-service-card__name">{s.name}</h3>
                <p className="tw-service-card__desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tw-stack">
        <div className="tw-stack__bg" />
        <div className="tw-stack__overlay" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <span className="tw-eyebrow tw-eyebrow--light">Our Stack</span>
          <h2 className="tw-section-title tw-section-title--light">Technologies We Use</h2>
          <div className="tw-stack__grid">
            {stack.map((s, i) => (
              <div className="tw-stack__item" key={i}>
                <i className={`ti ${s.icon}`} aria-hidden="true" />
                <span>{s.name}</span>
              </div>
            ))}
          </div>
          <div className="tw-process__steps">
            {process.map((p, i) => (
              <div className="tw-process__step" key={i}>
                <span className="tw-process__step-num">{p.step}</span>
                <h4 className="tw-process__step-title">{p.title}</h4>
                <p className="tw-process__step-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tw-cta">
        <div className="container tw-cta__inner">
          <span className="tw-eyebrow tw-eyebrow--dark">Let's Build</span>
          <h2 className="tw-cta__title">Your website should work as hard as you do.</h2>
          <p className="tw-cta__desc">Share your vision and we'll send a scoping proposal within 48 hours.</p>
          <Link to="/contact" className="btn-primary">Get a Proposal →</Link>
        </div>
      </section>

    </div>
  );
}