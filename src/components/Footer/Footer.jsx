import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/logo.png';

const nav = [
  { label: 'Home',     to: '/'        },
  { label: 'About',    to: '/about'   },
  { label: 'Services', to: '/services'},
  { label: 'Vision',   to: '/vision'  },
  { label: 'Process',  to: '/process' },
  { label: 'Clients',  to: '/clients' },
  { label: 'Contact',  to: '/contact' },
];

const services = [
  { label: 'Digital Marketing',     to: '/services/digital-marketing'    },
  { label: 'Influencer Marketing',  to: '/services/influencer-marketing' },
  { label: 'Content Production',    to: '/services/content-production'   },
  { label: 'Brand Activation',      to: '/services/brand-activation'     },
  { label: 'Performance Marketing', to: '/services/performance-marketing'},
  { label: 'Strategy & Consulting', to: '/services/strategy-consulting'  },
  { label: 'Tech & Web Development',to: '/services/tech-web-development' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <img src={logo} alt="Influgrow Media" className="footer__logo-img" />
              <span className="footer__logo-name">Influgrow Media</span>
            </Link>
            <p className="footer__tagline">
              Integrated media & marketing agency.<br />
              Building brands that actually matter.
            </p>
            <div className="footer__contact-mini">
              <span>📍  A-101, New India Chamber, Cross Road, Off MIDC, Behind Onida House, Andheri (East), Mumbai-400097</span>
              <span>📧 influgrowmedia@gmail.com</span>
              <span>📞 +91 9768008679</span>
            </div>
          </div>

          <div className="footer__col">
            <h6 className="footer__col-title">Navigate</h6>
            {nav.map(l => (
              <Link key={l.to} to={l.to} className="footer__link">{l.label}</Link>
            ))}
          </div>

          <div className="footer__col">
            <h6 className="footer__col-title">Services</h6>
            {services.map(s => (
              <Link key={s.to} to={s.to} className="footer__link">{s.label}</Link>
            ))}
          </div>

          <div className="footer__col">
            <h6 className="footer__col-title">Let's Talk</h6>
            <p className="footer__col-desc">Ready to grow your brand? We'd love to hear from you.</p>
            <Link to="/contact" className="btn-primary" style={{ marginTop: 20 }}>Start a Project →</Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__copy">© {new Date().getFullYear()} Influgrow Media. All rights reserved.</span>
          <span className="footer__copy">Made with ♥ in Mumbai</span>
        </div>

      </div>
    </footer>
  );
}