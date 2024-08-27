import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = ({ children, ...res }) => {
  const textRef = useRef(null);

  // useEffect(() => {
  //   const animationText = () => {
  //     const theText = textRef.current;
  //     if (!theText) return;

  //     let newText = "";
  //     for (let i = 0; i < theText.innerText.length; i++) {
  //       newText += "<div>";
  //       if (theText.innerText[i] === " ") {
  //         newText += "&nbsp;";
  //       } else {
  //         newText += theText.innerText[i];
  //       }
  //       newText += "</div>";
  //     }

  //     theText.innerHTML = newText;
  //     const targetsDiv = theText.querySelectorAll("div");

  //     gsap.fromTo(
  //       targetsDiv,
  //       { opacity: 0, y: 90 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         ease: "elastic.out(1.2, 0.5)",
  //         stagger: 0.03,
  //         duration: 2,
  //         scrollTrigger: {
  //           trigger: theText,
  //           start: "top 80%",
  //           end: "bottom 60%",
  //           toggleActions: "play none none none",
  //         },
  //       }
  //     );
  //   };

  //   animationText();
  // }, []);

  return (
    <div ref={textRef} {...res}>
      {children}
    </div>
  );
};

export default TextAnimation;
