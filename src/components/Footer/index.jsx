import React from "react";
import logo from "../../_assets/images/logo.png";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="clearfix">
      <div>
        <div className="logo">
          <a href="/">
            <img src={logo} alt="logo" /> <span>پادیوم</span>
          </a>
        </div>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
