import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import './Footer.css';

const FacebookIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>;
const TwitterIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>;
const LinkedinIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
const InstagramIcon = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top-bar">
        <div className="container footer-top-inner">
          <div>
            <span className="footer-logo-text">GAURI AGRO</span>
            <p className="footer-tagline">Purveyors of Excellence · Karnal, Haryana</p>
          </div>
          <div className="footer-top-socials">
            <a href="#" className="footer-social"><FacebookIcon /></a>
            <a href="#" className="footer-social"><TwitterIcon /></a>
            <a href="#" className="footer-social"><LinkedinIcon /></a>
            <a href="#" className="footer-social"><InstagramIcon /></a>
          </div>
        </div>
      </div>

      <div className="footer-body">
        <div className="container footer-body-inner">
          {/* About */}
          <div className="footer-col">
            <h4 className="footer-col-title">About Gauri Agro</h4>
            <p className="footer-col-desc">A premium rice processing mill and global exporter in Karnal, Haryana. Delivering uncompromising Basmati quality to 40+ countries since our founding.</p>
            <Link to="/about" className="footer-read-more">
              Our Story <ArrowRight size={14} />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-link-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Our Products</Link></li>
              <li><Link to="/infrastructure">Global Presence</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Products</h4>
            <ul className="footer-link-list">
              <li><Link to="/products#1121">1121 Basmati Rice</Link></li>
              <li><Link to="/products#1509">1509 Basmati Rice</Link></li>
              <li><Link to="/products#non-basmati">Non-Basmati Rice</Link></li>
              <li><Link to="/products">Custom Packaging</Link></li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-contact-list">
              <li><MapPin size={15} className="fc-icon" /><span>Gauri Agro Rice Mill, Behind Madhuban, Karnal, Haryana</span></li>
              <li><Phone size={15} className="fc-icon" /><a href="tel:+918295249047">+91 8295249047</a></li>
              <li><Mail size={15} className="fc-icon" /><a href="mailto:ceo@gauriagro.in">ceo@gauriagro.in</a></li>
            </ul>
            <div className="newsletter">
              <p className="newsletter-label">Subscribe for Updates</p>
              <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Your email..." required />
                <button type="submit" className="btn btn-primary"><ArrowRight size={16} /></button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Gauri Agro. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
