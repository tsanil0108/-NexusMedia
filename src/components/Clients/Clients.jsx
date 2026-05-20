import React from 'react';
import './Clients.css';

const heroImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1600&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
];

const stats = [
  { num: 50,  suffix: '+',   label: 'Brand Partners'      },
  { num: 120, suffix: '+',   label: 'Campaigns Delivered' },
  { num: 3,   suffix: 'Cr+', label: 'Audience Reached'    },
  { num: 98,  suffix: '%',   label: 'Client Retention'    },
];

const row1 = [
  { name: 'NovaBrand',   dot: 'dot-violet' }, { name: 'ZenithCo',   dot: 'dot-gold'   },
  { name: 'PeakMedia',   dot: 'dot-coral'  }, { name: 'StellarX',   dot: 'dot-teal'   },
  { name: 'CraftHouse',  dot: 'dot-lime'   }, { name: 'UrbanEdge',  dot: 'dot-indigo' },
  { name: 'FusionLabs',  dot: 'dot-violet' }, { name: 'PrimeWave',  dot: 'dot-amber'  },
];
const row2 = [
  { name: 'BrightPath',  dot: 'dot-pink'   }, { name: 'Luminary',   dot: 'dot-gold'   },
  { name: 'SwiftAds',    dot: 'dot-teal'   }, { name: 'NexGen',     dot: 'dot-coral'  },
  { name: 'ArcStudio',   dot: 'dot-violet' }, { name: 'VortexMkt',  dot: 'dot-lime'   },
  { name: 'EliteReach',  dot: 'dot-amber'  }, { name: 'MotionCo',   dot: 'dot-indigo' },
];

const testimonials = [
  {
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=700&q=75',
    quote: 'NexusMedia completely transformed our digital presence. Their strategic approach drove a 3x increase in qualified leads within just 3 months.',
    name: 'Priya Sharma', role: 'CMO, ZenithCo', initials: 'PS',
  },
  {
    img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=700&q=75',
    quote: 'What sets them apart is how deeply they understand your business before recommending anything. The campaigns felt like they were built for us.',
    name: 'Rahul Mehta', role: 'Founder, NovaBrand', initials: 'RM',
  },
  {
    img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=700&q=75',
    quote: 'Their influencer campaigns for our FMCG launch were flawless. Authentic partnerships, measurable reach, and a team that truly cares.',
    name: 'Anita Desai', role: 'Marketing Head, CraftHouse', initials: 'AD',
  },
];

import { useRef, useState, useEffect } from 'react';

function CountUp({ target, suffix }) {
  const [val, setVal] = useState(0);
  const ref  = useRef();
  const done = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !done.current) {
        done.current = true;
        let cur = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          cur = Math.min(cur + step, target);
          setVal(cur);
          if (cur >= target) clearInterval(timer);
        }, 35);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{val}<span className="stat-suffix">{suffix}</span></span>;
}

function MarqueeRow({ brands, cls }) {
  const quad = [...brands, ...brands, ...brands, ...brands];
  return (
    <div className={`marquee__track ${cls}`}>
      {quad.map((b, i) => (
        <span className="brand__pill" key={i}>
          <span className={`brand__dot ${b.dot}`} />
          {b.name}
        </span>
      ))}
    </div>
  );
}

export default function Clients() {
  return (
    <div className="page">

      {/* HERO SLIDESHOW */}
      <section className="clients__hero">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="clients__slide"
            style={{ backgroundImage: `url(${img})`, animationDelay: `${i * 5}s` }}
          />
        ))}
        <div className="clients__overlay" />
        <div className="container clients__hero-content">
          <span className="c-eyebrow c-eyebrow--light">Clients & Partners</span>
          <h1 className="clients__hero-title">
            Brands That <em>Trust Us</em>
          </h1>
          <p className="clients__hero-desc">
            From emerging startups to established names — we've helped brands across industries grow their presence and reach.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="clients__stats-section">
        <div className="container">
          <span className="c-eyebrow">By The Numbers</span>
          <h2 className="clients__sec-title">Results That <em>Speak</em></h2>
          <div className="clients__stats-grid">
            {stats.map((s, i) => (
              <div className="clients__stat" key={i}>
                <div className="clients__stat-num">
                  <CountUp target={s.num} suffix={s.suffix} />
                </div>
                <div className="clients__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="clients__marquee-section">
        <div className="container">
          <span className="c-eyebrow">Partner Brands</span>
          <h2 className="clients__sec-title">50+ Brands Across <em>India</em></h2>
        </div>
        <div style={{ marginTop: 48 }}>
          <div className="marquee__wrap">
            <div className="marquee__fade-left" />
            <div className="marquee__fade-right" />
            <MarqueeRow brands={row1} cls="track-fwd" />
            <MarqueeRow brands={row2} cls="track-rev" />
          </div>
        </div>
        <div className="container">
          <p className="clients__trust">Trusted partners since 2020 · Mumbai, India</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="clients__testi">
        <div className="container">
          <span className="c-eyebrow">What Clients Say</span>
          <h2 className="clients__sec-title">Don't Take Our <em>Word For It</em></h2>
          <div className="clients__testi-grid">
            {testimonials.map((t, i) => (
              <div className="testi__card" key={i}>
                <img className="testi__card-img" src={t.img} alt={t.name} />
                <div className="testi__body">
                  <p className="testi__quote">"{t.quote}"</p>
                  <div className="testi__author">
                    <div className="testi__avatar">{t.initials}</div>
                    <div>
                      <div className="testi__name">{t.name}</div>
                      <div className="testi__role">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}