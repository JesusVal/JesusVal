import React from "react";
import "./navbar.css";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav>
      <a href="#">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#projects">
        <AiOutlineFundProjectionScreen />
      </a>
      <a href="#contact">
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Navbar;
