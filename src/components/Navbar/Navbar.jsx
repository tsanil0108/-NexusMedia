import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/services', label: 'Services' },
  { to: '/vision',   label: 'Vision'   },
  { to: '/process',  label: 'Process'  },
  { to: '/clients',  label: 'Clients'  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-mark">N</span>
          <span className="navbar__logo-text">NexusMedia</span>
        </Link>

        <nav className="navbar__links">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`navbar__link${location.pathname === l.to ? ' active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="btn-primary navbar__cta">Get in Touch →</Link>

        <button className={`navbar__burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </div>

      <div className={`navbar__mobile${open ? ' open' : ''}`}>
        <div className="navbar__mobile-inner">
          {links.map(l => (
            <Link key={l.to} to={l.to}
              className={`navbar__mobile-link${location.pathname === l.to ? ' active' : ''}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary" style={{ justifyContent: 'center', marginTop: 8 }}>
            Get in Touch →
          </Link>
        </div>
      </div>
    </header>
  );
}