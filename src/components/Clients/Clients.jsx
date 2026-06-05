import React, { useRef, useState, useEffect } from 'react';
import './Clients.css';

// ─── Local Asset Imports (src/assets/) ───────────────────────
import bohemianArcade  from '../../assets/Bohemian arcade.jpg';
import creatorsCube    from '../../assets/Creators Cube.jpg';
import creatureFilm    from '../../assets/Creature Film Company.png';
import finnetMedia     from '../../assets/Finnet Media Private Limited.png';
import flipkart        from '../../assets/flipkart.png';
import insync          from '../../assets/insync.jpg';
import jitendraKumar   from '../../assets/jitendra kumar.jpg';
import kinnectMedia    from '../../assets/Kinnect Media.jpg';
import madhouse        from '../../assets/Madhouse_Logo-XisIk323.jpeg';
import navarasaFilms   from '../../assets/Navarasa Films.jpg';
import pixemoStudios   from '../../assets/pixemostudios.png';
import shahEnterprise  from '../../assets/Shahenterprise.png';
import socialSamosa    from '../../assets/socialsamosa.jpg';
import theTravelSouk   from '../../assets/The Travel Souk.jpg';
import packFilms       from '../../assets/PackFilms .jpg';
import blueprint       from '../../assets/blueprint.jpg';
import lightsCamera    from '../../assets/Lights camera digital.jpg';
import oneUpMotion     from '../../assets/one up motion pictures.jpg';
import tocm            from '../../assets/TOCM.jpg';
import arunMathew      from '../../assets/Arun Mathew photography.jpg';

// ─── Hero Slideshow Images ────────────────────────────────────
const heroImages = [
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&q=80',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1600&q=80',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
];

// ─── Stats ────────────────────────────────────────────────────
const stats = [
  { num: 50,  suffix: '+',   label: 'Brand Partners'      },
  { num: 120, suffix: '+',   label: 'Campaigns Delivered' },
  { num: 3,   suffix: 'Cr+', label: 'Audience Reached'    },
  { num: 98,  suffix: '%',   label: 'Client Retention'    },
];

// ─── Brands — ALL local assets ───────────────────────────────
// type: 'logo' = use contain | type: 'photo' = use cover | type: 'text' = initials fallback
const brands = [
  { name: 'Flipkart',                     img: flipkart,       type: 'logo'  },
  { name: 'Bohemian Arcade',              img: bohemianArcade, type: 'logo'  },
  { name: 'Creators Cube',                img: creatorsCube,   type: 'logo'  },
  { name: 'Creature Film Company',        img: creatureFilm,   type: 'logo'  },
  { name: 'Finnet Media',                 img: finnetMedia,    type: 'logo'  },
  { name: 'Insync',                       img: insync,         type: 'logo'  },
  { name: 'Jitendra Kumar',               img: jitendraKumar,  type: 'photo' },
  { name: 'Kinnect Media',                img: kinnectMedia,   type: 'logo'  },
  { name: 'MAD House Media',              img: madhouse,       type: 'logo'  },
  { name: 'Navarasa Films',               img: navarasaFilms,  type: 'logo'  },
  { name: 'Pixemo Studios',               img: pixemoStudios,  type: 'logo'  },
  { name: 'Pocket Aces',                  type: 'text', initials: 'PA', color: '#0d3b66' },
  { name: 'Shah Enterprise',              img: shahEnterprise, type: 'logo'  },
  { name: 'Social Samosa',                img: socialSamosa,   type: 'logo'  },
  { name: 'The Travel Souk',              img: theTravelSouk,  type: 'logo'  },
  { name: 'Pack Films',                   img: packFilms,      type: 'logo'  },
  // No local asset yet — initials fallback
  { name: 'Blueprint',                    img: blueprint,      type: 'logo'  },
  { name: 'Lights Camera Digital',        img: lightsCamera,   type: 'logo'  },
  { name: 'One Up Motion Pictures',       img: oneUpMotion,    type: 'logo'  },
  { name: 'TOCM Global',                  img: tocm,           type: 'logo'  },
  { name: 'Arun Mathew Photography',      img: arunMathew,     type: 'photo' },
  { name: 'Kishan Pandya',               type: 'text', initials: 'KP', color: '#2e1a3a' },
  { name: 'Rohit K. Kharwar',            type: 'text', initials: 'RK', color: '#3a1a1a' },
  { name: 'Shenoya Fernandes',           type: 'text', initials: 'SF', color: '#1a2e3a' },
  { name: 'AM Productions',             type: 'text', initials: 'AM', color: '#2a2a0d' },
];

// Split brands into two rows for dual marquee
const half = Math.ceil(brands.length / 2);
const row1 = brands.slice(0, half);
const row2 = brands.slice(half);

// ─── Testimonials ─────────────────────────────────────────────
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

// ─── CountUp Component ────────────────────────────────────────
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

// ─── LogoCircle Component ─────────────────────────────────────
function LogoCircle({ brand }) {
  if (brand.type === 'text') {
    return (
      <div
        className="logo-circle logo-circle--text"
        title={brand.name}
        style={{ background: brand.color }}
      >
        <span className="logo-circle__initials">{brand.initials}</span>
      </div>
    );
  }
  return (
    <div
      className={`logo-circle ${brand.type === 'photo' ? 'logo-circle--photo' : ''}`}
      title={brand.name}
    >
      <img src={brand.img} alt={brand.name} loading="lazy" />
    </div>
  );
}

// ─── MarqueeRow Component ─────────────────────────────────────
function MarqueeRow({ items, reverse = false }) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items, ...items];
  return (
    <div className={`marquee-row ${reverse ? 'marquee-row--reverse' : ''}`}>
      <div className={`marquee-track ${reverse ? 'marquee-track--reverse' : ''}`}>
        {doubled.map((brand, i) => (
          <LogoCircle key={i} brand={brand} />
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────
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

      {/* BRAND LOGO MARQUEE */}
      <section className="clients__brands-section">
        <div className="container">
          <span className="c-eyebrow">Partner Brands</span>
          <h2 className="clients__sec-title">24 Brands Across <em>India</em></h2>
        </div>

        {/* Full-bleed marquee — outside container so it spans edge to edge */}
        <div className="logo-marquee-wrapper">
          <MarqueeRow items={row1} reverse={false} />
          <MarqueeRow items={row2} reverse={true} />
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
