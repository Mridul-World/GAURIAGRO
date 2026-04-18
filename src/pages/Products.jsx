import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Products.css';

gsap.registerPlugin(ScrollTrigger);

const PRODUCTS = [
  {
    id: '1121',
    tag: 'Premium Export Quality',
    name: '1121 Basmati Rice',
    desc: 'The jewel of Basmati varieties — 1121 offers the world\'s longest grain with an unmatched elongation ratio after cooking. Its sweet, nutty aroma makes it the preferred choice for Biryanis, Pilaf, and premium catering globally.',
    img: '/rice-1121.png',
    imgTag: 'Best Seller',
    specs: ['Average Raw Grain Length: 8.35mm+', 'Cooked Elongation: 2x+', 'Moisture: Max 13%', 'Broken: Max 1%', 'Sortex Clean: 100%', 'APEDA / FSSAI Certified'],
  },
  {
    id: '1509',
    tag: 'High Aroma · Great Value',
    name: '1509 Basmati Rice',
    desc: '1509 Basmati delivers exceptional cooking characteristics — fluffy, long-grained, and wonderfully aromatic. It offers an authentic Basmati experience at a competitive price point, making it ideal for food service and retail chains.',
    img: '/rice-1509.png',
    imgTag: 'Most Popular',
    specs: ['Average Raw Grain Length: 8.20mm+', 'Cooked Elongation: 1.8x+', 'Moisture: Max 13%', 'Broken: Max 2%', 'Sortex Clean: 100%', 'Suitable for Retail & HoReCa'],
  },
  {
    id: 'non-basmati',
    tag: 'Diverse Range',
    name: 'Non-Basmati Rice',
    desc: 'Our non-Basmati range includes high-quality Sharbati, PR11, and IR64 varieties — processed with the same rigorous quality standards as our Basmati lines. Ideal for institutional catering, government tenders, and retail distribution.',
    img: '/rice-nonbasmati.png',
    imgTag: 'Bulk Available',
    specs: ['Varieties: Sharbati, PR11, IR64', 'Lengths: Medium & Long', 'Moisture: Max 14%', 'Broken: Max 5%', 'Large MOQ Orders Welcome', 'Custom Silky / Double Polish'],
  },
];

const Products = () => {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.substring(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax images
      gsap.utils.toArray('.product-img').forEach((img) => {
        gsap.to(img, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: img.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Reveal text
      gsap.utils.toArray('.gsap-reveal').forEach((elem) => {
        gsap.fromTo(
          elem,
          { opacity: 0, y: 50, filter: 'blur(10px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="page-header dark-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our Products</span>
          </div>
          <h1 className="page-title gsap-reveal">The Royal Collection</h1>
          <p className="page-subtitle gsap-reveal">Finest-quality Basmati and non-Basmati rice, processed with state-of-the-art technology in Karnal, Haryana.</p>
        </div>
      </div>

      {/* Products List */}
      <section className="section cinematic-products-bg">
        <div className="container">
          <div className="products-layout">
            {PRODUCTS.map((p, i) => (
              <div key={p.id} id={p.id} className={`product-block ${i % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="product-img-col">
                  <div className="parallax-img-container">
                    <img src={p.img} alt={p.name} className="product-img" />
                    <div className="product-img-overlay" />
                  </div>
                  <span className="product-img-tag">{p.imgTag}</span>
                </div>
                <div className="product-content">
                  <span className="section-tag gsap-reveal" style={{color: '#C9A84C'}}>{p.tag}</span>
                  <h2 className="product-name gsap-reveal" style={{color: '#fff'}}>{p.name}</h2>
                  <p className="product-desc gsap-reveal">{p.desc}</p>
                  <p className="product-specs-title gsap-reveal" style={{color: '#fff'}}>Key Specifications</p>
                  <ul className="product-specs">
                    {p.specs.map((s, j) => (
                      <li key={j} className="product-spec-row gsap-reveal">
                        <span className="spec-check">✓</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                  <div className="gsap-reveal">
                    <Link to="/contact" className="btn btn-gold">
                      Request a Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Solutions */}
      <section className="packaging-section cinematic-packaging-bg">
        <div className="container">
          <div className="packaging-inner">
            <div className="packaging-text">
              <span className="section-tag gsap-reveal">Tailored for Your Brand</span>
              <h2 className="packaging-heading gsap-reveal">Custom Private-Label Packaging Solutions</h2>
              <p className="packaging-desc gsap-reveal">
                We offer comprehensive white-label and private-label packaging solutions to help your brand stand out on the shelf. Our state-of-the-art facility ensures freshness, aroma, and shelf-life are perfectly preserved.
              </p>
              <div className="packaging-sizes gsap-reveal">
                <span className="size-badge">5 KG</span>
                <span className="size-badge">10 KG</span>
                <span className="size-badge">20 KG</span>
                <span className="size-badge">25 KG</span>
                <span className="size-badge">50 KG</span>
              </div>
              <p className="packaging-note gsap-reveal">Available in Non-Woven, BOPP, Jute, and PP Bags.</p>
              <div style={{marginTop: '2.5rem'}} className="gsap-reveal">
                <Link to="/contact" className="btn btn-outline-white">Discuss Packaging <ChevronRight size={16} /></Link>
              </div>
            </div>
            <div className="packaging-visual">
              {[['5 KG', 'Retail'], ['10 KG', 'Retail'], ['25 KG', 'HoReCa'], ['50 KG', 'Bulk']].map(([sz, type], i) => (
                <div key={sz} className="pack-visual-item gsap-reveal" style={{transitionDelay: `${i * 0.1}s`}}>
                  <span className="pack-size-big">{sz}</span>
                  <span className="pack-type">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
