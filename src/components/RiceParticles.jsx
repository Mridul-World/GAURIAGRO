import React, { useEffect, useRef } from 'react';
import './RiceParticles.css';

const RiceParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Grain {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 0.4 + 0.1;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.15 + 0.03;
        this.rotation = Math.random() * Math.PI;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.wobble = Math.random() * 2;
        this.wobbleSpeed = Math.random() * 0.01 + 0.005;
        this.wobblePhase = Math.random() * Math.PI * 2;
      }
      update() {
        this.y += this.speedY;
        this.wobblePhase += this.wobbleSpeed;
        this.x += this.speedX + Math.sin(this.wobblePhase) * this.wobble * 0.02;
        this.rotation += this.rotationSpeed;
        if (this.y > canvas.height + 20) {
          this.reset();
          this.y = -10;
        }
      }
      draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillStyle = `rgba(201, 168, 76, ${this.opacity})`;
        ctx.beginPath();
        // Elongated rice grain shape
        ctx.ellipse(0, 0, this.size * 0.4, this.size * 1.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    const count = Math.min(Math.floor(window.innerWidth / 15), 80);
    for (let i = 0; i < count; i++) {
      const g = new Grain();
      g.y = Math.random() * canvas.height; // Spread initially
      particles.push(g);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw(ctx);
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="rice-particles" />;
};

export default RiceParticles;
