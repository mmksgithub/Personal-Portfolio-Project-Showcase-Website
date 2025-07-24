import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import img from "../assets/img/mk-logor.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Header = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll

  useEffect(() => {
    AOS.init(); 

    const handleScroll = () => {
      // Check if the page is scrolled
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll); // Add scroll event listener

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileNavToggle = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  return (
    <>
      <header
        id="header"
        className={`header d-flex align-items-center fixed-top ${
          isScrolled ? "scrolled" : ""
        }`} // Add 'scrolled' class when scrolled
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          {/* Logo */}
          <a href="https://moinkhan.co.in" className="logo d-flex align-items-center">
            <img src={img} alt="Logo" />
          </a>

          {/* Navigation Menu */}
          <nav
            id="navmenu"
            className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}
          >
            <ul>
              <li>
                <NavLink to="/" exact="true" activeclassname="active-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeclassname="active-link">
                  About
                </NavLink>
              </li>
           
                <li>
                <NavLink to="/projects" activeclassname="active-link">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" activeclassname="active-link">
                  Services
                </NavLink>
              </li>
                 <li>
                <NavLink to="/resume" activeclassname="active-link">
                  Resume
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeclassname="active-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Nav Toggle */}
          <i
            className={`mobile-nav-toggle d-xl-none bi ${
              isMobileNavActive ? "bi-x" : "bi-list"
            }`}
            onClick={handleMobileNavToggle}
          />
        </div>
      </header>
    </>
  );
};

export default Header;
