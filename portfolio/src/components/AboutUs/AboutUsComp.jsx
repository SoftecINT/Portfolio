import React, { useState } from "react";
import SplitText from "./Splittext";
import "./AboutUs.css";
import logo from "../../assets/whitelogo.svg";
import xiomi from "../../assets/xiomi.jpg";
import asset1 from '../../assets/images.jpg'
import founder from '../../assets/founder.jpg'
import momin from '../../assets/momin.jpg'
import ali from '../../assets/ali.jpg'
import danish from '../../assets/danish.jpg'
import nasir from '../../assets/nasir.png'
import danishq from '../../assets/danishq.jpg'
import alihassan from '../../assets/alihassan.jpg'
import asad from '../../assets/asad1.jpg'


const teamlead = [
  {
    name: "Nasir Qureshi",
    role: "Team Lead",
    image: nasir, 
    details:
      "As the Editorial Manager at softec, Nasir’s motto, Every detail matters... every word counts, reflects her approach to her work. Noha’s creative vision, paired with her meticulous attention to detail, ensures that content not only meets strategic objectives but resonates with the audience. Her background as a writer gives her a deep understanding of the creative process, enabling her to guide the team in crafting impactful, high-quality content. When she’s not working, Noha enjoys reading, writing, and fishing. She also loves traveling and is drawn to destinations rich in history or beautiful beaches. Fun fact: Noha has a variety of fun facts, but they always seem to cancel each other out!",
  },
  {
    name: "Asad Hayat",
    role: "Team Lead",
    image: asad, // Add image URL
    details:
      "Ali specializes in front-end development with a strong focus on modern UI/UX designs.",
  },];

const teamMembers = [
  {
    name: "Ali Naeem",
    role: "Developer",
    image: ali, // Add image URL
    details:
      "Ali specializes in front-end development with a strong focus on modern UI/UX designs.",
  },
  {
    name: "Momin Khan",
    role: "Developer",
    image: momin, // Add image URL
    details:
      "Ali specializes in front-end development with a strong focus on modern UI/UX designs.",
  },
  {
    name: "Danish Rizwan",
    role: "Developer",
    image: danish, // Add image URL
    details:
      "Ali specializes in front-end development with a strong focus on modern UI/UX designs.",
  },
  {
    name: "Zain Tanoli",
    role: "Developer",
    image: asset1, // Add image URL
    details:
      "Ali specializes in front-end development with a strong focus on modern UI/UX designs.",
  },
  {
    name: "Ali Hassan",
    role: "Developer",
    image: alihassan, // Add image URL
    details:
      "Ali specializes in front-end development with a strong focus on modern UI/UX designs.",
  },
  {
    name: "Danish Qureshi",
    role: "Developer",
    image: danishq, // Add image URL
    details:
      "Ali specializes in front-end development with a strong focus on modern UI/UX designs.",
  },
  ];
const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

  
const AboutUsComp = () => {

  const [selectedMember, setSelectedMember] = useState(null);

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const closePopup = () => {
    setSelectedMember(null);
  };

  return (
    <div>
      <div className="home-container">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape circle-small"></div>
        <h1>About Us</h1>
        {/* <p>
          We are digital pioneers on the leading edge of low-code development.
          Helping ambitious brands to outperform in the next generation of
          digital experiences.
        </p> */}
      </div>

      {/* Header close here  */}
    <div className="container1 bg-black text-white">
      <div className="text-container">
        <SplitText
          text="Back in 2006 at the start of the digital era we founded our first agency crafting digital products. But it took a while when we witnessed the early indicators of a significant shift by upcoming tech called low-code"
          className="text-2xl font-medium text-center"
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
                {/* <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div>
                <div className="partner"><img src={xiomi} alt=""/></div> */}
                {[...Array(8)].map((_, i) => (
            <div className="partner" key={i}><img src={xiomi} alt="" /></div>
          ))}
            </div>
        </div>

        <div className="Founder-container">
            <h1>The <span>Founder</span> </h1>
            <div className="card-founder"  onClick={() => handleCardClick({ name: "Shakeel Ahmed", role: "Founder", image: founder, details: "Founder and visionary behind our company." })}>
                <img style={{height: "400px", width: "350px"}} src={founder} alt="" />
                <h3 className="text-2xl font-semibold">Shakeel Ahmed</h3>
                <h4 className="text-black text-lg">Founder</h4>
            </div>
        </div>



            

        <div className="Team-container">
        <h1>
          The <span>Team Lead</span>
        </h1>
        <div className="team-cards">
          {teamlead.map((member, index) => (
            <div
              key={index}
              className="team-card"
              onClick={() => handleCardClick(member)}
            >
              <img
                style={{ height: "300px", width: "300px" }}
                src={member.image}
                alt={member.name}
              />
              <h3 className="text-2xl font-semibold">
                {member.name}
              </h3>
              <h4 className="text-gray-600 text-lg">{member.role}</h4>
            </div>
          ))}
        </div>

      </div>

        <div className="Team-container">
        <h1>
          The <span>Team</span>
        </h1>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card"
              onClick={() => handleCardClick(member)}
            >
              <img
                style={{ height: "300px", width: "300px" }}
                src={member.image}
                alt={member.name}
              />
              <h3 className="text-2xl font-semibold">
                {member.name}
              </h3>
              <h4 className="text-gray-600 text-lg">{member.role}</h4>
            </div>
          ))}
        </div>

      </div>

      {selectedMember && (
  <div className="popup-overlay">
    <div className="popup-content" style={{backgroundColor: "black"}}>
      <button className="close-button" onClick={closePopup}>
        &times;
      </button>
      <div className="popup-container">
        {/* Image Section */}
        <div className="popup-image" >
          <img
            className="popup-profile-img"
            src={selectedMember.image}
            alt={selectedMember.name}
          />
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-button"
          >
            <i className="fab fa-linkedin"></i> Follow on LinkedIn
          </a>
        </div>

        {/* Details Section */}
        <div className="popup-details">
          <h1 className="popup-name">{selectedMember.name}</h1>
          <h2 className="popup-role">{selectedMember.role}</h2>
          <h6 className="popup-description">{selectedMember.details}</h6>
        </div>
      </div>
    </div>
  </div>
)}

    

    </div>
  );
};

export default AboutUsComp;
