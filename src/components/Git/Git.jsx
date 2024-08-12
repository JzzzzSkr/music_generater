import React from "react";
import "./Git.scss";
import GitHubIcon from "@mui/icons-material/GitHub";

const Git = () => {
  return (
    <div className="git-wrapper">
      <h3 className="title">This project is Proudly Open Source</h3>
      <p className="subtitle">The source code is available on GitHup.</p>
      <a className="toGitButton">
        <div className="left">
          <GitHubIcon className="Git-icon"></GitHubIcon>
        </div>
        <span>Start on GitHup</span>
      </a>
    </div>
  );
};

export default Git;
