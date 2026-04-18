import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Factory, ThermometerSun, Settings, CheckCircle } from 'lucide-react';
import './Infrastructure.css';

const ASSETS = [
  {
    icon: ThermometerSun,
    number: '50',
    unit: 'Units',
    title: 'Drying Machines',
    desc: 'High-capacity drying units ensuring optimal moisture content in every grain, preserving aroma and extending shelf life throughout the supply chain.',
    points: ['Consistent moisture control', 'Prevents grain spoilage', 'Year-round operational capacity'],
  },
  {
    icon: Factory,
    number: '15',
    unit: 'Units',
    title: 'Industrial Boilers',
    desc: 'Advanced boiling systems for precision parboiling processes — retaining nutritional value and delivering the golden hue preferred by Middle Eastern markets.',
    points: ['Precision parboiling', 'Nutritional value retention', 'High-output continuous processing'],
  },
  {
    icon: Settings,
    number: '5',
    unit: '12-Sooter',
    title: 'Sortex Machines',
    desc: 'State-of-the-art optical sorting (Sortex) machines with 12 sorter channels ensure 100% clean, impurity-free rice for premium export-grade quality.',
    points: ['Optical defect detection', 'Zero impurity tolerance', '12-channel precision sorting'],
  },
];

const MARKETS = [
  { country: 'United Arab Emirates', city: 'Dubai', flag: '🇦🇪', region: 'Middle East' },
  { country: 'Saudi Arabia', city: 'Riyadh / Jeddah', flag: '🇸🇦', region: 'Middle East' },
  { country: 'Bahrain', city: 'Manama', flag: '🇧🇭', region: 'Middle East' },
  { country: 'Tanzania', city: 'Dar es Salaam', flag: '🇹🇿', region: 'Africa' },
];

const Infrastructure = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Infrastructure & Global Presence</span>
          </div>
          <h1 className="page-title">Infrastructure & Global Presence</h1>
          <p className="page-subtitle">State-of-the-art milling facility in Karnal, Haryana — supplying premium Basmati to markets across the globe.</p>
        </div>
      </div>

      {/* Asset Showcase */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <span className="section-tag">Our Karnal Facility</span>
            <h2 className="section-heading section-heading-line">World-Class Processing Assets</h2>
            <p className="section-subheading">A vertically integrated facility designed for scale, precision, and uncompromising quality.</p>
          </div>
          <div className="assets-list">
            {ASSETS.map((a, i) => (
              <div key={i} className={`asset-block ${i % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="asset-visual">
                  <div className="asset-icon-wrap">
                    <a.icon size={48} strokeWidth={1.5} />
                  </div>
                  <div className="asset-number-wrap">
                    <span className="asset-big-num">{a.number}</span>
                    <span className="asset-unit">{a.unit}</span>
                  </div>
                </div>
                <div className="asset-content">
                  <span className="section-tag">Processing Equipment</span>
                  <h3 className="asset-title">{a.title}</h3>
                  <p className="asset-desc">{a.desc}</p>
                  <ul className="asset-points">
                    {a.points.map((pt, j) => (
                      <li key={j} className="asset-point">
                        <CheckCircle size={16} className="asset-check" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="global-section cinematic-map-bg">
        <div className="container">
          <div className="global-inner">
            <div className="global-text">
              <span className="section-tag" style={{color: '#C9A84C'}}>Export Markets</span>
              <h2 className="section-heading section-heading-line" style={{color: '#fff'}}>Our Global Presence</h2>
              <p style={{fontSize:'0.95rem', lineHeight:'1.8', color:'#ccc', marginBottom:'2.5rem'}}>
                Gauri Agro has established long-standing partnerships with importers, distributors, and food-service operators across four continents. Our strong foothold in the Middle East and Africa reflects the trust we've earned over decades of reliable, quality-first trade.
              </p>
              <div className="market-cards">
                {MARKETS.map((m, i) => (
                  <div key={i} className="market-card dark-market-card">
                    <span className="market-flag">{m.flag}</span>
                    <div>
                      <p className="market-country" style={{color: '#fff'}}>{m.country}</p>
                      <p className="market-city" style={{color: '#aaa'}}>{m.city}</p>
                    </div>
                    <span className="market-region" style={{color: '#C9A84C'}}>{m.region}</span>
                  </div>
                ))}
              </div>
              <div style={{marginTop:'2.5rem'}}>
                <Link to="/contact" className="btn btn-gold">Become a Partner</Link>
              </div>
            </div>

            <div className="global-map-wrap">
              <div className="global-map-card dark-map-card">
                <p className="map-title" style={{color: '#fff', borderBottomColor: '#333'}}>Key Export Destinations</p>
                <div className="map-interactive-container">
                  <div className="map-image-layer">
                    <img src="/world.svg" alt="World Map" className="world-svg-base" />
                    
                    {/* Origin: Karnal, India */}
                    <div className="map-node node-origin" style={{top: '43%', left: '71%'}}>
                      <div className="node-pulse"></div>
                      <span className="node-label">Karnal, India</span>
                    </div>

                    {/* Destinations */}
                    <div className="map-node node-dest" style={{top: '44%', left: '65%'}}>
                      <div className="node-pulse"></div>
                      <span className="node-label">Dubai</span>
                    </div>
                    <div className="map-node node-dest" style={{top: '46%', left: '63%'}}>
                      <div className="node-pulse"></div>
                      <span className="node-label">KSA</span>
                    </div>
                    <div className="map-node node-dest" style={{top: '59%', left: '61.5%'}}>
                      <div className="node-pulse"></div>
                      <span className="node-label">Tanzania</span>
                    </div>
                    
                    {/* Connection Lines via SVG overlay */}
                    <svg className="map-lines-overlay" preserveAspectRatio="none">
                      <line x1="71%" y1="43%" x2="65%" y2="44%" stroke="#C9A84C" strokeWidth="2" strokeDasharray="4 4" opacity="0.6"/>
                      <line x1="71%" y1="43%" x2="63%" y2="46%" stroke="#C9A84C" strokeWidth="2" strokeDasharray="4 4" opacity="0.6"/>
                      <line x1="71%" y1="43%" x2="61.5%" y2="59%" stroke="#C9A84C" strokeWidth="2" strokeDasharray="4 4" opacity="0.6"/>
                    </svg>
                  </div>
                </div>
                <div className="map-legend">
                  <div className="legend-item" style={{color: '#ccc'}}><span className="legend-dot origin"></span>Origin (Karnal, India)</div>
                  <div className="legend-item" style={{color: '#ccc'}}><span className="legend-dot export" style={{backgroundColor: '#E74C3C'}}></span>Export Markets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
