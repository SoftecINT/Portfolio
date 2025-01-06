import React, { useEffect, useLayoutEffect } from 'react';
import '../ZoominZoomout/ZoominZoomout.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import logo from '../../assets/whitelogo.svg';

const ZoominZoomout = () => {
  useEffect(() => {
    if (window.gsap && window.ScrollTrigger) {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation for zoom-in
    gsap.to("#zoom-in img", {
      scale: 550,
      duration: 8,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "#zoom-in",
        pin: true,
        end: "100%",
        scrub: 1,
        onLeave: () => {
          setTimeout(() => {
            document.querySelector("#zoom-out").scrollIntoView({ behavior: "smooth" });
          }, 1000); // Delay before scrolling to zoom-out section
        },
      },
    });

    // ScrollTrigger for zoom-out to trigger scrolling back to zoom-in
    ScrollTrigger.create({
      trigger: "#zoom-out",
      start: "top top",
      onEnterBack: () => {
        document.querySelector("#zoom-in").scrollIntoView({ behavior: "smooth" });
      },
    });
  }
  }, []); // Empty dependency array to run only once when component mounts

  // GSAP animation for logo fall effect with shadow (bounce effect)
  useLayoutEffect(() => {
    // Ensure the logo image is fully loaded before animating
    const imgElement = document.querySelector("#zoom-in img");
    if (imgElement.complete) {
      gsap.from(imgElement, {
        y: -200,   // Start the logo off-screen at the top
        opacity: 0, // Make it invisible at the start
        duration: 1.5, // Duration of the animation
        ease: "bounce.out", // Bouncing effect like a falling rock
        delay: 0.5, // Delay a little after the page load
      });
    } else {
      imgElement.onload = () => {
        gsap.from(imgElement, {
          y: -200,
          opacity: 0,
          duration: 1.5,
          ease: "bounce.out",
          delay: 0.5,
        });
      };
    }
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div>
      <section id="zoom-in">
        <div><img src={logo} alt="Logo" /></div>
        
        <div className='mouse-btn'>
    <span className="scroll-btn">
        <a href="#">
            <span className="mouse">
                <span></span>
            </span>
        </a>
        <p>scroll me</p>
    </span>
</div>

      </section>
        
      
    </div>
  );
}

export default ZoominZoomout;
