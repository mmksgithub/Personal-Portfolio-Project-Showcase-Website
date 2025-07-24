import React from "react";
import img from "../assets/img/back12.avif";
import cv from "../assets/img/Moin_Khan_CV.pdf";

const Hero = () => {
  return (
    <div>
      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section dark-background">
          {/* Background Image */}
          <img src={img} alt="Hero Background" data-aos="fade-in" className="hero-image" />

          {/* Container with Animated Content */}
          <div className="container" data-aos="zoom-out" data-aos-delay={100}>
            <h2>Moin Khan</h2>
            <p>
              I'm{" "}
              <span className="typed" data-typed-items="Full Stack Web Developer">
                Full Stack Web Developer
              </span>
              <span className="typed-cursor typed-cursor--blink"></span>
            </p>

            {/* Social Links */}
            <div className="social-links">
               <a href="https://www.linkedin.com/in/moinkhandev/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin" />
              </a>
              <a href="https://github.com/mmksgithub/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github" />
              </a>
              <a href="https://moinkhan.co.in/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-globe" />
              </a>
              <a href="https://www.instagram.com/moinkhan_8055/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram" />
              </a>
             
            </div>

            {/* Download CV Button */}
            <div style={{ marginTop: "20px" }}>
              <a
                href={cv}
                download="Moin_Khan_CV.pdf"
                style={{
                  textDecoration: "none",
                  padding: "10px 60px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  borderRadius: "5px",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#18d26e";
                  e.target.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "rgba(96, 96, 96, 0.7)";
                  e.target.style.color = "#fff";
                }}
              >
                Download CV
              </a>
            </div>
          </div>
        </section>
        {/* /Hero Section */}
      </main>
    </div>
  );
};

export default Hero;
