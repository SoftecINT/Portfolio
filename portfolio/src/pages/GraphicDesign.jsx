import React, { useRef, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import backgroundImage from "../assets/daniel-olahh.jpg";
import video from "../assets/graphicdesign.mp4";
import "../css/UiUxDesign.css";
import avatar from "../assets/avatar.jpg"
import { Footer } from '../components/Footer/Footer'

import penpencil from '../assets/penpencil.png'
import photoshop from '../assets/photoshop.png'
import adobe from '../assets/adobe.png'
import linkedin from '../assets/linkedinn.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'


const GraphicDesign = () => {
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
            <h1 className="text-6xl font-bold mb-4">Graphic Design</h1>
            <h3 className="text-2xl font-poppins mb-6">
              We provide top-notch graphic designs
            </h3>
            <a
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg transition duration-300"
              href="#"
            >
              Visit Website
            </a>
          </div>
        </div>

        {/* header end here  */}

        <div className="bg-white text-center py-16">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="mb-12 max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Graphic Design
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
              <br />
            </div>

            {/* header end  */}
            {/* Info Cards Section */}
            <div className="Cards-section1">
              <div className="card1">
                <div className="content">
                  {/* Back of the Card */}
                  <div className="back">
                    <div className="back-content">
                      
                      <img src={adobe} alt="" style={{ width: "50px" , height: "50px"}} />
                      <strong>Adobe</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="content">
                  {/* Back of the Card */}
                  <div className="back">
                    <div className="back-content">
                    <img src={penpencil} alt="" style={{ width: "50px" , height: "50px"}} />
                      <strong>In Design</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="content">
                  {/* Back of the Card */}
                  <div className="back">
                    <div className="back-content">
                    <img src={photoshop} alt="" style={{ width: "50px" , height: "50px"}} />
                      <strong>Photoshop</strong>
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

        <div className="section bg-black text-center py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our Graphics Designers
            </h2>

            
          </div>
        </div>

        {/* end  */}


        <Footer/> 

      </Layout>
    </>
  )
}

export default GraphicDesign