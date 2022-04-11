import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola, yo soy</h5>
        <h1>Jesus Valadez</h1>
        <h5 className="text-light">Fullstack developer</h5>
      </div>
    </header>
  );
};

export default Header;
