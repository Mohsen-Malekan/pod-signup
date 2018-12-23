import React from "react";
import logo from "../../_assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <a className="logo" href="/">
        <img src={logo} alt="Logo" />
        <div className="slogan">
          <span>پادیوم</span>
        </div>
      </a>
      <div className="login-link">
        قبلا ثبت نام کرده اید؟{" "}
        <a
          href={`https://accounts.pod.land:443/oauth2/authorize/?client_id=${
            process.env.REACT_APP_CLIENT_ID
          }&response_type=code&scope=profile:write%20phone:write%20email:write%20legal:write%20address:write%20client:write%20&state=eyJvdHQiOm51bGwsImV4cGlyZVRpbWUiOjAsInVyaSI6Imh0dHBzOi8vcGFuZWwucG9kLmxhbmQ6NDQzL0F1dGgvTG9naW5DYWxsYmFjay8iLCJ0b2tlbiI6bnVsbCwibWVzc2FnZUlkIjozMTYxLCJzZXJ2ZXJLZXkiOjAsInBhcmFtZXRlcnMiOm51bGx9&redirect_uri=https://panel.pod.land:443/Auth/LoginCallback/`}
        >
          وارد شوید
        </a>
      </div>
    </header>
  );
};

export default Header;
