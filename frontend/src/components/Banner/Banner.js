import React from "react";
import { banner } from "./import";
//
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner">
      <img src={banner} alt="banner" className="banner_img" />
    </div>
  );
};

export default Banner;
