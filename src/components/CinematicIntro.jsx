import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './CinematicIntro.css';

const CinematicIntro = ({ onComplete }) => {
  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const skipIntro = () => {
    if (timelineRef.current) {
      timelineRef.current.progress(1);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const tl = gsap.timeline({
      onUpdate: () => setProgress(Math.round(tl.progress() * 100)),
      onComplete: () => {
        sessionStorage.setItem('gauri_intro_seen', 'true');
        onComplete();
      },
    });

    timelineRef.current = tl;

    // ─── Scene 1: The Origin ───────────────────────────
    tl.set('.scene-1', { opacity: 1, zIndex: 3 })
      .set('.scene-1 .scene-bg', { scale: 1.3, opacity: 0 })
      // Fade in the background image
      .to('.scene-1 .scene-bg', { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' })
      // Light leak flash
      .fromTo('.scene-1 .light-leak', { opacity: 0 }, { opacity: 0.6, duration: 0.8, ease: 'power1.inOut' }, '-=0.5')
      .to('.scene-1 .light-leak', { opacity: 0, duration: 0.8, ease: 'power1.inOut' })
      // Text reveal
      .fromTo('.scene-1 .scene-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
      // Subtle Ken Burns zoom continues
      .to('.scene-1 .scene-bg', { scale: 1.08, duration: 2.5, ease: 'none' }, '-=1.5')
      // Fade out scene 1 text
      .to('.scene-1 .scene-text', { opacity: 0, y: -20, duration: 0.6, ease: 'power2.in' })

    // ─── Scene 2: The Purity ──────────────────────────
      .set('.scene-2', { opacity: 1, zIndex: 4 })
      .set('.scene-2 .scene-bg', { scale: 1.2, opacity: 0 })
      // Crossfade scene 2 background over scene 1
      .to('.scene-2 .scene-bg', { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' }, '-=0.4')
      .set('.scene-1', { opacity: 0 }) // hide scene 1 entirely
      // Scan line effect
      .fromTo('.scene-2 .scan-line', { top: '-5%' }, { top: '105%', duration: 2.5, ease: 'none' }, '-=0.5')
      // Text reveal
      .fromTo('.scene-2 .scene-text', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=2')
      // Ken Burns pan
      .to('.scene-2 .scene-bg', { scale: 1.1, x: -20, duration: 3, ease: 'none' }, '-=3')
      // Fade out scene 2 text
      .to('.scene-2 .scene-text', { opacity: 0, y: -20, duration: 0.6, ease: 'power2.in' })

    // ─── Scene 3: Singular Masterpiece & Brand Reveal ──
      .set('.scene-3', { opacity: 1, zIndex: 5 })
      .set('.scene-3 .scene-bg', { scale: 1.15, opacity: 0 })
      // Crossfade scene 3 background over scene 2
      .to('.scene-3 .scene-bg', { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' }, '-=0.4')
      .set('.scene-2', { opacity: 0 }) // hide scene 2
      // Light leak burst
      .fromTo('.scene-3 .light-leak-gold', { opacity: 0, scale: 0.5 }, { opacity: 0.7, scale: 1.5, duration: 1.2, ease: 'power2.out' }, '-=0.5')
      .to('.scene-3 .light-leak-gold', { opacity: 0, scale: 2, duration: 1, ease: 'power1.in' })
      // Single glowing grain morphs into logo
      .fromTo('.scene-3 .morph-grain', { opacity: 0, scale: 0.1, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'power3.out' }, '-=1')
      .to('.scene-3 .morph-grain', { opacity: 0, scale: 2, filter: 'blur(10px)', duration: 0.8, ease: 'power2.inOut' }, '+=0.5')
      .fromTo('.scene-3 .brand-logo-icon', { opacity: 0, scale: 0.3, rotation: -10 }, { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: 'back.out(1.4)' }, '-=0.4')
      .fromTo('.scene-3 .brand-name', { opacity: 0, y: 25, letterSpacing: '20px' }, { opacity: 1, y: 0, letterSpacing: '8px', duration: 1, ease: 'power3.out' }, '-=0.5')
      .fromTo('.scene-3 .brand-tagline', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      .fromTo('.scene-3 .brand-subtitle', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      // Hold on logo
      .to({}, { duration: 1.5 })
      // Ken Burns subtle zoom
      .to('.scene-3 .scene-bg', { scale: 1.05, duration: 4, ease: 'none' }, '-=4')

    // ─── Final Dissolve ────────────────────────────────
      // Film grain intensifies
      .to('.film-grain', { opacity: 0.12, duration: 0.5 })
      // Everything slides up and fades
      .to('.scene-3 .brand-content', { y: -60, opacity: 0, duration: 1, ease: 'power3.in' })
      .to('.intro-container', { 
        opacity: 0, 
        duration: 0.8, 
        ease: 'power2.inOut',
      })
      // Skip button fades with everything
      .to('.skip-btn', { opacity: 0, duration: 0.3 }, '-=0.8');

    // Hide cursor during intro
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div className="intro-container" ref={containerRef}>
      {/* Film Grain Overlay */}
      <div className="film-grain" />

      {/* Vignette */}
      <div className="vignette" />

      {/* Progress Bar */}
      <div className="intro-progress-bar">
        <div className="intro-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Skip Button */}
      <button className="skip-btn" onClick={skipIntro}>
        Skip Intro →
      </button>

      {/* ─── Scene 1: The Origin ─────────────────────── */}
      <div className="intro-scene scene-1">
        <img 
          src="/scene1-paddy.png" 
          alt="Paddy Field" 
          className="scene-bg" 
        />
        <div className="light-leak light-leak-1" />
        <div className="scene-content">
          <p className="scene-text scene-text-serif">"Nurtured by nature..."</p>
        </div>
      </div>

      {/* ─── Scene 2: The Purity ────────────────────── */}
      <div className="intro-scene scene-2">
        <img 
          src="/scene2-rice.png" 
          alt="Rice Grains" 
          className="scene-bg" 
        />
        <div className="scan-line" />
        <div className="scene-content">
          <p className="scene-text scene-text-serif">"...perfected for the world."</p>
        </div>
      </div>

      {/* ─── Scene 3: Brand Reveal ───────────────────── */}
      <div className="intro-scene scene-3">
        <img
          src="/scene3-grain.png"
          alt="Single Rice Grain"
          className="scene-bg"
        />
        <div className="scene-dark-overlay" />
        <div className="light-leak light-leak-gold" />
        <div className="scene-content brand-content">
          <div className="morph-grain">
             {/* A single glowing white grain SVG */}
             <svg viewBox="0 0 40 100" width="40" height="100">
               <ellipse cx="20" cy="50" rx="10" ry="40" fill="#fff" opacity="0.9" filter="drop-shadow(0px 0px 15px rgba(255,255,255,0.8))"/>
             </svg>
          </div>
          <div className="brand-logo-icon">
            {/* Wheat stalk SVG */}
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="80" height="80">
              <path d="M40 8 L40 72" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M40 20 C30 14, 22 18, 20 26 C28 24, 34 18, 40 20Z" fill="#C9A84C" opacity="0.9"/>
              <path d="M40 30 C28 24, 18 28, 16 38 C26 34, 34 28, 40 30Z" fill="#C9A84C" opacity="0.8"/>
              <path d="M40 40 C28 34, 18 38, 16 48 C26 44, 34 38, 40 40Z" fill="#C9A84C" opacity="0.7"/>
              <path d="M40 20 C50 14, 58 18, 60 26 C52 24, 46 18, 40 20Z" fill="#C9A84C" opacity="0.9"/>
              <path d="M40 30 C52 24, 62 28, 64 38 C54 34, 46 28, 40 30Z" fill="#C9A84C" opacity="0.8"/>
              <path d="M40 40 C52 34, 62 38, 64 48 C54 44, 46 38, 40 40Z" fill="#C9A84C" opacity="0.7"/>
              <ellipse cx="40" cy="12" rx="5" ry="7" fill="#C9A84C" opacity="0.95"/>
            </svg>
          </div>
          <h1 className="brand-name">GAURI AGRO</h1>
          <p className="brand-tagline">Best Quality Food</p>
          <div className="brand-divider" />
          <p className="brand-subtitle">The pure essence of Karnal</p>
        </div>
      </div>
    </div>
  );
};

export default CinematicIntro;
