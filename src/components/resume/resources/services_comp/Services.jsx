import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What experience i have</h5>
      <h2>Experience</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service__head">
            <h3>Lubtrac</h3>
            <h4>Mar 2021 - Current</h4>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="serive__list-icon" />
              <p>
                Designing new solutions and implementing new solutions to
                optimize internal process.
              </p>
            </li>
            <li>
              <BiCheck className="serive__list-icon" />
              <p>
                Give maintenance to applications and generate new
                functionalities.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Agilgob</h3>
            <h4>Jun 2020 - Dec 2020</h4>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="serive__list-icon" />
              <p>
                Developing new functionalities to optimize user experience in
                private government web platforms as modifying functions to
                increase security.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>ITESO</h3>
            <h4>Jan 2020 - Jun 2020</h4>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="serive__list-icon" />
              <p>
                Developing a backend platform to communicate climate monitor
                sensor web to a website to analyze climate log.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;
