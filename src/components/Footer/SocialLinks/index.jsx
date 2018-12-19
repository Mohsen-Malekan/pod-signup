import React from "react";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  const socialMedia = ["facebook", "instagram", "twitter"];

  return (
    <div className="social_media">
      <span>پادیوم را در شبکه های اجتماعی دنبال کنید.</span>
      {socialMedia.map(social => (
        <SocialLink name={social} key={social} />
      ))}
    </div>
  );
};

export default SocialLinks;
