import React from "react";
import "./Contactus.css";
import placeholder50 from "../../assets/placeholder-50.png";

const ContactUsComp = () => {
  return (
    <div>
      <div className="home-container">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape circle-small"></div>
        <h1>Contact Us</h1>
        <p>
          We are digital pioneers on the leading edge of low-code development.
          Helping ambitious brands to outperform in the next generation of
          digital experiences.
        </p>
      </div>

      <div className="container-fluid">
  <div className="row vh-100">
    {/* Left Section */}
    <div className="col-md-9 d-flex flex-column justify-content-center contact-form" id="left">
      <h1 className="mb-5 contact-heading">Contact Us</h1>
      <form className="row">
        {/* Left Section (Name, Phone, Company, Email) */}
        <div className="col-12 col-md-6 mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="form-label">
              My name is
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="form-label">
              My phone number is
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="Your phone number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="company" className="form-label">
              I work at
            </label>
            <input
              type="text"
              className="form-control"
              id="company"
              placeholder="Your company"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="form-label">
              Reach me at
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your@email.com"
            />
          </div>
        </div>

        {/* Right Section (Message) */}
        <div className="col-12 col-md-6 mb-4">
          <div className="mb-4">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="7"
              placeholder="Start typing here..."
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
    </div>

    {/* Right Section for Contact Info and Team Info */}
    <div className="col-md-3 d-flex flex-column justify-content-start align-items-start p-4 bg-black text-white">
      <div className="contact-info">
        <p>Prepare for a quick response</p>
        <a href="mailto:interact@fantasy.co">interact@fantasy.co</a>
        <p>New York</p>
        <p>
          <a href="#">Get directions</a> | +1 212-941-5220
        </p>
        <a href="#">Privacy Policy</a>
      </div>

      <div className="team-info">
        <div className="team-member">
          <img src={placeholder50} alt="Firidosh Tangri" />
          <p>
            Firidosh Tangri <small>CEO</small>
          </p>
        </div>
        <div className="team-member">
          <img src={placeholder50} alt="David Martin" />
          <p>
            David Martin <small>President & Founder</small>
          </p>
        </div>
        <div className="team-member">
          <img src={placeholder50} alt="Peter Smart" />
          <p>
            Peter Smart <small>Active Windows</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</div>








    </div>
  );
};

export default ContactUsComp;
