import React from 'react';
import './Vision.css';

const values = [
  { icon: '🤝', name: 'Integrity',      desc: 'Transparency and honesty in every client interaction and commitment we make.' },
  { icon: '💡', name: 'Innovation',     desc: 'Constantly exploring new ideas, formats, and platforms to keep clients ahead.' },
  { icon: '📌', name: 'Accountability', desc: 'We take ownership of results and focus on measurable outcomes, not just outputs.' },
  { icon: '🌐', name: 'Collaboration',  desc: 'The best ideas emerge from shared perspectives — yours and ours together.' },
  { icon: '⭐', name: 'Excellence',     desc: 'Uncompromising standards in strategy, execution, and delivery across every project.' },
  { icon: '🎯', name: 'Impact',         desc: 'Every campaign meaningfully contributes to your brand growth and long-term value.' },
];

export default function Vision() {
  return (
    <div className="page">

      {/* HERO */}
      <section className="vision__hero">
        <span className="tag">Vision & Values</span>
        <h1 className="section-title">What Drives<br />Everything We Do</h1>
        <p className="section-desc">Our vision is more than a statement — it's the foundation every campaign, strategy, and client relationship is built on.</p>
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
              <span className="tag">Our Vision</span>
              <h2 className="section-title">Where We're Headed</h2>
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
          <div style={{ textAlign: 'center' }}>
            <span className="tag">Core Values</span>
            <h2 className="section-title" style={{ marginBottom: 4 }}>What We Stand For</h2>
          </div>
          <p className="vision__values-title">Six principles that guide every decision we make</p>
          <div className="values__grid">
            {values.map((v, i) => (
              <div className="value__card" key={i}>
                <span className="value__icon">{v.icon}</span>
                <h3 className="value__name">{v.name}</h3>
                <p className="value__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}