import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxText = () => {
    const mainRef = useRef(null);
    const headerContainerRef = useRef(null);
    const tercerRef = useRef(null);
    const parallaxWordRef = useRef(null);
    const pwItemsRef = useRef([]);
  
    useEffect(() => {
        const winH = 200;
    
        // Parallax word movement
        gsap.to(parallaxWordRef.current, {
            y: 0,
            ease: "none",
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: `+=${winH / 100}`,
                scrub: true,
            },
        }, "-=10");
    
        // PwItems shift effect
        pwItemsRef.current.forEach((item, index) => {
          const shiftH = item.getAttribute('data-shift');
    
          gsap.fromTo(
            item,
            { y: 0 },
            {
                y: shiftH * winH / 2,
                ease: "none",
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "-=100",
                    end: `+=${0.2}`,
                    scrub: true,
                },
            },
            "-=1"
          );
        });
      }, []);

  return (
    <div ref={mainRef} className="w-full max-w-fit mx-auto h-fit flex transition flex-col justify-center items-center !z-10 gap-0">
      <p className="uppercase text-white text-[25px] transition md:text-[40px] font-[200] w-full text-left">
        El poder del
      </p>
      <div ref={headerContainerRef}>
        <span ref={parallaxWordRef} className="text-white uppercase text-[45px] md:text-[140px] transition flex items-center text-center font-bold lg:-my-7">
            {/* Mindfulness */}
            <div ref={el => pwItemsRef.current[0] = el} className="transition" data-shift="-0.25">
              <div className="pw-letter h-image">
                <span className="symbol">M</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[1] = el} className="transition" data-shift="0.15">
              <div className="pw-letter h-image">
                <span className="symbol">i</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[2] = el} className="transition" data-shift="-0.3">
              <div className="pw-letter h-image">
                <span className="symbol">n</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[3] = el} className="transition" data-shift="0">
              <div className="pw-letter h-image">
                <span className="symbol">d</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[4] = el} className="transition" data-shift="-0.35">
              <div className="pw-letter h-image">
                <span className="symbol">f</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[5] = el} className="transition" data-shift="0.15">
              <div className="pw-letter h-image">
                <span className="symbol">u</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[6] = el} className="transition" data-shift="-0.25">
              <div className="pw-letter h-image">
                <span className="symbol">l</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[7] = el} className="transition" data-shift="0.15">
              <div className="pw-letter h-image">
                <span className="symbol">n</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[8] = el} className="transition" data-shift="-0.3">
              <div className="pw-letter h-image">
                <span className="symbol">e</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[9] = el} className="transition" data-shift="0">
              <div className="pw-letter h-image">
                <span className="symbol">s</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[10] = el} className="transition" data-shift="-0.35">
              <div className="pw-letter h-image">
                <span className="symbol">s</span>
              </div>
            </div>
        </span>
      </div>
      <p ref={tercerRef} className="uppercase text-white text-[25px] transition md:text-[40px] font-[200] w-full text-right">
        en la infancia
      </p>
    </div>
  );
};

export default ParallaxText;
