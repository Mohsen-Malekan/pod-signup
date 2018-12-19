import React from "react";
import facebook from "../../../_assets/images/facebook.svg";
import instagram from "../../../_assets/images/instagram.svg";
import twitter from "../../../_assets/images/twitter.svg";

const SocialLink = ({ name }) => {
  const socialMedia = {
    facebook: {
      address: "http://www.facebook.com",
      icon: facebook
    },
    instagram: {
      address: "http://www.instagram.com",
      icon: instagram
    },
    twitter: {
      address: "http://www.twitter.com",
      icon: twitter
    }
  };

  return (
    <a
      href={socialMedia[name].address}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={socialMedia[name].icon} alt={`${name}_logo`} />
    </a>
  );
};

export default SocialLink;
