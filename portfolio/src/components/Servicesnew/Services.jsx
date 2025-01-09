import React,{ useRef } from 'react'
import './Services.css'
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { div } from 'framer-motion/client';
import mockup1 from '../../assets/mockup1.png'
import mockup2 from '../../assets/mockup2.png'
import mockup3 from '../../assets/mockup3.png'

const Services = () => {
  return (
    <div>
    <div className="home-container">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape circle-small"></div>
        <h1>Our Services</h1>
        <p>We are digital pioneers on the leading edge of low-code development. Helping ambitious brands to outperform in the next generation of digital experiences.</p>
    </div>



    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link
          heading="UI/UX  Design"
          subheading={
            <>
              We specialize in crafting responsive UI/UX designs that adapt <br />
              seamlessly to all devices, ensuring a consistent and engaging user experience. <br />
              <br />
              <ul>
                <li><strong>Cross-Device Compatibility:</strong> Designs optimized for desktops, tablets, and mobile platforms.</li>
                <li><strong>User-Centric Interfaces:</strong> Prioritizing intuitive navigation and accessibility for all users.</li>
                <li><strong>Modern Aesthetics:</strong> Sleek, visually appealing designs tailored to your brand.</li>
                <li><strong>Performance Optimization:</strong> Ensuring fast loading and smooth interactions.</li>
                <li><strong>Scalable Solutions:</strong> Designs that grow with your business needs.</li>
              </ul>
            </>
          }
          imgSrc={mockup1}
          href="#"
        />
        <Link
          heading="Graphic Designing"
          subheading={
            <>
              We specialize in creating stunning graphic designs <br/> that capture your brand's essence and engage your audience. <br />
              <br />
              <ul>
                <li><strong>Brand Identity Design:</strong> Creating unique logos, color schemes, and typography that represent your brand.</li>
                <li><strong>Print Design:</strong> Crafting eye-catching brochures, posters, flyers, and business cards that make a lasting impression.</li>
                <li><strong>Digital Design:</strong> Designing captivating social media graphics, email templates, and web visuals to boost your online presence.</li>
                <li><strong>Packaging Design:</strong> Developing product packaging that is both attractive and functional, enhancing customer experience.</li>
                <li><strong>Illustrations & Icons:</strong> Custom illustrations and icons that communicate your message in a creative and engaging way.</li>
              </ul>
            </>
          }          
          imgSrc={mockup2}
          href="#"
        />
        <Link
          heading="Full Stack Development"
          subheading={
            <>
              We specialize in delivering comprehensive full-stack development services <br/> that build robust and scalable web applications from the ground up. <br />
              <br />
              <ul>
                <li><strong>Front-End Development:</strong> Building responsive UIs with React, Angular, and Vue.js.</li>
                <li><strong>Back-End Development:</strong> Creating server-side solutions with Node.js, Python, and Java.</li>
                <li><strong>Database Management:</strong> Managing SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases.</li>
                <li><strong>API Development:</strong> Developing RESTful and GraphQL APIs for seamless integration.</li>
                <li><strong>Cloud Integration:</strong> Implementing scalable cloud solutions with AWS, Azure, and Google Cloud.</li>
              </ul>
            </>
          }               
          imgSrc={mockup3}
          href="#"
        />
        <Link
          heading="Laravel Development"
          subheading={
            <>
              We specialize in developing powerful and scalable web applications using Laravel, <br /> providing high-quality solutions with clean and maintainable code. <br />
              <br />
              <ul>
                <li><strong>Laravel Framework:</strong> Building robust applications using the elegant Laravel framework.</li>
                <li><strong>Database Management:</strong> Managing databases with Laravel's Eloquent ORM and migrations.</li>
                <li><strong>RESTful APIs:</strong> Developing efficient RESTful APIs for seamless communication and data exchange.</li>
                <li><strong>Authentication & Authorization:</strong> Implementing secure user authentication and role-based access control.</li>
                <li><strong>Deployment & Hosting:</strong> Deploying Laravel applications on cloud platforms like AWS, DigitalOcean, and shared hosting.</li>
              </ul>
            </>
          }          
          imgSrc={mockup2}
          href="#"
        />
        <Link
          heading="Mern Development"
          subheading={
            <>
              We specialize in building dynamic and scalable web applications using the MERN stack, <br /> leveraging MongoDB, Express, React, and Node.js for full-stack solutions. <br />
              <br />
              <ul>
                <li><strong>MongoDB:</strong> Managing NoSQL databases for flexible data storage and scalability.</li>
                <li><strong>Express.js:</strong> Building server-side applications and RESTful APIs with Express.js.</li>
                <li><strong>React.js:</strong> Developing interactive user interfaces with the React JavaScript library.</li>
                <li><strong>Node.js:</strong> Creating fast and scalable server-side applications with Node.js.</li>
                <li><strong>API Integration:</strong> Integrating third-party APIs and developing custom APIs for seamless functionality.</li>
              </ul>
            </>
          }          
          imgSrc={mockup2}
          href="#"
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
              className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
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