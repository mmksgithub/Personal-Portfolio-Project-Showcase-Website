import React from 'react'

const Services = () => {
  return (
<main className="main">
  {/* Page Title */}
  <div className="page-title" data-aos="fade">
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1>Services</h1>
            <p className="mb-0">
              As a Full Stack Web Developer, I offer a range of professional
              services designed to help businesses and individuals establish and
              grow their online presence with innovative, efficient, and
              user-friendly solutions.
            
            </p>
          </div>
        </div>
      </div>
    </div>
    <nav className="breadcrumbs">
      <div className="container">
        <ol>
          <li>
  <a href="https://moinkhan.co.in/">Home</a>          </li>
          <li className="current">Services</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* End Page Title */}
  {/* Services Section */}
  {/* Services Section */}
  <section id="services" className="services section">
    <div className="container">
      <div className="row gy-4">
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-code-slash" />
            </div>
            <a  className="stretched-link">
              <h3>Web Development</h3>
            </a>
            <p>
              Building responsive, user-friendly, and scalable web applications
              using modern technologies like React, Node.js, and MongoDB.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-palette" />
            </div>
            <a className="stretched-link">
              <h3>UI/UX Design</h3>
            </a>
            <p>
              Creating intuitive and visually appealing user interfaces that
              enhance user experiences and engagement.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-server" />
            </div>
            <a className="stretched-link">
              <h3>Backend Development</h3>
            </a>
            <p>
              Designing and implementing secure and high-performance server-side
              architectures with Node.js and Express.js.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-shield-lock" />
            </div>
            <a  className="stretched-link">
              <h3>Web Security</h3>
            </a>
            <p>
              Ensuring application security by implementing advanced measures to
              protect against vulnerabilities and threats.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={500}
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-cloud-arrow-up" />
            </div>
            <a className="stretched-link">
              <h3>Cloud Deployment</h3>
            </a>
            <p>
              Deploying and managing applications on cloud platforms like AWS,
              Azure, and Google Cloud for optimal performance.
            </p>
          </div>
        </div>
        {/* End Service Item */}
        <div
          className="col-lg-4 col-md-6"
          data-aos="fade-up"
          data-aos-delay={600}
        >
          <div className="service-item position-relative">
            <div className="icon">
              <i className="bi bi-diagram-3" />
            </div>
            <a  className="stretched-link">
              <h3>RESTful API Integration</h3>
            </a>
            <p>
              Seamlessly integrating RestFul APIs to enhance functionality,
              including payment gateways, messaging services, and more.
              
            </p>
          </div>
        </div>
        {/* End Service Item */}
      </div>
    </div>
  </section>
  {/* /Services Section */}
</main>
  )
}

export default Services;