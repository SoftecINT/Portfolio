import React, { useRef, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import backgroundImage from "../assets/daniel-olahh.jpg";
import video from "../assets/video1.mp4";
import "../css/UiUxDesign.css";
import avatar from "../assets/avatar.jpg"
import { Footer } from '../components/Footer/Footer'

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
            <h1 className="text-6xl font-bold mb-4">Ui / Ux Design</h1>
            <h3 className="text-2xl font-poppins mb-6">
              We Provide top-notch UI/UX design
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
                Ui / Ux Design
              </h2>
              <h5 className="text-lg text-gray-600 mb-6">
                This is the paragraph where you can write more details about
                your product. Keep your user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise, they wouldn't scroll to get here. Add a button if you
                want the user to see more.
              </h5>
              <a
                href="#"
                className="inline-block px-8 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
              >
                See Details
              </a>
            </div>

            {/* header end  */}
            {/* Info Cards Section */}
            <div className="Cards-section1">
              <div className="card1">
                <div className="content">
                  {/* Back of the Card */}
                  <div className="back">
                    <div className="back-content">
                      <svg
                        stroke="#ffffff"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        height="50px"
                        width="50px"
                        fill="#ffffff"
                      >
                        <g strokeWidth="0"></g>
                        <g strokeLinejoin="round" strokeLinecap="round"></g>
                        <g>
                          <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z"></path>
                        </g>
                      </svg>
                      <strong>Figma</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="content">
                  {/* Back of the Card */}
                  <div className="back">
                    <div className="back-content">
                      <svg
                        stroke="#ffffff"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        height="50px"
                        width="50px"
                        fill="#ffffff"
                      >
                        <g strokeWidth="0"></g>
                        <g strokeLinejoin="round" strokeLinecap="round"></g>
                        <g>
                          <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z"></path>
                        </g>
                      </svg>
                      <strong>WireFrames</strong>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="content">
                  {/* Back of the Card */}
                  <div className="back">
                    <div className="back-content">
                      <svg
                        stroke="#ffffff"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        height="50px"
                        width="50px"
                        fill="#ffffff"
                      >
                        <g strokeWidth="0"></g>
                        <g strokeLinejoin="round" strokeLinecap="round"></g>
                        <g>
                          <path d="M20.84375 0.03125C20.191406 0.0703125 19.652344 0.425781 19.21875 1.53125C18.988281 2.117188 18.5 3.558594 18.03125 4.9375C17.792969 5.636719 17.570313 6.273438 17.40625 6.75C17.390625 6.796875 17.414063 6.855469 17.40625 6.90625C17.398438 6.925781 17.351563 6.949219 17.34375 6.96875L17.25 7.25C18.566406 7.65625 19.539063 8.058594 19.625 8.09375C22.597656 9.21875 28.351563 11.847656 33.28125 16.78125C38.5 22 41.183594 28.265625 42.09375 30.71875C42.113281 30.761719 42.375 31.535156 42.75 32.84375C42.757813 32.839844 42.777344 32.847656 42.78125 32.84375C43.34375 32.664063 44.953125 32.09375 46.3125 31.625C47.109375 31.351563 47.808594 31.117188 48.15625 31C49.003906 30.714844 49.542969 30.292969 49.8125 29.6875C50.074219 29.109375 50.066406 28.429688 49.75 27.6875C49.605469 27.347656 49.441406 26.917969 49.25 26.4375C47.878906 23.007813 45.007813 15.882813 39.59375 10.46875C33.613281 4.484375 25.792969 1.210938 22.125 0.21875C21.648438 0.0898438 21.234375 0.0078125 20.84375 0.03125 Z M 16.46875 9.09375L0.0625 48.625C-0.09375 48.996094 -0.00390625 49.433594 0.28125 49.71875C0.472656 49.910156 0.738281 50 1 50C1.128906 50 1.253906 49.988281 1.375 49.9375L40.90625 33.59375C40.523438 32.242188 40.222656 31.449219 40.21875 31.4375C39.351563 29.089844 36.816406 23.128906 31.875 18.1875C27.035156 13.34375 21.167969 10.804688 18.875 9.9375C18.84375 9.925781 17.8125 9.5 16.46875 9.09375 Z"></path>
                        </g>
                      </svg>
                      <strong>Mockups</strong>
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
              OUR UI/UX Developers
            </h2>

            <div className="devcards">
              {/* Card 1 */}
              <div className="card">
                <div className="card-avatar">
                  <img src={avatar} alt="Developer 1" className="avatar-img" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Developer Name</h3>
                  <p className="card-subtitle">UI/UX Developer</p>
                </div>
                <div className="card-footer">
                  <a className="social-icon" href="#">
                    <img src="" alt="Social Icon" className="social-img" />
                  </a>
                  <a className="social-icon" href="#">
                    <img src="" alt="Social Icon" className="social-img" />
                  </a>
                  <a className="social-icon" href="#">
                    <img src="" alt="Social Icon" className="social-img" />
                  </a>
                </div>
              </div>

              {/* card 2  */}
              <div className="card">
                <div className="card-avatar">
                  <img src={avatar} alt="Developer 1" className="avatar-img" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Developer Name</h3>
                  <p className="card-subtitle">UI/UX Developer</p>
                </div>
                <div className="card-footer">
                  <a className="social-icon" href="#">
                    <img src="" alt="Social Icon" className="social-img" />
                  </a>
                  <a className="social-icon" href="#">
                    <img src="" alt="Social Icon" className="social-img" />
                  </a>
                  <a className="social-icon" href="#">
                    <img src="" alt="Social Icon" className="social-img" />
                  </a>
                </div>
              </div>

              {/* card 3  */}
              <div className="card">
                <div className="card-avatar">
                  <img src={avatar} alt="Developer 1" className="avatar-img" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">Developer Name</h3>
                  <p className="card-subtitle">UI/UX Developer</p>
                </div>
                <div className="card-footer">
                  <a className="social-icon" href="#">
                    <img src="" alt="Social Icon" className="social-img" />
                  </a>
                  <a className="social-icon" href="#">
                    <img src="" alt="Social Icon" className="social-img" />
                  </a>
                  <a className="social-icon" href="#">
                    <img src="" alt="Social Icon" className="social-img" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* end  */}


        <Footer/> 

      </Layout>
    </>
  );
};

export default UiUxDesign;
