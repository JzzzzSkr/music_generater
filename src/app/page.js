import React from "react";
import "./page.scss";
import Banner from "@/components/Banner/Banner";
import Git from "@/components/Git/Git";

const Page = () => {
  return (
    <div className="home-wrpper">
      <Banner></Banner>
      <Git></Git>
    </div>
  );
};

export default Page;
