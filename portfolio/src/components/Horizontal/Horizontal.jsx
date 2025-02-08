import React,{useEffect,useState} from "react";
import gsap from "gsap";


const Horizontal = () => {
    useEffect(() => {
        gsap.from(".horizontal_paragraph", { opacity: 0, y: 100, duration: 1 });
      }, []);

      const [expandedItem, setExpandedItem] = useState(null);

      const toggleAccordion = (itemId) => {
        setExpandedItem(expandedItem === itemId ? null : itemId);
      };

  return (
    <section className="section_horizontal">
      <div className="background-color-primary">
        <div className="horizontal_wrapper">
          <div className="horizontal_trigger">
            <div className="horizontal_scroll-wrapper" id="mk1">
              <div className="z-index-1">
                <div className="padding-global padding-section-large">
                  <div className="container-large">
                    <div className="horizontal_landing-content">
                      <div
                        className="horizontal_landing-text"
                        style={{ color: "#FFF" }}
                      >
                        <p
                          aria-hidden="true"
                          className="horizontal_paragraph"
                          style={{ color: "#fff" }}
                        >
                          <span className="horizontal_paragraph-span1">
                            State of the art experiences
                          </span>{" "}
                          with launch times that leave you breathless
                        </p>
                        <div
                          className="horizontal_landing-animated-text"
                          style={{ color: "#0C7C59" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SVG Shapes */}
              <div className="horizontal-scrolling_shape1 w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 28 28"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                  aria-hidden="true"
                  role="img"
                >
                  <path
                    d="M1.83386 2.13867H26.1499V26.4547H1.83386V2.13867Z"
                    stroke="#DF3821"
                    strokeWidth="3"
                  />
                </svg>
              </div>
              <div className="horizontal-scrolling_shape2 w-embed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 716 325"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          role="img"
        >
          <path
            d="M1 3C266 20 444.798 322.282 715.137 322.282"
            stroke="url(#paint0_linear_267_811)"
            strokeWidth="5"
          />
          <defs>
            <linearGradient
              id="paint0_linear_267_811"
              x1="1573.23"
              y1="-211.703"
              x2="1573.23"
              y2="290.861"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFF" />
              <stop offset="1" stopColor="#A0FF97" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="horizontal-scrolling_landing-_shape1 w-embed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 46 48"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          role="img"
        >
          {/* <path
            d="M19.5644 0.271441L0.0251465 33.1965L1.82809 34.2665L34.2509 37.531L40.7448 47.612L45.0113 40.4227L45.7904 39.1098L38.7856 28.2466L38.7732 28.2674L21.3674 1.3414L19.5644 0.271441Z"
            fill="url(#paint0_linear_606_98)"
          /> */}
          {/* <defs>
            <linearGradient
              id="paint0_linear_606_98"
              x1="9.79479"
              y1="16.734"
              x2="46.2356"
              y2="38.3596"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#72CEC9" />
              <stop offset="1" stopColor="#A0FF97" />
            </linearGradient>
          </defs> */}
        </svg>
      </div>
      <div className="horizontal-scrolling_landing-shape2 w-embed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 52 52"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          role="img"
        >
          {/* <path
            d="M18.4273 51.0561L33.7049 51.0561L33.7049 33.3475L51.6697 33.3475L51.6697 18.3382L33.7049 18.3382L33.7049 11.6344L33.6143 0.718505L18.3367 0.718504L18.4273 11.6344L18.4273 18.3382L11.5131 18.3382L0.402095 18.4271L0.402094 33.4365L11.5433 33.3475L18.4273 33.3475L18.4273 51.0561Z"
            fill="url(#paint0_radial_606_96)"
          /> */}
          <defs>
            {/* <radialGradient
              id="paint0_radial_606_96"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(34.9518 39.1998) rotate(-150.558) scale(39.6736 38.9539)"
            >
              <stop stopColor="#A0D7F6" />
              <stop offset="0.98" stopColor="#DB74FF" />
            </radialGradient> */}
          </defs>
        </svg>
      </div>
      <div className="horizontal-scrolling_landing-shape3 w-embed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 39 39"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          role="img"
        >
          {/* <circle
            cx="19.5489"
            cy="19.7891"
            r="19.2113"
            fill="url(#paint0_radial_606_97)"
          /> */}
          <defs>
            {/* <radialGradient
              id="paint0_radial_606_97"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(31.9945 28.2567) rotate(162.279) scale(31.6163)"
            >
              <stop offset="0.405" stopColor="#F6FF94" />
              <stop offset="1" stopColor="#3EC9B8" />
            </radialGradient> */}
          </defs>
        </svg>
      </div>
              {/* First Section */}
              <div className="horizontal_first-section">
                <div
                  aria-hidden="true"
                  id="w-node-_84e45bfe-520a-4379-ff33-b8c85913a5e4-4502f132"
                  className="horizontal_represent-wrap"
                >
                  <div
                    className="horizontal_scrolling-paragraph is-first"
                    style={{ color: "#fff" }}
                  >
                    We represent the next generation of digital creators
                  </div>
                  <div className="horizontal-scrolling_shape3 w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      viewBox="0 0 831 949"
                      fill="none"
                      preserveAspectRatio="xMidYMid meet"
                      aria-hidden="true"
                      role="img"
                    >
                      <path
                        d="M605.585 442.043C725.463 442.043 822.644 343.125 822.644 221.105C822.644 99.084 725.463 0.166748 605.585 0.166748C485.708 0.166748 388.527 99.084 388.527 221.105C388.527 343.125 485.708 442.043 605.585 442.043Z"
                        fill="#DF3821"
                      />
                        <path d="M613.31 948.305C733.188 948.305 830.368 849.388 830.368 727.367C830.368 605.346 733.188 506.429 613.31 506.429C493.432 506.429 396.252 605.346 396.252 727.367C396.252 849.388 493.432 948.305 613.31 948.305Z" fill="#0C7C59" />
                        <path d="M260.965 717.964L260.965 37.8728L0.701172 37.8728L0.701172 718.488L2.24424 906.966H262.508L260.965 717.964Z " fill="#ff9d9d" />                    </svg>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  id="w-node-f78b24f1-ec6b-a8df-49fa-cc7bd9870b9e-4502f132"
                >
                  <div
                    className="horizontal_scrolling-paragraph is-second"
                    style={{ color: "#fff" }}
                  >
                    empowering{" "}
                    <span
                      className="horizontal-scrolling_ambitious"
                      style={{ color: "#fff" }}
                    >
                      ambitious brands
                    </span>{" "}
                    to reach their full potential by{" "}
                    <span
                      className="horizontal-scrolling_leveraging"
                      style={{ color: "#0C7C59" }}
                    >
                      leveraging high-design
                    </span>{" "}
                    with
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  id="w-node-e47d0fcb-b3ca-d2ac-e807-c342c179e38a-4502f132"
                >
                  <div
                    className="horizontal_scrolling-paragraph is-power"
                    style={{ color: "#DF3821" }}
                  >
                    the{" "}
                    <span
                      className="horizontal-scrolling_power"
                      style={{ color: "#0C7C59" }}
                    >
                      power of low-code.
                    </span>
                  </div>
                </div>
                 {/* Accordion Section */}
              <div className="horizontal_services">
                <div className="fs_accordion-1_item is-visual-design">
                  <div
                    id="digital-strategy-heading"
                    tabIndex={0}
                    role="button"
                    aria-controls="digital-strategy-content"
                    aria-expanded={expandedItem === "visual-design"}
                    className="fs_accordion-1_header"
                    onClick={() => toggleAccordion("visual-design")}
                    onKeyDown={(e) => e.key === "Enter" && toggleAccordion("visual-design")}
                    style={{cursor: "pointer"}}
                  >
                    <div
                      className="heading-style-h2"
                      style={{ color: "#fff" }}
                    >
                      Digital strategy
                    </div>
                    <div className="fs_accordion-1_arrow-wrapper">
                                                <div className="fs_accordion-1_icon w-embed">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 26 26" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img" style={{transform: expandedItem === "visual-design" ? "rotate(180deg)":"rotate(0deg)", transition:"transform 0.3s ease"}}>
                                                        <path d="M9.27392 25.8901L16.9448 25.8901L16.9448 16.9986L25.9648 16.9986L25.9648 9.4625L16.9448 9.4625L16.9448 6.09655L16.8993 0.615722L9.22845 0.615722L9.27393 6.09655L9.27393 9.4625L5.80234 9.4625L0.223537 9.50717L0.223537 17.0433L5.8175 16.9986L9.27393 16.9986L9.27392 25.8901Z" fill="#000" stroke="#fff" />
                                                    </svg>
                                                </div>
                                            </div>
                  </div>
                  {expandedItem === "visual-design" && (
                  <div
                    id="digital-strategy-content"
                    aria-labelledby="digital-strategy-heading"
                    className="fs_accordion-1_content"
                  >
                    <div className="fs_accordion-1_body">
                      <p
                        className="fs_accordion-1_paragraph mx-1"
                        style={{ color: "#fff" }}
                      >
                        A successful website is built on a robust digital
                        strategy. With our two decades of expertise and a team
                        of top-tier strategists, we&#x27;ve got you covered.
                      </p>
                    </div>
                  </div>
                  )}
                </div>
                <div className="accordion">
      {/* Accordion Item 1 */}
      <div className="fs_accordion-1_item is-ux-design">
        <div
          id="digital-design-heading"
          tabIndex="0"
          role="button"
          aria-controls="digital-design-content"
          aria-expanded={expandedItem === "ux-design"}
          className="fs_accordion-1_header"
          onClick={() => toggleAccordion("ux-design")}
          onKeyDown={(e) => e.key === "Enter" && toggleAccordion("ux-design")}
          style={{ cursor: "pointer" }}
        >
          <div className="heading-style-h2" style={{ color: "#fff" }}>
            UX &amp; UI Design
          </div>
          <div className="fs_accordion-1_arrow-wrapper">
            <div className="fs_accordion-1_icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 26 26"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
                role="img"
                style={{
                  transform:
                    expandedItem === "ux-design"
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <path
                  d="M9.27392 25.8901L16.9448 25.8901L16.9448 16.9986L25.9648 16.9986L25.9648 9.4625L16.9448 9.4625L16.9448 6.09655L16.8993 0.615722L9.22845 0.615722L9.27393 6.09655L9.27393 9.4625L5.80234 9.4625L0.223537 9.50717L0.223537 17.0433L5.8175 16.9986L9.27393 16.9986L9.27392 25.8901Z"
                  fill="#000"
                  stroke="#fff"
                />
              </svg>
            </div>
          </div>
        </div>
        {expandedItem === "ux-design" && (
          <div
            id="digital-design-content"
            aria-labelledby="digital-design-heading"
            className="fs_accordion-1_content"
          >
            <div className="fs_accordion-1_body">
              <p className="fs_accordion-1_paragraph mx-2" style={{ color: "#fff" }}>
                Every brand, from industry leaders to startups, has a unique
                story to tell. We bring these stories to life using user
                experience (UX) and user interface (UI) design, visually
                capturing the essence of each brand in a mind-blowing digital
                design.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Accordion Item 2 */}
      <div className="fs_accordion-1_item is-webflow">
        <div
          id="webflow-cms-heading"
          tabIndex="0"
          role="button"
          aria-controls="webflow-cms-content"
          aria-expanded={expandedItem === "webflow-cms"}
          className="fs_accordion-1_header"
          onClick={() => toggleAccordion("webflow-cms")}
          onKeyDown={(e) =>
            e.key === "Enter" && toggleAccordion("webflow-cms")
          }
          style={{ cursor: "pointer" }}
        >
          <div className="heading-style-h2" style={{ color: "#fff" }}>
            Webflow CMS
          </div>
          <div className="fs_accordion-1_arrow-wrapper">
            <div className="fs_accordion-1_icon w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 26 26"
                fill="none"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
                role="img"
                style={{
                  transform:
                    expandedItem === "webflow-cms"
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <path
                  d="M9.27392 25.8901L16.9448 25.8901L16.9448 16.9986L25.9648 16.9986L25.9648 9.4625L16.9448 9.4625L16.9448 6.09655L16.8993 0.615722L9.22845 0.615722L9.27393 6.09655L9.27393 9.4625L5.80234 9.4625L0.223537 9.50717L0.223537 17.0433L5.8175 16.9986L9.27393 16.9986L9.27392 25.8901Z"
                  fill="#000"
                  stroke="#fff"
                />
              </svg>
            </div>
          </div>
        </div>
        {expandedItem === "webflow-cms" && (
          <div
            id="webflow-cms-content"
            aria-labelledby="webflow-cms-heading"
            className="fs_accordion-1_content"
          >
            <div className="fs_accordion-1_body">
              <p className="fs_accordion-1_paragraph mx-2" style={{ color: "#fff" }}>
                You don’t need to be a developer to manage your website. Our
                Webflow builds are built to last and built to give you complete
                control of your content, including dynamic content like blogs,
                product pages, and news.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
                
              </div>
              </div>
              <div className="horizontal_space"></div>
    <div className="horizontal_second-section">
      <div className="horizontal_second-paragraph">
        <div
          className="horizontal_paragraph is-end"
          style={{ color: "#000" }}
        >
          Meet the{" "}
          <span
            className="horizontal_second-span"
            style={{ color: "#2908e4" }}
          >
            next generation
          </span>{" "}
          of{" "}
          <span
            className="horizontal-scrolling_digital"
            style={{ color: "#fff" }}
          >
            digital creators.
          </span>
        </div>
        <a href="#" className="horizontal_button w-inline-block">
          <div className="heading-style-h2" style={{ color: "#fff" }}>
            Meet Softec
          </div>
          <div className="horizontal-button_icon w-embed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 43 44"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden="true"
              role="img"
            >
              <path
                d="M39.4168 4.53174L19.7085 24.2401"
                stroke="url(#paint0_linear_453_4362)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M39.4168 4.53174L26.8752 40.3651L19.7085 24.2401L3.5835 17.0734L39.4168 4.53174Z"
                stroke="url(#paint1_linear_453_4362)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <linearGradient
                id="paint0_linear_453_4362"
                x1="29.5627"
                y1="4.53174"
                x2="29.5627"
                y2="24.2401"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF5286" />
                <stop offset="1" stopColor="#E2B674" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_453_4362"
                x1="21.5002"
                y1="4.53174"
                x2="21.5002"
                y2="40.3651"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#E2B674" />
              </linearGradient>
            </svg>
          </div>
        </a>
        <div className="horizontal-scrolling_shape12 w-embed">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 845 634"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            role="img"
          >
            <path
              d="M-5.69815e-05 116.02L348.778 633.105L377.093 614.007L651.007 159.264L844.699 133.85L768.542 20.9422L754.635 0.324244L545.864 27.8147L546.085 28.1418L28.3151 96.9215L-5.69815e-05 116.02Z"
              fill="url(#paint0_linear_267_795)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_267_795"
                x1="298.3"
                y1="638.04"
                x2="870.598"
                y2="252.019"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#000" />
                <stop offset="1" stopColor="#40E0D0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Horizontal;
