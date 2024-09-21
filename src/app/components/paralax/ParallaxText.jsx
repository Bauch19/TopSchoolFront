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
  
    // useEffect(() => {
    //     const winH = 200;
    
    //     // Parallax word movement
    //     gsap.to(parallaxWordRef.current, {
    //         y: 0,
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: mainRef.current,
    //             start: "top top",
    //             end: `+=${winH / 100}`,
    //             scrub: true,
    //         },
    //     }, "-=10");
    
    //     // PwItems shift effect
    //     pwItemsRef.current.forEach((item, index) => {
    //       const shiftH = item.getAttribute('data-shift');
    
    //       gsap.fromTo(
    //         item,
    //         { y: 0 },
    //         {
    //             y: shiftH * winH / 2,
    //             ease: "none",
    //             scrollTrigger: {
    //                 trigger: mainRef.current,
    //                 start: "-=100",
    //                 end: `+=${0.2}`,
    //                 scrub: true,
    //             },
    //         },
    //         "-=1"
    //       );
    //     });
    //   }, []);

  return (
    <div ref={mainRef} className="w-full max-w-fit mx-auto h-fit flex transition flex-col justify-center items-center !z-10 gap-0">
      <p className="uppercase text-white text-[25px] transition md:text-[40px] font-[200] w-full text-left">
        El poder del
      </p>
      <span ref={parallaxWordRef} className="text-white uppercase text-[45px] md:text-[100px] lg:text-[140px] transition flex items-center text-center font-bold lg:-my-7">
        MINDFULNESS
      </span>
      <p ref={tercerRef} className="uppercase text-white text-[25px] transition md:text-[40px] font-[200] w-full text-right">
        en la infancia
      </p>
    </div>
  );
};

export default ParallaxText;
