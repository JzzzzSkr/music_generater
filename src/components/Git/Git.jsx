import React from "react";
import "./Git.scss";
import GitHubIcon from "@mui/icons-material/GitHub";

const Git = () => {
  return (
    <div className="git-wrapper">
      <h3 className="title">This project is Proudly Open Source</h3>
      <p className="subtitle">The source code is available on GitHub.</p>
      <a className="toGitButton" href="https://github.com/JzzzzSkr/music_generater">
        <div className="left">
          <GitHubIcon className="Git-icon"></GitHubIcon>
        </div>
        <span>Star on GitHub</span>
      </a>
    </div>
  );
};

export default Git;
