import React from "react";
import "./header.css";
import ProfilePhoto from "../../../../assets/profile_photo.png";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, yo soy</h5>
        <h1>Jesus Valadez</h1>
        <h5 className="text-light">Fullstack developer</h5>

        <div className="header__documents">
          <a href={ProfilePhoto} className="btn" download>
            Download
          </a>
          <a href="#contact" className="btn btn-primary">
            Contacto
          </a>
        </div>

        <div className="header__socials">
          <a href="https://www.linkedin.com/in/jesus-antonio-valadez-flores" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/JesusVal" target="_blank">
            <FaGithubSquare />
          </a>
        </div>

        <div className="profile__photo">
          <img src={ProfilePhoto} alt="profile_photo" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
