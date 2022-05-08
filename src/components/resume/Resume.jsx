import React from "react";
import About from "./resources/about/About";
import Experience from "./resources/experience/Experience";
import Header from "./resources/header/Header";
import Navbar from "./resources/navbar/Navbar";

const Resume = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
    </>
  );
};

export default Resume;
