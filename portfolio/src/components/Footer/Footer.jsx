import React from "react";
import "./Footer.css";
import "../Cards/Library.css";
import logo from "../../assets/whitelogo.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_component">
        <div className="padding-footer">
          <div className="container-large">
            <div className="footer_content">
              <div className="footer_content-grid">
                <div
                  id="w-node-_538f686c-038b-0f86-7d70-90950202eb2d-0202eb27"
                  className="footer_item"
                >
                  <a
                    aria-label="Logo"
                    href="/"
                    aria-current="page"
                    className="footer_brand w-inline-block w--current"
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
                    <div className="heading-style-h3">
                      Code{" "}
                      <span className="footer_text-span">
                      that Connects&#x27; Solutions that
                      </span>{" "}
                       Work.
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_538f686c-038b-0f86-7d70-90950202eb37-0202eb27"
                  className="footer_item"
                >
                  <ul role="list" className="footer_contact-list">
                    <li className="footer_contact-list-item">
                      <a
                        href="mailto:jobsoftec@gmail.com"
                        className="footer_contact-link w-inline-block"
                      >
                        <div>admin@softecint.com</div>
                        <div className="link-line"></div>
                      </a>
                    </li>
                    <li className="footer_contact-list-item">
                      <a
                        href="tel:+31132084030"
                        className="footer_contact-link w-inline-block"
                      >
                        <div>(+92) 345 - 8855857</div>
                        <div className="link-line"></div>
                      </a>
                    </li>
                    <li className="footer_contact-list-item is-cta">
                      <a
                        href="/blog"
                        className="button is-secondary is-footer isblog w-inline-block"
                      >
                        <div className="button-outer"></div>
                      </a>
                    </li>
                    <li className="footer_contact-list-item is-cta">
                      <a href="/get-quote" className=" is-footer w-inline-block">
                        <button className="btn">
                          <span>BOOK A CALL</span>
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="footer_item"
                >
                  <div
                    className="location_item"
                  >
                    <div className="location_image-wrapper">
                      
                    </div>
                    <div className="location_heading is-tilburg">
                      Karachi (HQ)
                    </div>
                    <div className="location_separator"></div>
                    <div>
                      Office No B-451
                      <br />
                      11-A Karachi
                      <br />
                      The Netherlands
                    </div>
                  </div>
                </div>
                <div
                  className="footer_item"
                >
                  <div
                    className="location_item"
                  >
                    <div className="location_image-wrapper is-veghel">
                      <img
                        src="https://cdn.prod.website-files.com/65af9702e930a21edff0f0e0/65b79663a9bc5dfa356e12dd_strijp%20t.webp"
                        loading="lazy"
                        sizes="100vw"
                        srcset="https://cdn.prod.website-files.com/65af9702e930a21edff0f0e0/65b79663a9bc5dfa356e12dd_strijp%20t-p-500.webp 500w, https://cdn.prod.website-files.com/65af9702e930a21edff0f0e0/65b79663a9bc5dfa356e12dd_strijp%20t.webp 694w"
                        alt=""
                      />
                    </div>
                    <div className="location_heading is-veghel">
                      Coming Soon !!!
                    </div>
                    <div className="location_separator"></div>
                    <div>
                     
                    </div>
                  </div>
                </div>
                <div
                  className="footer_item"
                >
                  <div
                      className="location_item"
                  >
                    <div className="location_image-wrapper">
                      
                    </div>
                    <div className="location_heading is-eindhoven">
                      Coming Soon !!!
                    </div>
                    <div className="location_separator"></div>
                    <div>
                      
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_copyright">
                <div className="footer_copyright_webflow">
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
                <div className="footer_copyright-links">
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
