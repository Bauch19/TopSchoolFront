import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ParticleCanvas = () => {
  const particleRef = useRef(null);

  useEffect(() => {
    let rainbow = 0;

    const handleMouseMove = (e) => {
      if (!particleRef.current) return;
      
      rainbow++;

      const particle = particleRef.current.cloneNode(true);
      particle.style.position = 'absolute';
      particle.style.pointerEvents = 'none';
      document.body.appendChild(particle);

      const size = Math.random() * 20 + 5;
      gsap.set(particle, {
        x: e.clientX - size / 2,
        y: e.clientY - size / 2,
        width: size,
        height: size,
        borderRadius: 9999,
        backgroundColor: `hsl(${rainbow}, 70%, 50%)`,
      });

      gsap.to(particle, {
        x: '+=random(-100,100)',
        y: '+=random(-100,100)',
        opacity: 0,
        duration: 'random(0.5,3)',
        ease: 'power2.out',
        onComplete: () => {
          particle.remove();
        },
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={particleRef} className='w-full h-screen' style={{ position: 'fixed', top: 0, }} />;
};

export default ParticleCanvas;
