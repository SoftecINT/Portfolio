import React from "react";
import "./Footer.css";
import "../Cards/Library.css";
import logo from "../../assets/whitelogo.svg";

export const Footer = () => {
  return (
    <footer className="footer ">
      
      <div className="footer_component mx-auto">
        <div className="padding-footer">
          <div className="container-large">
            <div className="footer_content">
              <div className="footer_content-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
                <div
                  id="w-node-_538f686c-038b-0f86-7d70-90950202eb2d-0202eb27"
                  className="footer_item"
                >
                  <a
                    aria-label="Logo"
                    href="/"
                    aria-current="page"
                    className="footer_brand w-inline-block w--current block mb-4 mx-auto md:mx-0"
                  >
                    <div className="footer_logo w-embed">
                      <img src={logo} alt="" />
                    </div>
                  </a>
                </div>
                <div
                  id="w-node-_538f686c-038b-0f86-7d70-90950202eb30-0202eb27"
                  className="footer_item"
                >
                  <div className="footer_heading">
                    <div className="heading-style-h3 mb-2">
                      Code{" "}
                      <span className="footer_text-span">
                        that Connect&#x27;s Solutions that
                      </span>{" "}
                      Work.
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_538f686c-038b-0f86-7d70-90950202eb37-0202eb27"
                  className="footer_item"
                >
                  <ul role="list" className="footer_contact-list space-y-2">
                    <li className="footer_contact-list-item">
                      <a
                        href="mailto:jobsoftec@gmail.com"
                        className="footer_contact-link w-inline-block"
                      >
                        <div>admin@softecint.com</div>
                        <div>(+92) 345 - 8855857</div>

                        <div className="link-line"></div>
                      </a>
                    </li>

                    <li className="footer_contact-list-item is-cta">
                      <a
                        href="/contactus"
                        className=" is-footer w-inline-block"
                      >
                        <button className="btn inline-block  py-2 px-4 rounded">
                          <span>BOOK A CALL</span>
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer_item">
                  <div className="location_item">
                    <div className="location_image-wrapper"></div>
                    <div className="location_heading is-tilburg lochead mb-2">
                      Karachi (HQ)
                    </div>
                    <div className="location_separator"></div>
                    <div>
                      Office No B-451
                      <br />
                      11-A Karachi
                    </div>
                  </div>
                </div>

                <div className="footer-map-wrapper mt-8 lg:mt-0">
                  <div className="footer-map-container">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d452.07563688418196!2d67.059912!3d24.9795471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340e5164466c5%3A0xf2981717778daa85!2sPlot%20B%20452%2C%20Sector%2011-A%20Sector%2011%20A%20North%20Karachi%20Twp%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1737549818269!5m2!1sen!2s"
                      className=" h-[250px]"
                      style={{ border: 0, borderRadius: "10px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map Location"
                    ></iframe>
                    <div className="map-overlay">Find Us Here</div>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      className="map-button"
                    >
                      Open in Maps
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer_copyright flex flex-col md:flex-row">
                <div className="footer_copyright_webflow text-center md:text-left">
                  <div className="footer_copyright-copy">
                    <div>
                      © 2024{" "}
                      <a
                        style={{ color: "white", textdecoration: "none" }}
                        href="https://softecint.com/"
                      >
                        Softec International.
                      </a>{" "}
                      Leading Development agency
                    </div>
                  </div>
                </div>
                <div className="footer_copyright-links flex flex-wrap justify-center md:justify-between">
                  <a href="/get-quote" className="footer_copyright-link">
                    Get a quote
                  </a>
                  <a href="#" target="_blank" className="footer_copyright-link">
                    Terms &amp; conditions
                  </a>
                  <a
                    aria-label="Privacy Policy"
                    href="/privacy-policy"
                    className="footer_copyright-link"
                  >
                    Privacy policy
                  </a>
                  <a href="#" target="_blank" className="footer_copyright-link">
                    Work at STi
                  </a>
                </div>
                <div
                  aria-label="Part of ZUID Agency Group"
                  className="footer_copyright-zag"
                >
                  <a
                    aria-label="ZUID Agency Group"
                    data-w-id="0731c541-bd37-4a70-6e03-68b74f5f8253"
                    href="#"
                    target="_blank"
                    className="footer_copyright-zag-link w-inline-block"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
