import React from "react";
import "./Banner.scss";
import { Button } from "@mui/material";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="up">
        <h3>Generate your favourite music in seconds</h3>
      </div>
      <div className="middle">
        <p>
          This web page makes it easy for you to generate music in seconds,
          completely for free.
        </p>
      </div>
      <div className="done">
        <Button>Generate your music</Button>
        <Button>Learn more</Button>
      </div>
    </div>
  );
};

export default Banner;
