import React, { useEffect } from "react";
import img from "../assets/img/profile-img.jpeg";
import PureCounter from "@srexi/purecounterjs";

const About = () => {
  useEffect(() => {
    // Initialize PureCounter.js
    new PureCounter();

    // Animate Skills Progress Bars
    const skillsContent = document.querySelectorAll(".progress-bar");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = `${entry.target.getAttribute(
              "aria-valuenow"
            )}%`;
          }
        });
      },
      { threshold: 0.5 }
    );

    skillsContent.forEach((bar) => observer.observe(bar));
  }, []);

  return (
    <>
  
 
  <main className="main">
    {/* Page Title */}
    <div className="page-title" data-aos="fade">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>About</h1>
              <p className="mb-0">
                I am a dedicated Full Stack Web Developer with a strong passion
                for creating innovative web solutions. With expertise in modern
                technologies and a commitment to delivering exceptional user
                experiences, I focus on transforming ideas into seamless,
                scalable applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
  <a href="https://moinkhan.co.in/">Home</a>            </li>
            <li className="current">About</li>
          </ol>
        </div>
      </nav>
    </div>
    {/* End Page Title */}
    {/* About Section */}
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img
              src={img}
              className="img-fluid"
              alt=""
            />
          </div>
          <div className="col-lg-8 content">
            <h2>Full Stack Web Developer.</h2>
            <p className="fst-italic py-3">
              Passionate about crafting scalable, user-friendly, and efficient
              web solutions. With expertise in modern web technologies, I
              transform ideas into reality while ensuring seamless user
              experiences.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Website:</strong>{" "}
                    <a href="www.moinkhan.co.in">www.moinkhan.co.in</a>
                  </li>
                   <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>LinkedIn:</strong>{" "}
                    <a href="https://www.linkedin.com/in/moinkhandev/">www.linkedin.com/in/moinkhandev</a>
                  </li>
                   <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Github:</strong>{" "}
                    <a href="https://github.com/mmksgithub/">www.github.com/mmksgithub</a>
                  </li>

                 
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Degree:</strong>{" "}
                    <span>B.Tech in Computer Science</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Email:</strong> <span>moinkhan34034@gmail.com</span>
                  </li>
                   <li>
                    <i className="bi bi-chevron-right" />{" "}
                    <strong>Phone:</strong> <span>+91 799 673 4895</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Driven by innovation and continuous learning, I thrive on building
              dynamic applications that solve real-world problems. <br />
              My journey is driven by continuous learning, collaboration, and
              the pursuit of excellence in every project I undertake. <br />
              Let's collaborate to create something exceptional.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* /About Section */}
    {/* Stats Section */}
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-emoji-smile" />
            <div className="stats-item">
              <span
                data-purecounter-start={0}
                data-purecounter-end={15}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Happy Clients</p>
            </div>
          </div>
          {/* End Stats Item */}
          <div className="col-lg-6 col-md-6 d-flex flex-column align-items-center">
            <i className="bi bi-journal-richtext" />
            <div className="stats-item">
              <span
                data-purecounter-start={0}
                data-purecounter-end={20}
                data-purecounter-duration={1}
                className="purecounter"
              />
              <p>Projects</p>
            </div>
          </div>
          {/* End Stats Item */}
        </div>
        {/* End Stats Item */}
      </div>
    </section>
    {/* /Stats Section */}
    {/* Skills Section */}
    <section id="skills" className="skills section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Skills</h2>
        <div>
          <span>My</span> <span className="description-title">Skills</span>
        </div>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row skills-content skills-animation">
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                <span>HTML</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>CSS</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>JavaScript</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>React JS</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>

             <div className="progress">
              <span className="skill">
                <span>Next JS</span> <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>Redux</span> <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
          </div>
          <div className="col-lg-6">
            <div className="progress">
              <span className="skill">
                <span>Node JS</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>Express JS</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>Mongo DB</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>SQL</span> <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
             <div className="progress">
              <span className="skill">
                <span>SQL server</span> <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
            <div className="progress">
              <span className="skill">
                <span>CMS</span> <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
            {/* End Skills Item */}
          </div>
        </div>
      </div>
    </section>
    {/* /Skills Section */}
    {/* Interests Section */}
    <section id="interests" className="interests section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Features</h2>
        <div>
          <span>I'm</span>{" "}
          <span className="description-title">interested in</span>
        </div>
      </div>
      {/* End Section Title */}
      <div className="container">
        <div className="row gy-4">
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <div className="features-item">
              <i className="bi bi-eye" style={{ color: "#ffbb2c" }} />
              <h3>
                <a className="stretched-link">
                  Responsive Web Design
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="features-item">
              <i className="bi bi-infinity" style={{ color: "#5578ff" }} />
              <h3>
                <a className="stretched-link">
                  Frontend Development
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="features-item">
              <i className="bi bi-mortarboard" style={{ color: "#e80368" }} />
              <h3>
                <a  className="stretched-link">
                  Backend Development
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <div className="features-item">
              <i className="bi bi-nut" style={{ color: "#e361ff" }} />
              <h3>
                <a  className="stretched-link">
                  API Integration
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <div className="features-item">
              <i className="bi bi-shuffle" style={{ color: "#47aeff" }} />
              <h3>
                <a className="stretched-link">
                  Database Management
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="features-item">
              <i className="bi bi-star" style={{ color: "#ffa76e" }} />
              <h3>
                <a  className="stretched-link">
                  Cloud Deployment
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={700}
          >
            <div className="features-item">
              <i className="bi bi-x-diamond" style={{ color: "#11dbcf" }} />
              <h3>
                <a className="stretched-link">
                  UI/UX Design
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={800}
          >
            <div className="features-item">
              <i className="bi bi-camera-video" style={{ color: "#4233ff" }} />
              <h3>
                <a className="stretched-link">
                  SEO Optimization
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={900}
          >
            <div className="features-item">
              <i className="bi bi-command" style={{ color: "#b2904f" }} />
              <h3>
                <a className="stretched-link">
                  E-commerce Solutions
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={1000}
          >
            <div className="features-item">
              <i className="bi bi-dribbble" style={{ color: "#b20969" }} />
              <h3>
                <a className="stretched-link">
                  Team Collaboration
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={1100}
          >
            <div className="features-item">
              <i className="bi bi-activity" style={{ color: "#ff5828" }} />
              <h3>
                <a className="stretched-link">
                  CMS Module
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
          <div
            className="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay={1200}
          >
            <div className="features-item">
              <i
                className="bi bi-brightness-high"
                style={{ color: "#29cc61" }}
              />
              <h3>
                <a className="stretched-link">
                  Version Control
                </a>
              </h3>
            </div>
          </div>
          {/* End Feature Item */}
        </div>
      </div>
    </section>
    {/* /Interests Section */}
  </main>
    {/* Scroll Top */}
  <a
    href="#"
    id="scroll-top"
    className="scroll-top d-flex align-items-center justify-content-center"
  >
    <i className="bi bi-arrow-up-short" />
  </a>

  {/* Vendor JS Files */}
  {/* Main JS File */}
</>

  )
}

export default About;