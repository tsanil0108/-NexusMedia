import React, { useEffect, useRef, useState } from 'react';
import './Clients.css';

const stats = [
  { num: 50,  suffix: '+',   label: 'Brand Partners'      },
  { num: 120, suffix: '+',   label: 'Campaigns Delivered' },
  { num: 3,   suffix: 'Cr+', label: 'Audience Reached'    },
  { num: 98,  suffix: '%',   label: 'Client Retention'    },
];

const row1 = [
  { name: 'NovaBrand',   dot: 'dot-violet' }, { name: 'ZenithCo',   dot: 'dot-gold'   },
  { name: 'PeakMedia',  dot: 'dot-coral'  }, { name: 'StellarX',   dot: 'dot-teal'   },
  { name: 'CraftHouse', dot: 'dot-lime'   }, { name: 'UrbanEdge',  dot: 'dot-indigo' },
  { name: 'FusionLabs', dot: 'dot-violet' }, { name: 'PrimeWave',  dot: 'dot-amber'  },
];
const row2 = [
  { name: 'BrightPath',  dot: 'dot-pink'   }, { name: 'Luminary',    dot: 'dot-gold'   },
  { name: 'SwiftAds',    dot: 'dot-teal'   }, { name: 'NexGen',      dot: 'dot-coral'  },
  { name: 'ArcStudio',   dot: 'dot-violet' }, { name: 'VortexMkt',   dot: 'dot-lime'   },
  { name: 'EliteReach',  dot: 'dot-amber'  }, { name: 'MotionCo',    dot: 'dot-indigo' },
];

const testimonials = [
  { quote: 'NexusMedia completely transformed our digital presence. Their strategic approach and creative execution drove a 3x increase in qualified leads within just 3 months.', name: 'Priya Sharma', role: 'CMO, ZenithCo', initials: 'PS' },
  { quote: 'What sets them apart is how deeply they understand your business before recommending anything. The campaigns felt like they were built for us — because they were.', name: 'Rahul Mehta',  role: 'Founder, NovaBrand', initials: 'RM' },
  { quote: 'Their influencer campaigns for our FMCG launch were flawless. Authentic partnerships, measurable reach, and a team that truly cares about results.', name: 'Anita Desai',  role: 'Marketing Head, CraftHouse', initials: 'AD' },
];

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

  return <span ref={ref}>{val}<span>{suffix}</span></span>;
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

      {/* HERO */}
      <section className="clients__hero">
        <span className="tag">Clients & Partners</span>
        <h1 className="section-title">Brands That Trust Us</h1>
        <p className="section-desc">From emerging startups to established names — we've helped brands across industries grow their presence and reach.</p>
      </section>

      {/* STATS */}
      <section className="clients__stats-section">
        <div className="container">
          <span className="tag">By The Numbers</span>
          <h2 className="section-title">Results That Speak</h2>
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
          <span className="tag">Partner Brands</span>
          <h2 className="section-title">50+ Brands Across India</h2>
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
          <span className="tag">What Clients Say</span>
          <h2 className="section-title">Don't Take Our Word For It</h2>
          <div className="clients__testi-grid">
            {testimonials.map((t, i) => (
              <div className="testi__card" key={i}>
                <p className="testi__quote">"{t.quote}"</p>
                <div className="testi__author">
                  <div className="testi__avatar">{t.initials}</div>
                  <div>
                    <div className="testi__name">{t.name}</div>
                    <div className="testi__role">{t.role}</div>
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