import React,{ useRef } from 'react'
import './Services.css'
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { div } from 'framer-motion/client';
import Horizontal from '../Horizontal/Horizontal'


import mockup2 from '../../assets/graphicdesign.jpg'
import mockup3 from '../../assets/appdevelopment.jpg'
import mockup4 from '../../assets/webdesigning.jpg'
import mockup1 from '../../assets/webdevelopment.jpg'
import mockup5 from '../../assets/seo.jpg'


const Services = () => {
  return (
    <div>
    <div className="home-container">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape circle-small"></div>
        <h1>Our Services</h1>
        {/* <p>We are digital pioneers on the leading edge of low-code development. Helping ambitious brands to outperform in the next generation of digital experiences.</p> */}
    </div>

<Horizontal/>

    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="UI/UX &nbsp; Design"
          
          imgSrc={mockup4}
          href="/uiuxdesign"
        />
        <Link
          heading="Graphic &nbsp; Designing"
                    
          imgSrc={mockup2}
          href="graphicdesign"
        />
        <Link
          heading="Web &nbsp;Development"
                         
          imgSrc={mockup1}
          href="/webdevelopment"
        />
        <Link
          heading="Application &nbsp; Development"
                    
          imgSrc={mockup3}
          href="/appdevelopment"
        />
        <Link
          heading="Digital &nbsp; Marketing"
                    
          imgSrc={mockup5}
          href="/digitalmarketing"
        />
        <br /><br /><br /><br /> <br />
      </div>
    </section>
    </div>
  )
}

const Link = ({ heading, imgSrc, subheading, href }) => {
    const ref = useRef(null);
  
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
  
    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);
  
    const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
  
      const width = rect.width;
      const height = rect.height;
  
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
  
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
  
      x.set(xPct);
      y.set(yPct);
    };

    return (
        <motion.a
          href={href}
          ref={ref}
          onMouseMove={handleMouseMove}
          initial="initial"
          whileHover="whileHover"
          className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
        >
          <div>
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: -16 },
              }}
              transition={{
                type: "spring",
                staggerChildren: 0.075,
                delayChildren: 0.25,
              }}
              className="relative z-10 block text-1xl sm:text-2xl md:text-6xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 "
            >
              {heading.split("").map((l, i) => (
                <motion.span
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 16 },
                  }}
                  transition={{ type: "spring" }}
                  className="inline-block"
                  key={i}
                >
                  {l}
                </motion.span>
              ))}
            </motion.span>
            <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
              {subheading}
            </span>
          </div>
    
          <motion.img
            style={{
              top,
              left,
              translateX: "-50%",
              translateY: "-50%",
            }}
            variants={{
              initial: { scale: 0, rotate: "-12.5deg" },
              whileHover: { scale: 1, rotate: "12.5deg" },
            }}
            transition={{ type: "spring" }}
            src={imgSrc}
            className="absolute z-10  h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
            alt={`Image representing a link for ${heading}`}
          />
    
          <motion.div
            variants={{
              initial: {
                x: "25%",
                opacity: 0,
              },
              whileHover: {
                x: "0%",
                opacity: 1,
              },
            }}
            transition={{ type: "spring" }}
            className="relative z-10 p-4"
          >
            <FiArrowRight className="text-5xl text-neutral-50" />
          </motion.div>
        </motion.a>
      );
    };

export default Services