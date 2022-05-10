import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>WhatIOffer</h5>
      <h2>Services</h2>
      <div className="container services_container">


        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="serive__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Movile Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="serive__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Services</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="serive__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Services;
