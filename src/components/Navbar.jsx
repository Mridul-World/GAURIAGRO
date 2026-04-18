import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-contact">
            <a href="tel:+918295249047" className="top-bar-item">
              <Phone size={14} /> +91 8295249047
            </a>
            <a href="mailto:ceo@gauriagro.in" className="top-bar-item">
              <Mail size={14} /> ceo@gauriagro.in
            </a>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-tagline">Premium Basmati Rice Exporters — Karnal, Haryana</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container main-nav-inner">
          {/* Logo */}
          <Link to="/" className="nav-logo">
            <div className="logo-icon">G</div>
            <div className="logo-text-wrap">
              <span className="logo-brand">Gauri Agro</span>
              <span className="logo-sub">Premium Rice Exporters</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links">
            <li><Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/about" className={`nav-item ${isActive('/about') ? 'active' : ''}`}>About Us</Link></li>
            <li
              className="nav-dropdown"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link to="/products" className={`nav-item ${isActive('/products') ? 'active' : ''}`}>
                Our Products <ChevronDown size={14} className={`chevron ${dropdownOpen ? 'open' : ''}`} />
              </Link>
              <ul className={`dropdown-menu ${dropdownOpen ? 'visible' : ''}`}>
                <li><Link to="/products#1121" className="dropdown-link">1121 Basmati Rice</Link></li>
                <li><Link to="/products#1509" className="dropdown-link">1509 Basmati Rice</Link></li>
                <li><Link to="/products#non-basmati" className="dropdown-link">Non-Basmati Rice</Link></li>
              </ul>
            </li>
            <li><Link to="/infrastructure" className={`nav-item ${isActive('/infrastructure') ? 'active' : ''}`}>Global Presence</Link></li>
            <li><Link to="/contact" className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>Contact</Link></li>
          </ul>

          {/* CTA Button */}
          <Link to="/contact" className="btn btn-primary nav-cta">Get a Quote</Link>

          {/* Mobile Toggle */}
          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li><Link to="/" className="mobile-nav-item">Home</Link></li>
          <li><Link to="/about" className="mobile-nav-item">About Us</Link></li>
          <li>
            <button className="mobile-nav-item mobile-dropdown-toggle" onClick={() => setDropdownOpen(!dropdownOpen)}>
              Our Products <ChevronDown size={14} className={dropdownOpen ? 'open' : ''} />
            </button>
            {dropdownOpen && (
              <ul className="mobile-sub">
                <li><Link to="/products#1121" className="mobile-sub-item">1121 Basmati Rice</Link></li>
                <li><Link to="/products#1509" className="mobile-sub-item">1509 Basmati Rice</Link></li>
                <li><Link to="/products#non-basmati" className="mobile-sub-item">Non-Basmati Rice</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/infrastructure" className="mobile-nav-item">Global Presence</Link></li>
          <li><Link to="/contact" className="mobile-nav-item">Contact</Link></li>
          <li><Link to="/contact" className="btn btn-primary" style={{margin:'1rem', display:'block', textAlign:'center'}}>Get a Quote</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
