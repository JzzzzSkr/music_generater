import React from "react";
import Link from "next/link";
import "./navbar.scss";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = () => {
  return (
    <div className="navbar-wrappter">
      <a href="https://github.com/JzzzzSkr" className="left">
        <div className="logo">
          <GitHubIcon className="icon"></GitHubIcon>
          <span className="name">JzzzzSkr</span>
        </div>
      </a>
      <div className="middle"></div>
      <div className="right">
        <ul className="nav-list">
          <li className="nav-item one">Home</li>
          <li className="nav-item two ">Generater</li>
          <li className="nav-item three ">About me</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
