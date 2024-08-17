import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Button from "../buttons/Button";
import TextAnimation from '@/app/components/texts/TextAnimation';

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

      const movementX = (mousePos.left - offsetWidth / 2) * strength / offsetWidth;
      const movementY = (mousePos.top - offsetHeight / 2) * strength / offsetHeight;
      element.style.transform = `translate(${movementX}px, ${movementY}px)`;
    });
  };

  const handleDataParallaxAxe = () => {
    const dataParallaxAxe = containerRef.current?.dataset.parallaxAxe;
    setAxes({ x: true, y: true });
  };

  useEffect(() => {
    handleDataParallaxAxe();
  }, [containerRef]);

  return (
    <div ref={containerRef} className="parallax-mouse h-screen overflow-hidden bg-[url(/bg-home.jpg)] !backdrop-blur-lg bg-center bg-cover w-full pt-20 md:py-20 relative felx flex-col justify-center gap-10 items-center" onMouseMove={handleMouseMove}>
      <Image 
        src={'/bg-home.jpg'}
        alt="titulo"
        fill
        priority
        quality={100}
        className="w-full h-full z-0 parallax-element object-cover object-center"
        data-parallax-strength="50"
      />
      <div className='w-full h-20 mt-20 relative'>
        <Image 
          src={'/logo-guia.png'}
          alt="titulo guia"
          width={960}
          height={540}
          priority
          quality={75}
          className="w-full max-w-[700px] mx-auto px-5 h-auto z-[10] -top-20 left-1/2 -translate-x-1/2 absolute"
        />
      </div>
      <div className='flex flex-col gap-1'>
        <TextAnimation className="text-white uppercase text-xl flex justify-center items-center font-semibold tracking-[5px] text-center">
          DONDE ENCONTRAR LA
        </TextAnimation>
        <TextAnimation className="text-white uppercase text-xl flex justify-center items-center font-semibold tracking-[5px] text-center">
          MEJOR OFERTA EDUCATIVA
        </TextAnimation>
      </div>
      <div className='w-full max-w-fit mx-auto mt-7'>
        <Button onClick={() => setOpen(true)} className={'!z-10'}>
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
        className="w-full max-w-[500px] px-5 h-auto z-0 parallax-element md:absolute left-1/3 -translate-x-1/3 md:-bottom-[10%]"
        data-parallax-strength="200"
      />
    </div>
  );
}