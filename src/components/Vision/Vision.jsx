import React from 'react';
import './Vision.css';

const heroImages = [
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80',
  'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80',
  'https://images.unsplash.com/photo-1553484771-047a44eee27b?w=1600&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
  'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80',
];

const values = [
  {
    icon: 'ti-shield-check', colorClass: 'vb0',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=75',
    name: 'Integrity',
    desc: 'Transparency and honesty in every client interaction and commitment we make.',
  },
  {
    icon: 'ti-bulb', colorClass: 'vb1',
    img: 'https://images.unsplash.com/photo-1553484771-047a44eee27b?w=700&q=75',
    name: 'Innovation',
    desc: 'Constantly exploring new ideas, formats, and platforms to keep clients ahead.',
  },
  {
    icon: 'ti-target', colorClass: 'vb2',
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700&q=75',
    name: 'Accountability',
    desc: 'We take ownership of results and focus on measurable outcomes, not just outputs.',
  },
  {
    icon: 'ti-users', colorClass: 'vb3',
    img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=75',
    name: 'Collaboration',
    desc: 'The best ideas emerge from shared perspectives — yours and ours together.',
  },
  {
    icon: 'ti-star', colorClass: 'vb4',
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=700&q=75',
    name: 'Excellence',
    desc: 'Uncompromising standards in strategy, execution, and delivery across every project.',
  },
  {
    icon: 'ti-trending-up', colorClass: 'vb5',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=75',
    name: 'Impact',
    desc: 'Every campaign meaningfully contributes to your brand growth and long-term value.',
  },
];

export default function Vision() {
  return (
    <div className="page">

      {/* HERO SLIDESHOW */}
      <section className="vision__hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="vision__slide"
            style={{ backgroundImage: `url(${img})`, animationDelay: `${i * 5}s` }}
          />
        ))}
        <div className="vision__overlay" />
        <div className="container vision__hero-content">
          <span className="v-eyebrow v-eyebrow--light">Vision & Values</span>
          <h1 className="vision__hero-title">
            What Drives<br />Everything <em>We Do</em>
          </h1>
          <p className="vision__hero-desc">
            Our vision is more than a statement — it's the foundation every campaign, strategy, and client relationship is built on.
          </p>
        </div>
      </section>

      {/* QUOTE */}
      <section className="vision__quote-section">
        <div className="container">
          <div className="vision__quote">
            <p>
              We envision a future where marketing is not <em>intrusive</em> but engaging —
              not transactional but <em>experiential</em>. Where every brand moment creates
              genuine <em>human connection</em>.
            </p>
          </div>
        </div>
      </section>

      {/* VISION TEXT */}
      <section className="vision__text">
        <div className="container">
          <div className="vision__text-grid">
            <div>
              <span className="v-eyebrow">Our Vision</span>
              <h2 className="vision__sub-title">Where We're <em>Headed</em></h2>
            </div>
            <div className="vision__text-body">
              <p>
                Our vision is to become a trusted and forward-thinking media partner for brands seeking sustainable growth in a rapidly evolving digital world. We aim to redefine how brands communicate by blending creativity, technology, and human insight to create meaningful connections between businesses and their audiences.
              </p>
              <p>
                We envision a future where marketing is not intrusive but engaging, not transactional but experiential. By continuously adapting to changing consumer behavior and leveraging emerging platforms and trends, we strive to stay ahead of the curve and help our clients do the same.
              </p>
              <p>
                Our goal is to build a company that is recognized not just for delivering campaigns, but for shaping brand journeys and driving long-term value. We believe that the best marketing feels invisible — it simply connects the right people with brands they genuinely love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="vision__values">
        <div className="container">
          <span className="v-eyebrow">Core Values</span>
          <h2 className="vision__sub-title">What We <em>Stand For</em></h2>
          <p className="vision__values-sub">Six principles that guide every decision we make</p>
          <div className="values__grid">
            {values.map((v, i) => (
              <div className="value__card" key={i}>
                <img className="value__card-img" src={v.img} alt={v.name} />
                <div className="value__body">
                  <div className="value__icon-row">
                    <div className={`value__badge ${v.colorClass}`}>
                      <i className={`ti ${v.icon}`} aria-hidden="true" />
                    </div>
                    <h3 className="value__name">{v.name}</h3>
                  </div>
                  <p className="value__desc">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}