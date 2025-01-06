import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    
    <header className="nav_component">
    <div
      data-animation="default"
      data-collapse="none"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="nav w-nav"
    >
      <div className="nav_content">
        <div className="nav_brand-wrapper">
          <a
            href="https://softecint.com/"
            aria-current="page"
            className="nav_brand w-nav-brand w--current"
          >
            <div className="nav_brand-logo w-embed">
              <img src="logo.png" alt="Logo" />
            </div>
          </a>
        </div>
        <nav className="nav_menu">
          <div className="nav_link-wrapper">
            <div className="nav_link-hover"></div>
          </div>
          <div className="nav_link-wrapper is-dropdown">
            <div
              data-hover="true"
              data-delay="300"
              data-w-id="f427bac6-ebd1-5091-ffa8-bad772c306f5"
              className="nav_dropdown w-dropdown"
            >
              <div className="nav_dropdown-toggle w-dropdown-toggle">
                <div className="nav_dropdown-text-wrapper">
                  <div className="nav_dropdown-text-static">
                    <div>Our</div>
                  </div>
                  <div className="nav_dropdown-text-rotate">
                    <div className="nav_dropdown-text-rotate_item is-1">
                      Portfolio
                    </div>
                    <div className="nav_dropdown-text-rotate_item is-2">
                      agencies
                    </div>
                    <div className="nav_dropdown-text-rotate_item is-3">
                      enterprise
                    </div>
                  </div>
                </div>
                <div className="nav_dropdown-icon w-icon-dropdown-toggle"></div>
              </div>
              <nav className="nav_dropdown-list w-dropdown-list">
                <div className="nav_dropdown-list-wrap">
                  <a href="/for-bold-brands" className="nav_dropdown-link w-dropdown-link">
                    A
                  </a>
                  <a href="/for-creative-agencies-en" className="nav_dropdown-link w-dropdown-link">
                    B
                  </a>
                  <a href="/for-webflow-enterprise" className="nav_dropdown-link w-dropdown-link">
                    C
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div className="nav_link-wrapper">
            <a href="/work" className="nav_link w-nav-link">
              Home
            </a>
            <div className="nav_link-hover"></div>
          </div>
          <div className="nav_link-wrapper">
            <a href="/about" className="nav_link w-nav-link">
              About Us
            </a>
            <div className="nav_link-hover"></div>
          </div>
          <div className="nav_link-wrapper">
            <a href="/contact" className="nav_link w-nav-link">
              <span>Our Services</span>
            </a>
            <div className="nav_link-hover"></div>
          </div>
          <div className="nav_link-wrapper">
            <a href="/contact" className="nav_link w-nav-link">
              <span>Blog</span>
            </a>
            <div className="nav_link-hover"></div>
          </div>
          <div className="nav_link-wrapper">
            <a href="/contact" className="nav_link w-nav-link">
              <span>Clients</span>
            </a>
            <div className="nav_link-hover"></div>
          </div>
          <div className="nav_link-wrapper">
            <a href="/contact" className="nav_link w-nav-link">
              <span>Contact Us</span>
            </a>
            <div className="nav_link-hover"></div>
          </div>
        </nav>
        <nav role="navigation" className="nav_menu-wrapper w-nav-menu"></nav>
        <div className="menu-button w-nav-button">
          <div className="w-icon-nav-menu"></div>
        </div>
        <button type="button" aria-label="Toggle Menu" className="nav_button">
          <div className="nav_button-line"></div>
          <div className="nav_button-line"></div>
          <div className="nav_button-line"></div>
        </button>
      </div>
    </div>
  </header>
  )
}

export default Navbar