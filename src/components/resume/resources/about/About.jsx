import React from "react";
import "./about.css";
import ProfilePhoto from "../../../../assets/profile_photo.png";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Acerca de mi</h5>
      <h2>Acerca de mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ProfilePhoto} alt="About image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 years</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Clientes</h5>
              <small>lorem ipsum</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Proyectos</h5>
              <small>4</small>
            </article>
          </div>
          <p>
            I'm a full-stack developer from Guadalajara, with 2 years of
            experience designing, developing, and implementing web and mobile
            applications. I'm looking to join a team to continue to grow up my
            skill set while contributing to the development of the team.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
