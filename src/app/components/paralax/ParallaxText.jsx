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
    
        // const timeline = gsap.timeline({ repeat: -1, yoyo: true });
    
        // Main parallax effect
        gsap.to(mainRef.current, {
            y: -20,
            ease: "none",
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: `+=${20}`,
                scrub: true,
            },
        });
    
        // Image opacity effect
        gsap.to(tercerRef.current, {
            y: -25,
            ease: "none",
            duration: 2,
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: `+=${25}`,
                scrub: true,
            },
        });
    
        // Parallax word movement
        gsap.to(parallaxWordRef.current, {
            y: -winH / 5,
            ease: "none",
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: `+=${winH / 10}`,
                scrub: true,
            },
        }, "-=10");
    
        // PwItems shift effect
        pwItemsRef.current.forEach((item, index) => {
          const shiftH = item.getAttribute('data-shift');
    
          gsap.fromTo(
            item,
            { y: shiftH * winH / 2 },
            {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: "top top",
                    end: `+=${winH / 2}`,
                    scrub: true,
                },
            },
            "-=10"
          );
        });
      }, []);

  return (
    <div ref={mainRef} className="w-full max-w-fit mx-auto h-fit flex transition flex-col justify-center items-center !z-10 gap-0 mt-4 pt-20">
      <p className="uppercase text-white text-[25px] transition md:text-[40px] font-[200] w-full text-left">
        El poder del
      </p>
      <div ref={headerContainerRef}>
        <span ref={parallaxWordRef} className="text-white uppercase text-[45px] md:text-[80px] transition -mb-10 flex items-center text-center font-bold">
            {/* Mindfulness */}
            <div ref={el => pwItemsRef.current[0] = el} className="pw-item pw-item-1" data-shift="-0.25">
              <div className="pw-letter h-image">
                <span className="symbol">M</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[1] = el} className="pw-item pw-item-2" data-shift="0.15">
              <div className="pw-letter h-image">
                <span className="symbol">i</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[2] = el} className="pw-item pw-item-3" data-shift="-0.3">
              <div className="pw-letter h-image">
                <span className="symbol">n</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[3] = el} className="pw-item pw-item-4" data-shift="0">
              <div className="pw-letter h-image">
                <span className="symbol">d</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[4] = el} className="pw-item pw-item-5" data-shift="-0.35">
              <div className="pw-letter h-image">
                <span className="symbol">f</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[5] = el} className="pw-item pw-item-6" data-shift="0.15">
              <div className="pw-letter h-image">
                <span className="symbol">u</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[6] = el} className="pw-item pw-item-7" data-shift="-0.25">
              <div className="pw-letter h-image">
                <span className="symbol">l</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[7] = el} className="pw-item pw-item-8" data-shift="0.15">
              <div className="pw-letter h-image">
                <span className="symbol">n</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[8] = el} className="pw-item pw-item-9" data-shift="-0.3">
              <div className="pw-letter h-image">
                <span className="symbol">e</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[9] = el} className="pw-item pw-item-10" data-shift="0">
              <div className="pw-letter h-image">
                <span className="symbol">s</span>
              </div>
            </div>
            <div ref={el => pwItemsRef.current[10] = el} className="pw-item pw-item-11" data-shift="-0.35">
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
