import React from "react";

const Resume = () => {
  return (
    <>
      <main className="main">
        {/* Page Title */}
        <div className="page-title" data-aos="fade">
          <div className="heading">
            <div className="container">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-lg-8">
                  <h1>Resume</h1>
                  <p className="mb-0">
                    My resume highlights a proven track record in delivering
                    high-quality web applications, problem-solving, and adapting
                    to emerging technologies to drive impactful results. 
                  </p>
                </div>
              </div>
            </div>
          </div>
          <nav className="breadcrumbs">
            <div className="container">
              <ol>
                <li>
  <a href="https://moinkhan.co.in/">Home</a>                </li>
                <li className="current">Resume</li>
              </ol>
            </div>
          </nav>
        </div>
        {/* End Page Title */}

        {/* Resume Section */}
        <section id="resume" className="resume section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                <h3 className="resume-title">Summary</h3>
                <div className="resume-item pb-0">
                  <h4>Mohammed Moin Khan</h4>
                  <p>
                    <em>
                      Passionate and dedicated Full Stack Web Developer with a
                      strong foundation in modern web technologies. Experienced
                      in designing, developing, and deploying user-focused web
                      applications that are scalable and efficient. Proficient
                      in both front-end and back-end development.
                    </em>
                  </p>
                  <ul>
                    <li>Ballari, Karnataka, India</li>
                    <li>+91 799 673 4895</li>
                    <li>moinkhan34034@gmail.com</li>
                      <li>
                    <i className="bi" />{" "}
                    
                    <a href="https://www.linkedin.com/in/moinkhandev/">www.linkedin.com/in/moinkhandev/</a>
                  </li>
                  </ul>
                </div>

                <h3 className="resume-title">Education</h3>
                <div className="resume-item">
                  <h4>B.Tech in Computer Science and Engineering</h4>
                  <p>
                    <em>Ballari Institute of Technology and Management</em>
                  </p>
                  <p>
                    Specialized in web development, database management, and
                    software engineering. Gained hands-on experience with
                    various technologies and frameworks through academic
                    projects.
                  </p>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                <h3 className="resume-title">Professional Experience</h3>
                <div className="resume-item">
                  <h4>Full Stack Web Developer</h4>
                  <h5>2023 - Present</h5>
                  <p>
                    <em>Freelancer</em>
                  </p>
                  <ul>
                    <li>
                      Designed and developed responsive, user-friendly web
                      applications using React, Node.js, Express.js, and
                      MongoDB.
                    </li>
                    <li>
                      Implemented RESTful APIs to ensure seamless integration
                      between front-end and back-end systems.
                    </li>
                  
                    <li>
                      Collaborated with cross-functional teams to deliver
                      projects on time and within scope.
                    </li>
                  </ul>
                </div>

                <div className="resume-item">
                  <h4>Intern - Web Developer</h4>
                  <h5>2024 - present</h5>
                  <p>
                    <em>Techno Soft Development</em>
                  </p>
                  <ul>
                    <li>
                      Developed dynamic front-end components using React and
                      JavaScript for client-facing applications.
                    </li>
                    <li>
                      Assisted in creating back-end APIs with Node.js and
                      Express.js.
                    </li>
                    <li>
                      Participated in debugging and improving the codebase for
                      increased efficiency.
                    </li>
                    <li>
                      Contributed to the deployment of web applications on
                      cloud platforms.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Resume Section */}
      </main>
    </>
  );
};

export default Resume;
