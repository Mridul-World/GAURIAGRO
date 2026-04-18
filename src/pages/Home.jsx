import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronRight, ShieldCheck, Globe, FileCheck } from 'lucide-react';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Farm to Fork',
    desc: 'Pesticide-free procurement and multi-stage sorting for an immaculate grain.',
  },
  {
    icon: Globe,
    title: 'Global Supply',
    desc: 'Seamless logistics handling exports to 40+ countries effortlessly.',
  },
  {
    icon: FileCheck,
    title: 'Certified',
    desc: 'Full APEDA & FSSAI compliance for audit-ready documentation.',
  },
];

const Home = () => {
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const floatRef = useRef(null);
  const crystalRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Hero Parallax effect
      gsap.to('.hero-parallax-bg', {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Floating grains
      gsap.to('.floating-grain', {
        y: 'random(-50, 50)',
        x: 'random(-30, 30)',
        rotation: 'random(-180, 180)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.1,
      });

      // Liquid crystal / Dreamy text reveal on scroll
      gsap.utils.toArray('.dreamy-reveal').forEach((elem) => {
        gsap.fromTo(
          elem,
          { opacity: 0, y: 100, filter: 'blur(20px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
            },
          }
        );
      });

      // Crystal Display Section Parallax
      gsap.to('.crystal-layer-back', {
        y: -100,
        scrollTrigger: {
          trigger: crystalRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
      gsap.to('.crystal-layer-front', {
        y: -300,
        scrollTrigger: {
          trigger: crystalRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="home-page" ref={heroRef}>
      
      {/* ── Cinematic Hero ──────────────────────────────────── */}
      <section className="cinematic-hero">
        <div className="hero-parallax-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }} />
        <div className="hero-overlay-gradient" />
        
        {/* Floating Decorative Grains */}
        <div className="floating-grain grain-1" />
        <div className="floating-grain grain-2" />
        <div className="floating-grain grain-3" />
        <div className="floating-grain grain-4" />
        
        <div className="container hero-content" ref={heroTextRef}>
          <div className="hero-text-box">
            <span className="hero-tag dreamy-reveal">The Pinnacle of Basmati</span>
            <h1 className="hero-heading dreamy-reveal">Unveiling The Royal Grain</h1>
            <p className="hero-sub dreamy-reveal">Step inside our world. From the lush green paddies of Karnal to state-of-the-art milling technology, we craft perfection.</p>
            <div className="hero-actions dreamy-reveal">
              <Link to="/products" className="btn btn-primary">Explore Products <ArrowRight size={16} /></Link>
              <Link to="/about" className="btn btn-outline-white">The Mill Experience <ChevronRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Liquid Crystal Showcase ────────────────────────── */}
      <section className="crystal-section" ref={crystalRef}>
        <div className="crystal-layer-back" />
        <div className="container crystal-content">
          <span className="section-tag dreamy-reveal">A Symphony of Processing</span>
          <h2 className="crystal-heading dreamy-reveal">Liquid Gold.<br />Crystal Clarity.</h2>
          <p className="crystal-sub dreamy-reveal">Our Sortex machines act like liquid crystal displays, reading each grain to deliver 100% purity, unbroken length, and pristine whiteness.</p>
        </div>
        <div className="crystal-layer-front" />
      </section>

      {/* ── Floating Stats & Features ──────────────────────── */}
      <section className="floating-features" ref={floatRef}>
        <div className="container">
          <div className="grid grid-3 dreamy-reveal">
            {FEATURES.map((f, i) => (
              <div key={i} className="glass-card">
                <div className="glass-icon"><f.icon size={36} strokeWidth={1} /></div>
                <h3 className="glass-title">{f.title}</h3>
                <p className="glass-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Immersive Products Preview ─────────────────────── */}
      <section className="immersive-products">
        <div className="immersive-bg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }} />
        <div className="immersive-overlay" />
        <div className="container text-center">
          <span className="section-tag dreamy-reveal" style={{ color: '#C9A84C' }}>The Collection</span>
          <h2 className="section-heading dreamy-reveal" style={{ color: '#fff' }}>Grains of Heritage</h2>
          
          <div className="grid grid-3 immersive-grid">
            {[
              { id: '1121', name: '1121 Basmati', img: 'https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
              { id: '1509', name: '1509 Basmati', img: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
              { id: 'non-basmati', name: 'Non-Basmati', img: 'https://images.unsplash.com/photo-1568051243851-f9b136140f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
            ].map((p, i) => (
              <div key={p.id} className="hologram-card dreamy-reveal">
                <div className="hologram-img-wrap">
                  <img src={p.img} alt={p.name} className="hologram-img" />
                  <div className="hologram-scanline" />
                </div>
                <h3 className="hologram-title">{p.name}</h3>
                <Link to={`/products#${p.id}`} className="hologram-link">Discover <ChevronRight size={14} /></Link>
              </div>
            ))}
          </div>
          <div style={{marginTop:'4rem'}} className="dreamy-reveal">
            <Link to="/products" className="btn btn-gold">View Full Catalogue <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
