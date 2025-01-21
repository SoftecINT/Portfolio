import React,{ useState, useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/whitelogo.svg'
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 950) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    
    <header className={`nav_component ${isScrolled ? 'scrolled' : ''}`}>
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
            href="/"
            aria-current="page"
            className="nav_brand w-nav-brand w--current"
          >
            <div className="nav_brand-logo w-embed">
              <img src={logo} alt="Logo" />
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
              
              
            </div>
          </div>
          <div className="nav_link-wrapper">
            <a href="/" className="nav_link w-nav-link">
              Home
            </a>
            <div className="nav_link-hover"></div>
          </div>
          <div className="nav_link-wrapper">
            <a href="/ourservices" className="nav_link w-nav-link">
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
            <a href="/ourclients" className="nav_link w-nav-link">
              <span>Clients</span>
            </a>
            <div className="nav_link-hover"></div>
          </div>
          <div className="nav_link-wrapper">
            <a href="/contactus" className="nav_link w-nav-link">
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