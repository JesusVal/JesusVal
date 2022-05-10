import React from "react";
import About from "./resources/about/About";
import Contact from "./resources/contact/contact";
import Experience from "./resources/experience/Experience";
import Footer from "./resources/footer/Footer";
import Header from "./resources/header/Header";
import Navbar from "./resources/navbar/Navbar";
import Services from "./resources/services_comp/Services";

const Resume = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Contact />
      <Footer />
    </>
  );
};

export default Resume;
