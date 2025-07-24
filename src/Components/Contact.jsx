import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Clear form fields
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Show success message
      setFormSubmitted(true);

      // Hide success message after 3 seconds
      setTimeout(() => setFormSubmitted(false), 3000);
    }
  };
  return (
<main className="main">
  {/* Page Title */}
  <div className="page-title" data-aos="fade">
    <div className="heading">
      <div className="container">
        <div className="row d-flex justify-content-center text-center">
          <div className="col-lg-8">
            <h1>Contact</h1>
            <p>
              If you have a project in mind, need assistance with web
              development, or simply want to collaborate, feel free to reach
              out. I’m always open to discussing new ideas and opportunities.
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
          <li className="current">Contact</li>
        </ol>
      </div>
    </nav>
  </div>
  {/* End Page Title */}
  {/* Contact Section */}
  <section id="contact" className="contact section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4">
        <div className="col-md-6">
          <div
            className="info-item d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <i className="icon bi bi-geo-alt flex-shrink-0" />
            <div>
              <h3>Address</h3>
              <p>Ballari, Karnataka , India</p>
            </div>
          </div>
        </div>
        {/* End Info Item */}
        <div className="col-md-6">
          <div
            className="info-item d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <i className="icon bi bi-telephone flex-shrink-0" />
            <div>
              <h3>Call Me</h3>
              <p>+91 799 673 4895</p>
            </div>
          </div>
        </div>
        {/* End Info Item */}
        <div className="col-md-6">
          <div
            className="info-item d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <i className="icon bi bi-envelope flex-shrink-0" />
            <div>
              <h3>Email Me</h3>
              <p>moinkhan34034@gmail.com</p>
            </div>
          </div>
        </div>
        {/* End Info Item */}
        <div className="col-md-6">
          <div
            className="info-item d-flex align-items-center"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <i className="icon bi bi-share flex-shrink-0" />
            <div>
              <h3>Social Profiles</h3>
              <div className="social-links">
                <a href="https://www.linkedin.com/in/moinkhandev/">
                  <i className="bi bi-linkedin" />
                </a>
                <a href="https://github.com/mmksgithub/">
                  <i className="bi bi-github" />
                </a>
                
                <a href="https://moinkhan.co.in/">
                  <i className="bi bi-globe" />
                </a>
                <a href="https://www.instagram.com/moinkhan_8055/">
                  <i className="bi bi-instagram" />
                </a>
                
              </div>
            </div>
          </div>
        </div>
        {/* End Info Item */}
      </div>
      <form
            onSubmit={handleSubmit}
            className="php-email-form"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            <div className="row gy-4">
              <div className="col-md-6">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                />
                {errors.subject && (
                  <p className="text-danger">{errors.subject}</p>
                )}
              </div>
              <div className="col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  rows={6}
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                {errors.message && (
                  <p className="text-danger">{errors.message}</p>
                )}
              </div>
              <div className="col-md-12 text-center">
                {formSubmitted && (
                  <div className="sent-message">
                    Your message has been sent successfully. Thank you!
                  </div>
                )}
                <button type="submit">Send Message</button>
              </div>
            </div>
          </form>
      {/* End Contact Form */}
    </div>
  </section>
  {/* /Contact Section */}
</main>

)
}

export default Contact;