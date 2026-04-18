import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import './Contact.css';

const COUNTRY_CODES = [
  { code: '+91', label: '🇮🇳 India (+91)' },
  { code: '+971', label: '🇦🇪 UAE (+971)' },
  { code: '+966', label: '🇸🇦 Saudi Arabia (+966)' },
  { code: '+973', label: '🇧🇭 Bahrain (+973)' },
  { code: '+255', label: '🇹🇿 Tanzania (+255)' },
  { code: '+974', label: '🇶🇦 Qatar (+974)' },
  { code: '+965', label: '🇰🇼 Kuwait (+965)' },
  { code: '+1', label: '🇺🇸 USA/Canada (+1)' },
  { code: '+44', label: '🇬🇧 UK (+44)' },
  { code: '+61', label: '🇦🇺 Australia (+61)' },
  { code: '+49', label: '🇩🇪 Germany (+49)' },
];

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Mill Address',
    lines: ['Gauri Agro Rice Mill', 'Behind Madhuban', 'Karnal, Haryana — 132001'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 8295249047'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['ceo@gauriagro.in'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM IST', 'Export Enquiries: 24 hours via Email'],
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name:'', email:'', countryCode:'+91', phone:'', country:'', product:'', message:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name:'', email:'', countryCode:'+91', phone:'', country:'', product:'', message:'' });
  };

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Contact Us</span>
          </div>
          <h1 className="page-title">Get In Touch</h1>
          <p className="page-subtitle">Our export team is ready to discuss pricing, MOQs, packaging, and logistics — get in touch today.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* Left — Info */}
            <div className="contact-info-col">
              <span className="section-tag">Contact Information</span>
              <h2 className="contact-heading">We're Here to Help</h2>
              <p className="contact-desc">Whether you're a first-time importer or a long-standing partner, our team is always ready to assist you with any enquiry.</p>

              <div className="info-cards">
                {CONTACT_INFO.map((item, i) => (
                  <div key={i} className="info-card">
                    <div className="info-icon-wrap">
                      <item.icon size={20} strokeWidth={2} />
                    </div>
                    <div className="info-content">
                      <p className="info-title">{item.title}</p>
                      {item.lines.map((line, j) => <p key={j} className="info-line">{line}</p>)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="whatsapp-cta">
                <a href="https://wa.me/918295249047" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{width:'100%', justifyContent:'center'}}>
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-form-col">
              {submitted && (
                <div className="success-banner">
                  ✅ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              <div className="form-card">
                <h3 className="form-heading">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row-2">
                    <div className="form-field">
                      <label className="form-label">Full Name *</label>
                      <input type="text" name="name" className="form-input" value={form.name} onChange={handleChange} required placeholder="e.g. Ahmed Al-Fayed" />
                    </div>
                    <div className="form-field">
                      <label className="form-label">Country *</label>
                      <input type="text" name="country" className="form-input" value={form.country} onChange={handleChange} required placeholder="e.g. United Arab Emirates" />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Email Address *</label>
                    <input type="email" name="email" className="form-input" value={form.email} onChange={handleChange} required placeholder="your@company.com" />
                  </div>

                  <div className="form-field">
                    <label className="form-label">Phone Number *</label>
                    <div className="phone-group">
                      <select name="countryCode" className="form-input code-select" value={form.countryCode} onChange={handleChange}>
                        {COUNTRY_CODES.map(c => (
                          <option key={c.code} value={c.code}>{c.label}</option>
                        ))}
                      </select>
                      <input type="tel" name="phone" className="form-input phone-input" value={form.phone} onChange={handleChange} required placeholder="8295249047" />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Product of Interest</label>
                    <select name="product" className="form-input" value={form.product} onChange={handleChange}>
                      <option value="">— Select a Product —</option>
                      <option>1121 Basmati Rice</option>
                      <option>1509 Basmati Rice</option>
                      <option>Non-Basmati Rice</option>
                      <option>Custom Packaging Solutions</option>
                      <option>Mixed / Bulk Order</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="form-label">Message *</label>
                    <textarea name="message" className="form-input form-textarea" value={form.message} onChange={handleChange} required rows={5} placeholder="Please tell us your requirements — quantity, destination, packaging preferences..."></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={16} /> Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
