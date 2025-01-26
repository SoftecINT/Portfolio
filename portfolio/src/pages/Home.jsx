import React, { useRef, useState, useEffect } from 'react';
import ZoominZoomout from '../components/ZoominZoomout/ZoominZoomout'
import { Cards } from '../components/Cards/Cards'
import Ourblogs from '../components/Our Blogs/Ourblogs'
import Testimonials from '../components/Testimonials/Testimonials'
import { Footer } from '../components/Footer/Footer'
import OurService from '../components/Services/OurService'
import Layout2 from '../components/Layout2/Layout2'
import Horizontal from '../components/Horizontal/Horizontal'



const Home = () => {
  const zoomRef = useRef(null);
  const horizontalContainerRef = useRef(null);
  const [scrollState, setScrollState] = useState("zoom"); // "zoom" or "horizontal"

  const handleScroll = () => {
    const zoomBottom = zoomRef.current.getBoundingClientRect().bottom;

    if (scrollState === "zoom" && zoomBottom <= 0) {
      setScrollState("horizontal");
      // Lock vertical scrolling
      document.body.style.overflowY = "hidden";
    }
  };

  const handleHorizontalScroll = (e) => {
    if (scrollState === "horizontal") {
      // Scroll horizontally based on the wheel delta
      const scrollAmount = e.deltaY > 0 ? 100 : -100; // Adjust the scroll speed here
      horizontalContainerRef.current.scrollLeft += scrollAmount;

      // Prevent default vertical scrolling
      e.preventDefault();

      // Unlock vertical scrolling after horizontal scroll ends
      const maxScrollLeft =
        horizontalContainerRef.current.scrollWidth -
        horizontalContainerRef.current.clientWidth;
      if (
        horizontalContainerRef.current.scrollLeft >= maxScrollLeft &&
        e.deltaY > 0
      ) {
        document.body.style.overflowY = "auto";
      }
    }
  };

  useEffect(() => {
    if (scrollState === "zoom") {
      window.addEventListener("scroll", handleScroll);
    } else if (scrollState === "horizontal") {
      window.addEventListener("wheel", handleHorizontalScroll, { passive: false });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleHorizontalScroll);
    };
  }, [scrollState]);
  return (
    <div>
        <Layout2>
        <ZoominZoomout />
        <Cards />
        <Ourblogs/> 
        <Testimonials/>
        <Footer/> 
        </Layout2>
    </div>
  )
}

export default Home