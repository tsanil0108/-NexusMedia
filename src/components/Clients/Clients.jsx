import React, { useRef, useState, useEffect } from 'react';
import './Clients.css';

// ─── Local Asset Imports (src/assets/) ───────────────────────
import bohemianArcade  from '../../assets/Bohemian arcade.jpg';
import creatorsCube    from '../../assets/Creators Cube.jpg';
import creatureFilm    from '../../assets/Creature Film Company.png';
import finnetMedia     from '../../assets/Finnet Media Private Limited.png';
import flipkart        from '../../assets/flipkart.png';
import insync          from '../../assets/Insync.png';
import jitendraKumar   from '../../assets/jitendra kumar.webp';
import kinnectMedia    from '../../assets/Kinnect Media.jpg';
import madhouse        from '../../assets/Madhouse_Logo-XisIk323.jpeg';
import navarasaFilms   from '../../assets/Navarasa_web_series.jpg';
import pixemoStudios   from '../../assets/pixemostudios.png';
import pocketAces      from '../../assets/Pocket Aces.png';
import shahEnterprise  from '../../assets/Shahenterprise.png';
import socialSamosa    from '../../assets/socialsamosa.jpg';
import theTravelSouk   from '../../assets/The Travel Souk.jpg';

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

// ─── Brands ───────────────────────────────────────────────────
// 15 brands have local assets; 9 use Unsplash placeholders.
// To replace a placeholder: add the image to src/assets/ and import it above.
const brands = [
  { name: 'Flipkart',                     type: 'E-Commerce',         dot: 'dot-indigo', img: flipkart },
  { name: 'Bohemian Arcade',              type: 'Entertainment',      dot: 'dot-lime',   img: bohemianArcade },
  { name: 'Creators Cube',                type: 'Creator Studio',     dot: 'dot-lime',   img: creatorsCube },
  { name: 'Creature Film Company',        type: 'Film Production',    dot: 'dot-coral',  img: creatureFilm },
  { name: 'Finnet Media Private Limited', type: 'Media & Finance',    dot: 'dot-indigo', img: finnetMedia },
  { name: 'Insync',                       type: 'Agency',             dot: 'dot-teal',   img: insync },
  { name: 'Jitendra Kumar',               type: 'Creator',            dot: 'dot-amber',  img: jitendraKumar },
  { name: 'Kinnect Media',                type: 'Media Agency',       dot: 'dot-pink',   img: kinnectMedia },
  { name: 'MAD House Media',              type: 'Media',              dot: 'dot-violet', img: madhouse },
  { name: 'Navarasa Films',               type: 'Film Production',    dot: 'dot-gold',   img: navarasaFilms },
  { name: 'Pixemo Studios India Pvt Ltd', type: 'Studio',             dot: 'dot-teal',   img: pixemoStudios },
  { name: 'Pocket Aces',                  type: 'Digital Content',    dot: 'dot-gold',   img: pocketAces },
  { name: 'Shah Enterprise',              type: 'Enterprise',         dot: 'dot-indigo', img: shahEnterprise },
  { name: 'Social Samosa',                type: 'Digital Media',      dot: 'dot-amber',  img: socialSamosa },
  { name: 'The Travel Souk',              type: 'Travel & Lifestyle', dot: 'dot-pink',   img: theTravelSouk },
  // ── No local image yet — Unsplash placeholders ──
  { name: 'Pack Films Pvt Ltd',           type: 'Production',         dot: 'dot-violet', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=70' },
  { name: 'Lights Camera Digital',        type: 'Digital Media',      dot: 'dot-gold',   img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&q=70' },
  { name: 'Kishan Pandya',                type: 'Creator',            dot: 'dot-pink',   img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=70' },
  { name: 'Rohit Kashiram Kharwar',       type: 'Creator',            dot: 'dot-coral',  img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=70' },
  { name: 'Shenoya Fernandes',            type: 'Creator',            dot: 'dot-violet', img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&q=70' },
  { name: 'One Up Motion Pictures LLP',   type: 'Film Production',    dot: 'dot-amber',  img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=70' },
  { name: 'Bluprint',                     type: 'Agency',             dot: 'dot-coral',  img: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=400&q=70' },
  { name: 'TOCM Global Pvt Ltd',          type: 'Global Agency',      dot: 'dot-teal',   img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=70' },
  { name: 'AM Productions',               type: 'Production',         dot: 'dot-lime',   img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=70' },
];

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

// ─── BrandCard Component ──────────────────────────────────────
function BrandCard({ brand, index }) {
  return (
    <div className="brand__card">
      <div className="brand__card-img-wrap">
        <img src={brand.img} alt={brand.name} loading="lazy" />
        <span className="brand__card-num">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <div className="brand__card-body">
        <div className="brand__card-name">
          <span className={`brand__dot ${brand.dot}`} />
          {brand.name}
        </div>
        <div className="brand__card-type">{brand.type}</div>
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

      {/* BRAND PARTNERS GRID */}
      <section className="clients__brands-section">
        <div className="container">
          <span className="c-eyebrow">Partner Brands</span>
          <h2 className="clients__sec-title">24 Brands Across <em>India</em></h2>
          <div className="clients__brands-grid">
            {brands.map((brand, i) => (
              <BrandCard key={i} brand={brand} index={i} />
            ))}
          </div>
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