import React from "react";
import SplitText from "./Splittext";
import "./AboutUs.css";
import logo from "../../assets/whitelogo.svg";
import xiomi from "../../assets/xiomi.jpg";
import { MdHeight } from "react-icons/md";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

const AboutUsComp = () => {
  return (
    <div>
      <div className="home-container">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape circle-small"></div>
        <h1>About Us</h1>
        <p>
          We are digital pioneers on the leading edge of low-code development.
          Helping ambitious brands to outperform in the next generation of
          digital experiences.
        </p>
      </div>

      {/* Header close here  */}
    <div className="container1 bg-black text-white ">
      <div className="text-container">
        <SplitText
          text="Back in 2006 at the start ofthe digital era we founded our first agency crafting digital products. But it took a while when we witnessed the early indicators of a significant shift by upcoming tech called low-code"
          className="text-2xl font-semibold text-center"
          delay={15}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      </div>
      <div className="img-container">
      <img src={logo} alt="" />
      </div>
      </div>

      <div className="ourtrusted-partners">
            <h1>Our Trusted  Partners</h1>
            <div className="partners">
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
            </div>
        </div>

        <div className="Founder-container">
            <h1>The <span>Founder</span> </h1>
            <div className="card-founder">
                <img style={{height: "350px", width: "350px"}} src="" alt="" />
                <h3 className="text-2xl font-semibold text-black">Shakeel Ahmed</h3>
                <h4 className="text-gray-600 text-lg">Founder</h4>
            </div>
        </div>


        <div className="Team-container">
            <h1>The <span>Team</span> </h1>
            <div className="team-cards">
            <div className="team-card">
                    <img style={{height: "300px", width: "300px"}} src="" alt="" />
                    <h3 className="text-2xl font-semibold text-black">Nasir Qureshi</h3>
                    <h4 className="text-gray-600 text-lg">Team Lead</h4>
                </div>
                <div className="team-card">
                    <img style={{height: "300px", width: "300px"}} src="" alt="" />
                    <h3 className="text-2xl font-semibold text-black">Ali Naeem</h3>
                    <h4 className="text-gray-600 text-lg">Developer</h4>
                </div>
                <div className="team-card">
                    <img style={{height: "300px", width: "300px"}} src="" alt="" />
                    <h3 className="text-2xl font-semibold text-black">Momin Khan</h3>
                    <h4 className="text-gray-600 text-lg">Developer</h4>
                </div>
                <div className="team-card">
                    <img style={{height: "300px", width: "300px"}} src="" alt="" />
                    <h3 className="text-2xl font-semibold text-black">Danish Rizwan</h3>
                    <h4 className="text-gray-600 text-lg">Developer</h4>
                </div>
                <div className="team-card">
                    <img style={{height: "300px", width: "300px"}} src="" alt="" />
                    <h3 className="text-2xl font-semibold text-black">Ali Hassan</h3>
                    <h4 className="text-gray-600 text-lg">Marketing Manager</h4>
                </div>
                <div className="team-card">
                    <img style={{height: "300px", width: "300px"}} src="" alt="" />
                    <h3 className="text-2xl font-semibold text-black">Zaim Tanoli</h3>
                    <h4 className="text-gray-600 text-lg">Developer</h4>
                </div>
                <div className="team-card">
                    <img style={{height: "300px", width: "300px"}} src="" alt="" />
                    <h3 className="text-2xl font-semibold text-black">Shahid Saeed</h3>
                    <h4 className="text-gray-600 text-lg">Tea Boy</h4>
                </div>
                <div className="team-card">
                    <img style={{height: "300px", width: "300px"}} src="" alt="" />
                    <h3 className="text-2xl font-semibold text-black">Asad Hayat</h3>
                    <h4 className="text-gray-600 text-lg">COC</h4>
                </div>
                
            </div>
        </div>

    </div>
  );
};

export default AboutUsComp;
