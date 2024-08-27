import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextAnimation2({ text, ...res }){
  const mainRef = useRef(null);
  const parallaxWordRef = useRef(null);
  const pwItemsRef = useRef([]);

  // useEffect(() => {
  //   const winH = 200;

  //   // Parallax word movement
  //   gsap.to(parallaxWordRef.current, {
  //     y: -20,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: mainRef.current,
  //       start: "top top",
  //       end: `+=${winH / 100}`,
  //       scrub: true,
  //     },
  //   }, "-=10");

  //   // PwItems shift effect
  //   pwItemsRef.current.forEach((item, index) => {
  //     const shiftH = Math.random() * 0.6 - 0.4;

  //     gsap.fromTo(
  //       item,
  //       { y: shiftH * winH / 2 },
  //       {
  //         y: 0,
  //         ease: "none",
  //         scrollTrigger: {
  //           trigger: mainRef.current,
  //           start: "center center",
  //           end: `+=${200}`,
  //           scrub: true,
  //         },
  //       },
  //       "-=10"
  //     );
  //   });
  // }, []);

  return(
    <div ref={mainRef} {...res}>
      <span ref={parallaxWordRef} className="text-white uppercase transition flex items-center text-center font-bold">
        <div ref={el => pwItemsRef.current[0] = el} className="transition" data-shift="-0.25">
          <div className="pw-letter h-image">
            <span className="symbol">L</span>
          </div>
        </div>
        <div ref={el => pwItemsRef.current[1] = el} className="transition" data-shift="0.15">
          <div className="pw-letter h-image">
            <span className="symbol">o</span>
          </div>
        </div>
        <div ref={el => pwItemsRef.current[2] = el} className="transition" data-shift="-0.3">
          <div className="pw-letter h-image">
            <span className="symbol text-transparent">{"_"}</span>
          </div>
        </div>
        <div ref={el => pwItemsRef.current[3] = el} className="transition" data-shift="0">
          <div className="pw-letter h-image">
            <span className="symbol">M</span>
          </div>
        </div>
        <div ref={el => pwItemsRef.current[4] = el} className="transition" data-shift="-0.35">
          <div className="pw-letter h-image">
            <span className="symbol">á</span>
          </div>
        </div>
        <div ref={el => pwItemsRef.current[5] = el} className="transition" data-shift="0.15">
          <div className="pw-letter h-image">
            <span className="symbol">s</span>
          </div>
        </div>
        <div ref={el => pwItemsRef.current[6] = el} className="transition" data-shift="-0.25">
          <div className="pw-letter h-image">
            <span className="symbol text-transparent">{"_"}</span>
          </div>
        </div>
        <div ref={el => pwItemsRef.current[7] = el} className="transition" data-shift="0.15">
          <div className="pw-letter h-image">
            <span className="symbol">L</span>
          </div>
        </div>
        <div ref={el => pwItemsRef.current[8] = el} className="transition" data-shift="-0.3">
          <div className="pw-letter h-image">
            <span className="symbol">e</span>
          </div>
        </div>
        <div ref={el => pwItemsRef.current[9] = el} className="transition" data-shift="0">
          <div className="pw-letter h-image">
            <span className="symbol">í</span>
          </div>
        </div>
        <div ref={el => pwItemsRef.current[10] = el} className="transition" data-shift="-0.35">
          <div className="pw-letter h-image">
            <span className="symbol">d</span>
          </div>
        </div>
        <div ref={el => pwItemsRef.current[10] = el} className="transition" data-shift="-0.25">
          <div className="pw-letter h-image">
            <span className="symbol">o</span>
          </div>
        </div>
      </span>
    </div>
  )
}
