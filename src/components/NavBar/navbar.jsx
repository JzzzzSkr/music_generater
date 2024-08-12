"use client";

import React from "react";
import Link from "next/link";
import "./navbar.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  // home  = '/' Generator = '/generator' About me = '/about' 帮我生成相应的onclick代码

  const navigateTo = (path) => {
    router.push(path);
  };

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
          <li className="nav-item one" onClick={() => navigateTo("/")}>
            Home
          </li>
          <li
            className="nav-item two "
            onClick={() => navigateTo("/generator")}
          >
            Generator
          </li>
          <li className="nav-item three " onClick={() => navigateTo("/about")}>
            About me
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
