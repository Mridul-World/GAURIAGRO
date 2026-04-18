import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Quote, ChevronLeft, ChevronRight, Star, MapPin, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutUs.css';

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  {
    name: 'Gagan Deep Gupta',
    role: 'Founder & CEO',
    img: '/gagan-deep-gupta.jpg',
  },
  {
    name: 'Kush Gupta',
    role: 'Managing Director',
    img: '/kush-gupta.jpg',
  },
];

const TESTIMONIALS = [
  {
    name: 'Ahmed Al-Fayed',
    role: 'Head Buyer, Gulf Foods LLC',
    location: 'Dubai, UAE',
    content: 'Gauri Agro has been our most reliable partner for Basmati imports. The grain length and aroma are consistently superior, meeting the strict standards of our Middle Eastern clientele. Their on-time delivery record is unmatched.',
    rating: 5,
  },
  {
    name: 'Chef Maria Rossi',
    role: 'Executive Chef',
    location: 'Milan, Italy',
    content: 'The 1121 Basmati from Gauri Agro is exceptional. Every batch cooks perfectly separate with that authentic aroma — our guests at the restaurant have noticed the difference. It\'s the only Basmati we use for our premium menu.',
    rating: 5,
  },
  {
    name: 'David Mwangi',
    role: 'Distribution Manager',
    location: 'Dar es Salaam, Tanzania',
    content: 'We distribute Gauri Agro\'s rice across Tanzania and the quality is consistently excellent. Their custom packaging solutions helped us establish a strong local brand. We appreciate their transparency and professional communication.',
    rating: 5,
  },
];

const VALUES = [
  { icon: '🌾', title: 'Farm-to-Ship Quality', desc: 'Direct farmer relationships ensuring pesticide-free procurement and grade-certified batches.' },
  { icon: '🌍', title: 'Global Standards', desc: 'APEDA registered, FSSAI compliant, and adhering to destination-country import norms.' },
  { icon: '🤝', title: 'Transparent Business', desc: 'Clear pricing, audit-ready documentation, and honest communication at every step.' },
  { icon: '📦', title: 'Custom Solutions', desc: 'Flexible MOQs, private-label packaging, and tailor-made logistics for every client.' },
];

const AboutUs = () => {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent(c => (c + 1) % TESTIMONIALS.length);

  useEffect(() => {
    let ctx = gsap.context(() => {
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
      
      // Values cards stagger
      gsap.fromTo(
        '.value-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.values-grid',
            start: 'top 85%',
          },
        }
      );
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
            <span>About Us</span>
          </div>
          <h1 className="page-title gsap-reveal">About Gauri Agro</h1>
          <p className="page-subtitle gsap-reveal">A legacy built on quality, transparency, and a relentless commitment to serving global markets.</p>
        </div>
      </div>

      {/* Director's Message */}
      <section className="section cinematic-section-bg">
        <div className="container">
          <div className="director-grid">
            <div className="director-img-col">
              <img src={TEAM[0].img} alt="Gagan Deep Gupta" className="director-img gsap-reveal" />
              <div className="director-img-badge gsap-reveal">
                <MapPin size={16} />
                Karnal, Haryana
              </div>
            </div>
            <div className="director-text-col">
              <span className="section-tag gsap-reveal" style={{color: '#C9A84C'}}>Founder's Message</span>
              <h2 className="section-heading section-heading-line gsap-reveal" style={{color: '#fff'}}>A Vision Built on Trust</h2>
              <div className="quote-bar gsap-reveal">
                <Quote size={32} className="quote-icon" />
              </div>
              <blockquote className="director-quote gsap-reveal" style={{color: '#ccc'}}>
                "Our primary goal behind creating GAURI AGRO is to cater to clients with reliable quality and cost-effective solutions... Using our intellectual and managerial prowess, we proudly claim of creating and responding to the needs of contemporary society, providing the best quality rice for people of each strata of the society."
              </blockquote>
              <div className="director-sig gsap-reveal">
                <div className="sig-line"></div>
                <div>
                  <p className="sig-name" style={{color: '#fff'}}>Mr. Gagan Deep Gupta</p>
                  <p className="sig-role" style={{color: '#C9A84C'}}>Founder & CEO, Gauri Agro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section cinematic-values-bg">
        <div className="container text-center">
          <span className="section-tag gsap-reveal" style={{color: '#C9A84C'}}>Our Core Values</span>
          <h2 className="section-heading section-heading-line gsap-reveal" style={{color: '#fff'}}>What We Stand For</h2>
          <p className="section-subheading gsap-reveal" style={{color: '#ccc'}}>Four principles that guide every decision — from farm to your shores.</p>
          <div className="grid grid-4 values-grid">
            {VALUES.map((v, i) => (
              <div key={i} className="value-card cinematic-glass-card">
                <div className="value-emoji">{v.icon}</div>
                <h3 className="value-title" style={{color: '#fff'}}>{v.title}</h3>
                <p className="value-desc" style={{color: '#ccc'}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section cinematic-team-bg">
        <div className="container text-center">
          <span className="section-tag gsap-reveal" style={{color: '#C9A84C'}}>Leadership</span>
          <h2 className="section-heading section-heading-line gsap-reveal" style={{color: '#fff'}}>Our Leadership Team</h2>
          <p className="section-subheading gsap-reveal" style={{color: '#ccc'}}>Experienced professionals driving Gauri Agro's global expansion and quality commitment.</p>
          <div className="grid grid-2 team-grid">
            {TEAM.map((m, i) => (
              <div key={i} className="team-card cinematic-glass-card gsap-reveal" style={{transitionDelay: `${i * 0.1}s`}}>
                <div className="team-img-wrap">
                  <img src={m.img} alt={m.name} className="team-img" />
                  <div className="team-hover-overlay">
                    <Globe size={28} />
                  </div>
                </div>
                <div className="team-body">
                  <h3 className="team-name" style={{color: '#fff'}}>{m.name}</h3>
                  <p className="team-role" style={{color: '#C9A84C'}}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section" style={{background: '#050505'}}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag gsap-reveal" style={{color: '#C9A84C'}}>Client Testimonials</span>
            <h2 className="section-heading section-heading-line gsap-reveal" style={{color: '#fff'}}>Trusted by Global Importers</h2>
          </div>
          <div className="testimonials-wrapper gsap-reveal">
            <button className="testi-arrow testi-prev" onClick={prev}><ChevronLeft size={22} /></button>

            <div className="testimonials-track-outer">
              <div className="testimonials-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="testi-slide">
                    <div className="testi-card">
                      <div className="testi-stars">
                        {[...Array(t.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                      </div>
                      <p className="testi-text">"{t.content}"</p>
                      <div className="testi-author">
                        <div>
                          <p className="testi-name">{t.name}</p>
                          <p className="testi-role">{t.role}</p>
                          <p className="testi-location"><MapPin size={12} /> {t.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="testi-arrow testi-next" onClick={next}><ChevronRight size={22} /></button>
          </div>

          <div className="testi-dots">
            {TESTIMONIALS.map((_, i) => (
              <button key={i} className={`testi-dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
