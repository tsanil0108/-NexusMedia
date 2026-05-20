import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const heroImages = [
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=80',
];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',  label: 'Our Team'          },
  { src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80',     label: 'Strategy Sessions'  },
  { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',     label: 'Creative Work'      },
  { src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80',  label: 'Brand Launches'     },
];

const team = [
  { name: 'Arjun Mehta',  role: 'Founder & CEO',          init: 'AM', color: '#7f77dd' },
  { name: 'Priya Nair',   role: 'Head of Strategy',        init: 'PN', color: '#ef9f27' },
  { name: 'Rohan Desai',  role: 'Creative Director',       init: 'RD', color: '#d85a30' },
  { name: 'Simran Kaur',  role: 'Performance Lead',        init: 'SK', color: '#1d9e75' },
  { name: 'Kabir Shah',   role: 'Influencer Partnerships', init: 'KS', color: '#d4537e' },
  { name: 'Ananya Roy',   role: 'Content Studio Head',     init: 'AR', color: '#185fa5' },
];

const milestones = [
  { year: '2020', event: 'Influgrow Media founded in Mumbai with a 3-person team and a bold vision.' },
  { year: '2021', event: 'Crossed 10 brand partnerships. Launched our influencer vertical.'          },
  { year: '2022', event: 'Full-service expansion — content production studio goes live.'             },
  { year: '2023', event: '50+ brands, 3Cr+ audience reached. Named top agency in West India.'       },
  { year: '2024', event: 'Launched programmatic & tech division. Team grows to 40+.'                },
];

const values = [
  { icon: '🔥', title: 'Ownership',    desc: 'We treat every brand as if it were our own — no shortcuts, no excuses.' },
  { icon: '💡', title: 'Curiosity',    desc: 'We question assumptions and look for smarter paths forward.' },
  { icon: '🤝', title: 'Transparency', desc: 'Honest reporting, clear communication, no hidden agendas.' },
  { icon: '📈', title: 'Impact',       desc: 'We measure ourselves by the growth we create for our clients.' },
];

export default function About() {
  return (
    <div className="page">

      {/* HERO SLIDESHOW */}
      <section className="about__hero">
        {heroImages.map((img, i) => (
          <div key={i} className="about__slide"
            style={{ backgroundImage: `url(${img})`, animationDelay: `${i * 5}s` }} />
        ))}
        <div className="about__overlay" />
        <div className="container about__hero-content">
          <div className="about__hero-grid">
            <div>
              <span className="tag about__tag-light">Who We Are</span>
              <h1 className="about__hero-title">
                Not Just an Agency.<br />
                Your <span className="accent">Growth Partner.</span>
              </h1>
            </div>
            <div>
              <p className="about__hero-desc">
                Influgrow Media was born in 2020 from one simple belief — brands deserve more than vanity metrics. We built a team of strategists, creators, and analysts who obsess over real outcomes.
              </p>
              <p className="about__hero-desc" style={{ marginTop: 16 }}>
                From a 3-person garage setup in Mumbai to a 40-member full-service agency — our story is about staying scrappy, staying honest, and always delivering.
              </p>
              <div className="about__hero-btns">
                <Link to="/contact"  className="btn-primary">Let's Talk →</Link>
                <Link to="/services" className="btn-outline about__btn-light">What We Do</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="about__gallery">
        <div className="about__gallery-grid">
          {galleryImages.map((g, i) => (
            <div className="about__gallery-item" key={i}>
              <img src={g.src} alt={g.label} className="about__gallery-img" />
              <div className="about__gallery-label">{g.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="about__values">
        <div className="container">
          <span className="tag">What Drives Us</span>
          <h2 className="section-title">Our Core Values</h2>
          <div className="values__grid">
            {values.map((v, i) => (
              <div className="values__card" key={i}>
                <div className="values__icon">{v.icon}</div>
                <div className="values__title">{v.title}</div>
                <div className="values__desc">{v.desc}</div>
              </div>
            ))}
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
                <div className="team__avatar"
                  style={{ background: t.color + '1a', borderColor: t.color + '40', color: t.color }}>
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