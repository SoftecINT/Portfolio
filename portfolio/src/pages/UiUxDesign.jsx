import React, { useRef, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import backgroundImage from "../assets/daniel-olahh.jpg";
import video from "../assets/video1.mp4";
import "../css/UiUxdesign.css";
import avatar from "../assets/avatar.jpg"
import { Footer } from '../components/Footer/Footer'

import wireframe from '../assets/wireframe.png'
import mockup from '../assets/mockup.png'
import figma from '../assets/figma.png'
import workflow from '../assets/workflow.webp'
import workflow1 from '../assets/workflow1.webp'
import prototype from '../assets/prototype.webp'

import linkedin from '../assets/linkedinn.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";










const UiUxDesign = () => {
  return (
    <>
      <Layout>
        <div className="relative h-screen overflow-hidden">
          {/* Background Video */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={video}
            autoPlay
            loop
            muted
          ></video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white">
            <h1 className="text-8xl font-bold mb-4">UI / UX Design</h1>
            <h3 className="text-2xl font-poppins mb-6">
              We Provide top-notch UI/UX design
            </h3>
            {/* <a
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg transition duration-300"
              href="#"
            >
              Visit Website
            </a> */}
          </div>
        </div>

        {/* header end here  */}

        <div className="bg-white text-center py-16">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="mb-12 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                UI / UX Design
              </h2>
              <h5 className="text-lg text-gray-600 mb-6">
                This is the paragraph where you can write more details about
                your product. Keep your user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise, they wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5>
              {/* <a
                href="#"
                className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full shadow-md hover:bg-orange-600 transition"
              >
                See Details
              </a> */}
            </div>

            {/* header end  */}
            {/* Info Cards Section */}
            <div className="Cards-section1">
              <div className="card1">
                <div className="content">
                  {/* Back of the Card */}
                  <div className="back">
                    <div className="back-content">
                      
                      {/* <img src={figma} alt="" style={{ width: "50px" , height: "50px"}} /> */}
                      <strong>PROTOTYPING</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="content">
                  {/* Back of the Card */}
                  <div className="back">
                    <div className="back-content">
                    {/* <img src={wireframe} alt="" style={{ width: "50px" , height: "50px"}} /> */}
                      <strong>WIREFRAMES</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="content">
                  {/* Back of the Card */}
                  <div className="back">
                    <div className="back-content">
                    {/* <img src={mockup} alt="" style={{ width: "50px" , height: "50px"}} /> */}
                      <strong>MOCKUPS</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* cards end  */}
          </div>
        </div>

        {/* info end  here  */}

        {/* Our ui/ux developers starts */}

        {/* end  */}




        {/* here start new thing  */}
        
        <div className="bg-white">
      <TextParallaxContent
        imgUrl={workflow}
        subheading="Collaborate"
        heading="Built for all of us"
      >
        <ExampleContent 
    title="Intuitive and User-Centered Design"
    text="At the core of our UI/UX philosophy is a user-centered approach that prioritizes intuitive navigation and seamless interactions. We craft digital experiences that are not only visually appealing but also highly functional, ensuring users can effortlessly engage with your platform. Our design process involves in-depth research, wireframing, and usability testing to create interfaces that enhance user satisfaction and drive engagement."
  />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={workflow1}
        subheading="Quality"
        heading="Never compromise"
      >
        <ExampleContent 
    title="Aesthetics Meets Functionality"
    text="Great design goes beyond just looking good—it must serve a purpose. We blend creativity with usability, ensuring every element of the user interface is strategically placed to guide users toward their goals. Whether it’s a sleek website, a responsive mobile app, or an enterprise dashboard, our UI/UX solutions balance aesthetics with efficiency, providing an engaging experience that keeps users coming back."
  />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={prototype}
        subheading="Modern"
        heading="Dress for the best"
      >
         <ExampleContent 
    title="Optimized for Performance and Accessibility"
    text="A successful UI/UX design is one that is accessible to all users and optimized for performance across devices. We follow best practices for accessibility, ensuring inclusivity for users with diverse needs. Additionally, our designs are lightweight and responsive, providing fast load times and smooth interactions across desktops, tablets, and smartphones. By prioritizing performance and accessibility, we create digital products that deliver exceptional user experiences."
  />
      </TextParallaxContent>
    </div>






        <Footer/> 

      </Layout>
    </>
  );
};







const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl ">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = ({title , text}) => (
//   <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 pb-24 pt-12 md:grid-cols-12">
//     <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      
// Intuitive and User-Centered Design
//     </h2>
//     <div className="col-span-1 md:col-span-8">
//       <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
//       At the core of our UI/UX philosophy is a user-centered approach that prioritizes intuitive navigation and seamless interactions. We craft digital experiences that are not only visually appealing but also highly functional, ensuring users can effortlessly engage with your platform. Our design process involves in-depth research, wireframing, and usability testing to create interfaces that enhance user satisfaction and drive engagement.
//       </p>
//       {/* <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
//         reiciendis blanditiis aliquam aut fugit sint.
//       </p> */}
//       {/* <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
//         Learn more <FiArrowUpRight className="inline" />
//       </button> */}
//     </div>
//   </div>
  
<div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-4 pb-24 pt-12 md:grid-cols-12">
<h2 className="col-span-1 text-3xl font-bold md:col-span-4">
  {title}
</h2>
<div className="col-span-1 md:col-span-8">
  <p className="mb-4 text-xl text-neutral-600 md:text-2xl mx-0.5">
    {text}
  </p>
</div>
</div>      

);



export default UiUxDesign;
