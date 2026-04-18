import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CinematicIntro from './components/CinematicIntro';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import RiceParticles from './components/RiceParticles';

import Home from './pages/Home';
import Products from './pages/Products';
import Infrastructure from './pages/Infrastructure';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

gsap.registerPlugin(ScrollTrigger);

// Scroll-to-top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Page transition wrapper
function PageTransition({ children }) {
  const location = useLocation();
  
  useEffect(() => {
    gsap.fromTo('.page-content', 
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    );
  }, [location.pathname]);

  return <div className="page-content">{children}</div>;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <RiceParticles />
      <main>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

function App() {
  const [introSeen, setIntroSeen] = useState(() => {
    return sessionStorage.getItem('gauri_intro_seen') === 'true';
  });
  const [introComplete, setIntroComplete] = useState(introSeen);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    document.body.style.cursor = 'auto';
  };

  return (
    <Router>
      <div className="app">
        {!introComplete && (
          <CinematicIntro onComplete={handleIntroComplete} />
        )}
        <div className={`main-site ${introComplete ? 'visible' : 'hidden'}`}>
          <AppContent />
        </div>
      </div>
    </Router>
  );
}

export default App;
