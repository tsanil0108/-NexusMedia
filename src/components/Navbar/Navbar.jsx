import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';

const serviceLinks = [
  { label: 'Digital Marketing',     to: '/services/digital-marketing'    },
  { label: 'Influencer Marketing',  to: '/services/influencer-marketing' },
  { label: 'Content Production',    to: '/services/content-production'   },
  { label: 'Brand Activation',      to: '/services/brand-activation'     },
  { label: 'Performance Marketing', to: '/services/performance-marketing'},
  { label: 'Strategy & Consulting', to: '/services/strategy-consulting'  },
  { label: 'Tech & Web Dev',        to: '/services/tech-web-development' },
];

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/services', label: 'Services', dropdown: true },
  { to: '/vision',   label: 'Vision'   },
  { to: '/process',  label: 'Process'  },
  { to: '/clients',  label: 'Clients'  },
];

export default function Navbar() {
  const [scrolled,           setScrolled]           = useState(false);
  const [open,               setOpen]               = useState(false);
  const [dropdownOpen,       setDropdownOpen]       = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location    = useLocation();
  const navigate    = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
    setMobileServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isServicesActive = location.pathname.startsWith('/services');

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo">
          <img src={logo} alt="Influgrow Media" className="navbar__logo-img" />
        </Link>

        <nav className="navbar__links">
          {links.map(l => l.dropdown ? (
            <div
              key={l.to}
              className="navbar__dropdown-wrap"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* Click pe /services navigate, hover pe dropdown */}
              <button
                className={`navbar__link navbar__link--btn${isServicesActive ? ' active' : ''}${dropdownOpen ? ' dropdown-open' : ''}`}
                onClick={() => navigate('/services')}
                aria-expanded={dropdownOpen}
              >
                {l.label}
                <i className={`ti ti-chevron-down navbar__chevron${dropdownOpen ? ' rotated' : ''}`} />
              </button>

              <div className={`navbar__dropdown${dropdownOpen ? ' open' : ''}`}>
                <Link to="/services" className="navbar__dropdown-all">
                  All Services →
                </Link>
                <div className="navbar__dropdown-divider" />
                {serviceLinks.map(s => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className={`navbar__dropdown-link${location.pathname === s.to ? ' active' : ''}`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link key={l.to} to={l.to}
              className={`navbar__link${location.pathname === l.to ? ' active' : ''}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="btn-primary navbar__cta">Get in Touch →</Link>

        <button
          className={`navbar__burger${open ? ' open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile${open ? ' open' : ''}`}>
        <div className="navbar__mobile-inner">
          {links.map(l => l.dropdown ? (
            <div key={l.to} className="navbar__mobile-services">
              <div className="navbar__mobile-services-row">
                {/* Mobile: Services text click pe navigate */}
                <Link
                  to="/services"
                  className={`navbar__mobile-link${isServicesActive ? ' active' : ''}`}
                  style={{ flex: 1 }}
                >
                  Services
                </Link>
                {/* Arrow button pe click karo submenu toggle ke liye */}
                <button
                  className="navbar__mobile-chevron-btn"
                  onClick={() => setMobileServicesOpen(o => !o)}
                  aria-label="Toggle services submenu"
                >
                  <i className={`ti ti-chevron-down navbar__chevron${mobileServicesOpen ? ' rotated' : ''}`} />
                </button>
              </div>
              <div className={`navbar__mobile-submenu${mobileServicesOpen ? ' open' : ''}`}>
                {serviceLinks.map(s => (
                  <Link key={s.to} to={s.to}
                    className={`navbar__mobile-sublink${location.pathname === s.to ? ' active' : ''}`}>
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
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