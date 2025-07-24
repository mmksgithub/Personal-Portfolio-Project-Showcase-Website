import React from 'react';
import img1 from "../assets/img/vasudevimg.png"
import img2 from "../assets/img/imaams.png"
import img3 from "../assets/img/labimage.png"
import img4 from "../assets/img/portfolio.png"
import img5 from "../assets/img/college.png"
const projects = [
{
  title: "Vasudev Hospital – CMS Website",
  description: "Developed a fully responsive and SEO-optimized website for Vasudev Hospital, featuring an integrated Content Management System (CMS) that allows administrators to efficiently update every section of the website—including doctors, departments, services, banners, and gallery—is fully manageable by the admin without coding or technical knowledge. Designed with performance, scalability, and user experience in mind for ease of use.",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Material UI",],
  image: img1,
  link: "https://www.vasudevhealthcare.com/",
  code:"https://www.vasudevhealthcare.com/",
}
,
{
  title: "IMA AMS – Membership Management Portal",
 description: "Designed and developed a comprehensive membership management portal for the Indian Medical Association (IMA AMS), enabling doctors to apply online, track their application status, and automatically receive digital certificates via email. The system features admin approval workflows, role-based dashboards, real-time data access, and automated SMS/email notifications. Built with a clean, responsive UI for a seamless experience across all devices.",

  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Material UI", "Redux", "Bootstrap"],
  image: img2,
  link: "https://ima-ams.com/",
  code: "https://ima-ams.com/",

}, 

{
  title: "WhatsApp – Based Report Delivery System",
  description: "Developed a WhatsApp-integrated report delivery system for a diagnostic laboratory, streamlining the process of securely sending medical reports to patients. Administrators can easily upload reports and dispatch them instantly via WhatsApp through an intuitive interface. The solution reduced manual workload, improved communication speed, and enhanced overall patient experience. Built with a responsive UI for seamless access across all devices.",
  tech: ["React.js", "Node.js", "Express.js", "SQL server", "Material UI",],
  image: img3,
  link: "https://admin.moinkhan.co.in/login",
  code: "https://admin.moinkhan.co.in/login",

},
{
  title: "Personal Portfolio – Project Showcase Website",
  description: "Designed and developed a full-stack personal portfolio website to professionally showcase my technical skills, project work, and resume. The site features a clean, responsive design with a dynamic project section, downloadable CV, and social links. Built with the MERN stack and Material UI, it highlights modern web practices, SEO optimization, and smooth navigation to enhance user experience across all devices.",
  tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Material UI"],
  image: img4,
  link: "https://moinkhan.co.in/",
  code: "https://moinkhan.co.in/"
},
{
  title: "Department Website with AI Integration – ( In Development )",
  description: "Currently building a comprehensive web portal for a university Data Science department, designed to streamline academic and administrative tasks. The portal features role-based authentication (Admin, Faculty, Student), an integrated AI chatbot for instant query resolution, a content management system (CMS) for dynamic content updates, and interactive dashboards for real-time insights. Developed with the MERN stack and Next.js, the application emphasizes modular architecture, scalability, and responsive design for seamless cross-device usage.",
  tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Material UI", "Tailwind CSS"],
  image: img5,
  // link: "",
  // code: "https://moinkhan.co.in/"
}



];

const Projects = () => {
  return (
    <main className="main">
  <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>My Projects</h1>
                <p className="mb-0">
                  As a Full Stack Web Developer specializing in the MERN stack, I have built and deployed a variety of modern, responsive, and scalable web applications. My projects reflect a strong focus on clean architecture, user experience, and real-world functionality—ranging from dynamic dashboards and admin panels to automated systems and CMS-integrated websites.
                </p>
              </div>
            </div>
          </div>
        </div>
         <nav className="breadcrumbs">
      <div className="container ">
        <ol>
          <li>
            <a href="https://moinkhan.co.in/">Home</a>
          </li>
          <li className="current"> My Projects</li>
        </ol>
      </div>
    </nav>
      </div>

      <section id="projects" className="section py-5 ">
        <div className="container py-4">
  <div className="row gy-4">
    {projects.map((project, index) => (
<div className={`${project.title.includes("Department") ? "col-12" : "col-md-6"}`} key={index}>
  <div className={`project-card h-100 ${project.title.includes("Department") ? "compact-card" : ""}`}>
          <div className={`project-image-wrapper mb-3 ${project.title.includes("Department") ? "department-img-wrapper" : ""}`}>
 <a href={project.link} target="_blank" rel="noopener noreferrer">
  <img
    src={project.image}
    className={`project-img ${project.title.includes("Department") ? "department-img" : ""}`}
    alt={project.title}
  />
</a>

</div>


          <h5 className="card-title d-flex justify-content-between align-items-center text-white">
  {project.title}
  <div className="d-flex gap-3 links">
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <i className="bi bi-box-arrow-up-right "></i>
    </a>
    <a href={project.code} target="_blank" rel="noopener noreferrer">
      <i className="bi bi-github "></i>
    </a>
  </div>
</h5>

          <p className="text-light small mt-2">{project.description}</p>
          <div className="mt-auto d-flex flex-wrap gap-2">
            {project.tech.map((tag, i) => (
              <span key={i} className="badge">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      </section>
    </main>
  );
};

export default Projects;
