import { motion, useAnimationControls } from "framer-motion";
import React, { ReactNode, useRef, useEffect, useState } from "react";

export default function MarqueeAnimation({
    children,
    speed = 20,
    direction = "left",
}) {
    const [contentWidth, setContentWidth] = useState(0);
    const [repeatCount, setRepeatCount] = useState(2);
    const contentRef = useRef(null);
    const containerRef = useRef(null);
    const controls = useAnimationControls();
  
    useEffect(() => {
      if (contentRef.current && containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const singleContentWidth = contentRef.current.offsetWidth;
        setContentWidth(singleContentWidth);
  
        const needed = Math.ceil(containerWidth / singleContentWidth) + 1;
        setRepeatCount(needed);
      }
    }, [children]);
  
    useEffect(() => {
      if (contentWidth > 0) {
        const duration = contentWidth / speed;
        controls.start({
          x: direction === "left" ? -contentWidth : 0,
          transition: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        });
      }
    }, [contentWidth, speed, direction, controls]);
  
    return (
      <div
        ref={containerRef}
        className="w-full m-auto overflow-hidden font-bold text-[16px] lg:text-[40px] text-white brightness-110 capitalize"
      >
        <motion.div className="flex whitespace-nowrap" animate={controls}>
          {[...Array(repeatCount)].map((_, index) => (
            <div
              key={index}
              ref={index === 0 ? contentRef : undefined}
              className="inline-flex items-center gap-4 px-4"
            >
              {children}
            </div>
          ))}
        </motion.div>
      </div>
    );
};