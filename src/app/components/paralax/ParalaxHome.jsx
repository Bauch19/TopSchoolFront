import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from "../buttons/Button";

export default function ParalaxHome({ open, setOpen }){
  const containerRef = useRef(null);
  const [elements, setElements] = useState([]);
  const [axes, setAxes] = useState({ x: true, y: true });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateElements = () => {
      setElements(container.querySelectorAll('.parallax-element'));
    };

    updateElements();

    window.addEventListener('resize', updateElements);

    return () => {
      window.removeEventListener('resize', updateElements);
    };
  }, [containerRef]);

  const handleMouseMove = (event) => {
    if (!containerRef.current || !elements.length) return;

    const container = containerRef.current;
    const { offsetWidth, offsetHeight } = container;
    const mousePos = {
      left: event.pageX - container.offsetLeft,
      top: event.pageY - container.offsetTop,
    };

    elements.forEach((element) => {
      const strength = parseInt(element.dataset.parallaxStrength, 10);

      if (axes.x) {
        const movementX = (mousePos.left - offsetWidth / 2) * strength / offsetWidth;
        element.style.transform = `translateX(${movementX}px)`;
      }

      if (axes.y) {
        const movementY = (mousePos.top - offsetHeight / 2) * strength / offsetHeight;
        element.style.transform = `translateY(${movementY}px)`;
      }
    });
  };

  const handleDataParallaxAxe = () => {
    const dataParallaxAxe = containerRef.current?.dataset.parallaxAxe;
    if (dataParallaxAxe === 'x') {
      setAxes({ x: true, y: false });
    } else if (dataParallaxAxe === 'y') {
      setAxes({ x: false, y: true });
    } else {
      setAxes({ x: true, y: true });
    }
  };

  useEffect(() => {
    handleDataParallaxAxe();
  }, [containerRef]);

  return (
    <div ref={containerRef} className="parallax-mouse bg-[url(/bg-home.jpg)] bg-no-repeat h-screen bg-center bg-cover pt-20 md:py-20 relative felx flex-col justify-between gap-10 items-center" onMouseMove={handleMouseMove}>
      <Image 
        src={'/logo-guia.png'}
        alt="titulo"
        width={960}
        height={540}
        priority
        quality={100}
        className="w-full max-w-[700px] mx-auto px-5 h-auto z-[1] parallax-element top-4"
        data-parallax-strength="30"
      />
      <p className="text-white uppercase text-xl font-semibold tracking-[5px] text-center parallax-element top-10" data-parallax-strength="60">
        DONDE ENCONTRAR LA<br /> MEJOR OFERTA EDUCATIVA
      </p>
      <div className='w-full max-w-fit mx-auto parallax-element top-20 mt-7' data-parallax-strength="80">
        <Button onClick={() => setOpen(true)}>
          Suscribete
        </Button>
      </div>
      <Image 
        src={'/people/guia-img.png'}
        alt="personas"
        width={960}
        height={540}
        priority
        quality={100}
        className="w-full max-w-[500px] mx-auto px-5 h-auto z-[1] parallax-element -bottom-2"
        data-parallax-strength="100"
      />
      {/* <Image 
        src={'/people/guia-img.png'}
        alt="personas"
        width={960}
        height={540}
        priority
        quality={100}
        className="w-full max-w-[500px] mx-auto px-5 h-auto z-[1] absolute bottom-0"
      /> */}
    </div>
  );
}