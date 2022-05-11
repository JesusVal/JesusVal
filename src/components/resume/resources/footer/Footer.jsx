import React from "react";
import "./footer.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Jesus Valadez
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">My Skills</a>
        </li>
        <li>
          <a href="#services">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/jesus-antonio-valadez-flores">
          <FaLinkedin />
        </a>
        <a href="https://github.com/JesusVal" target="_blank">
          <FaGithubSquare />
        </a>
      </div>

      <div className="footer__copyright">
        <small>Jesus Valadez</small>
      </div>
    </footer>
  );
};

export default Footer;
