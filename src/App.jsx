import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/css/main.css";
import ResumePage from "./Pages/ResumePage";
import ServicesPage from "./Pages/ServicesPage";
import ProjectsPage from "./Pages/ProjectsPage";
import ContactPage from "./Pages/ContactPage";

    

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Favicon */}
        <link href="../assets/img/favicon.png" rel="icon" />
        <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

        {/* Fonts */}
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap"
          rel="stylesheet"
        />

        {/* Vendor CSS Files */}
        <link
          href="../assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="../assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="../assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="../assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
        <link
          href="../assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />

        {/* Main CSS File */}
        <link href="../assets/css/main.css" rel="stylesheet" />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/services" element={<ServicesPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />

          <Route path="/contact" element={<ContactPage />} />

          

        </Routes>
      </div>
    </Router>
  );
};

export default App;
