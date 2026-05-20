import React, { useState } from 'react';
import './Contact.css';

const infos = [
  { icon: '📍', title: 'Location',      desc: 'Mumbai, Maharashtra, India' },
  { icon: '📧', title: 'Email',         desc: 'hello@nexusmedia.in' },
  { icon: '📞', title: 'Phone',         desc: '+91 98765 43210' },
  { icon: '🕐', title: 'Working Hours', desc: 'Mon – Sat, 9:00 AM – 7:00 PM' },
];

export default function Contact() {
  const [form, setForm]           = useState({ name: '', email: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors]       = useState({});

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'Name is required';
    if (!form.email.trim())   e.email   = 'Email is required';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  return (
    <div className="page">

      {/* HERO */}
      <section className="contact__hero">
        <span className="tag">Get In Touch</span>
        <h1 className="section-title">Let's Build Something Great</h1>
        <p className="section-desc">Tell us about your brand and goals. We'll get back to you within 24 hours.</p>
      </section>

      {/* FORM SECTION */}
      <section className="contact__section">
        <div className="container">
          <div className="contact__grid">

            {/* Left: info */}
            <div>
              <div className="contact__info-list">
                {infos.map((info, i) => (
                  <div className="contact__info-item" key={i}>
                    <div className="info__icon-box">{info.icon}</div>
                    <div className="info__text">
                      <h5>{info.title}</h5>
                      <p>{info.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="contact__tagline">
                <p>"We don't just run campaigns — we build brand legacies."</p>
              </div>
            </div>

            {/* Right: form */}
            <div className="contact__form-box">
              {submitted ? (
                <div className="form__success">
                  <span className="form__success-icon">✨</span>
                  <h4>Message Received!</h4>
                  <p>Our team will reach out within 24 hours. Thank you for connecting with NexusMedia!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form__row">
                    <div className="form__group">
                      <label>Your Name *</label>
                      <input name="name" placeholder="Rahul Sharma" value={form.name} onChange={handleChange} />
                      {errors.name && <span style={{ fontSize: 12, color: '#e25555' }}>{errors.name}</span>}
                    </div>
                    <div className="form__group">
                      <label>Email Address *</label>
                      <input name="email" type="email" placeholder="rahul@brand.com" value={form.email} onChange={handleChange} />
                      {errors.email && <span style={{ fontSize: 12, color: '#e25555' }}>{errors.email}</span>}
                    </div>
                  </div>

                  <div className="form__row">
                    <div className="form__group">
                      <label>Company Name</label>
                      <input name="company" placeholder="Your Brand Ltd." value={form.company} onChange={handleChange} />
                    </div>
                    <div className="form__group">
                      <label>Service Interested In</label>
                      <select name="service" value={form.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        <option>Digital Marketing</option>
                        <option>Influencer Collaboration</option>
                        <option>Content Production</option>
                        <option>Brand Activation</option>
                        <option>Full Campaign Management</option>
                      </select>
                    </div>
                  </div>

                  <div className="form__group">
                    <label>Your Message *</label>
                    <textarea name="message" rows={5} placeholder="Tell us about your project, goals, and timeline..." value={form.message} onChange={handleChange} />
                    {errors.message && <span style={{ fontSize: 12, color: '#e25555' }}>{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn-primary form__submit">
                    Send Message →
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}