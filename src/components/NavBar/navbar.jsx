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
      <div className="middle">2</div>
      <div className="right">3</div>
    </div>
  );
};

export default Navbar;
