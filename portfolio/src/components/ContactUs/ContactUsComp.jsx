import React, { useRef,useState } from "react";
import "./Contactus.css";
import instagram1 from "../../assets/insta1.png";
import linkedinn1 from "../../assets/linkedinn1.png";
import twitter1 from "../../assets/twitter1.png";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';


const ContactUsComp = () => {

    const form = useRef();
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const validatePhone = (phoneNumber) => {
      const phoneRegex = /^[0-9]{10,15}$/; // Allows 10-15 digits only
      return phoneRegex.test(phoneNumber);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    if (!validatePhone(e.target.value)) {
        setPhoneError("Invalid phone number. Must be 10-15 digits.");
    } else {
        setPhoneError("");
    }
};
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      if (!validatePhone(phone)) {
        toast.error("Please enter a valid phone number.");
        return;
      }
      emailjs
        .sendForm('service_kmjm31c', 'template_woq96g9', form.current, {
          publicKey: 'lqz-V1LIw8Dp66-fg',
        })
        .then(
          () => {
            toast.success('Email sent successfully!');
            form.current.reset();
            setPhone(""); // Reset phone state
          },
          (error) => {
            toast.error(`Failed to send email: ${error.text}`);
          },
        );
    };
    
  return (
    <div>
      <div className="home-container">
        <div className="shape circle"></div>
        <div className="shape triangle"></div>
        <div className="shape circle-small"></div>
        <h1>Contact Us</h1>
        {/* <p>
          We are digital pioneers on the leading edge of low-code development.
          Helping ambitious brands to outperform in the next generation of
          digital experiences.
        </p> */}
      </div>

      <div className="container-fluid">
  <div className="row vh-100">
    {/* Left Section */}
    <div className="col-md-9 d-flex flex-column justify-content-center contact-form" id="left">
      <h1 className="mb-5 contact-heading">Contact Us</h1>
      <form className="row" ref={form} onSubmit={sendEmail}>
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
              name="user_name" 
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="form-label">
              My phone number is
            </label>
            <input
              type="tel" 
              name="phone_number" 
              className="form-control" 
              id="phone" 
              placeholder="Your phone number" 
              value={phone} 
              onChange={handlePhoneChange} 
              required
            />
     {phoneError && <small className="text-danger">{phoneError}</small>}
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
              name="company_name" 
              required
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
              name="user_email" 
              required
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
              name="message" 
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn-submit">
          Submit
        </button>
      </form>
      <ToastContainer/>
    </div>

    {/* Right Section for Contact Info and Team Info */}
    <div className="col-md-3 d-flex flex-column justify-content-start align-items-start p-3 bg-black text-white">
      <div className="contact-info">
        <p className="text-left">
        <b>Prepare for a quick response</b>
        <br />
        <a href="mailto:admin@softecint.com">admin@softecint.com</a>
        </p>
        
      </div>

      <div className="team-info">
        <div className="team-member">
          <img style={{backgroundColor: "white" }} src={linkedinn1} alt="Firidosh Tangri" />
          <p>
            Linked In <small>Visit our LinkedIn page for more details about what we do and connect with us!</small>
          </p>
        </div>
        <div className="team-member">
          <img style={{backgroundColor: "white" }} src={instagram1} alt="David Martin" />
          <p>
            Instagram <small>Follow us on Instagram for updates, news, and more!</small>
          </p>
        </div>
        <div className="team-member">
          <img style={{backgroundColor: "white" }} src={twitter1} alt="Peter Smart" />
          <p>
            Twitter <small>Explore our Twitter profile to learn more about our work and team!</small>
          </p>
          
        </div>
      </div>
      <div className="contact-info">
      <p className="mt-2">
          <a href="https://maps.app.goo.gl/6AJvP7xAS63PwUrF6" target="blank">Get directions</a> <br /> (+92) 345 - 8855857 | Karachi
        </p>
        </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ContactUsComp;
