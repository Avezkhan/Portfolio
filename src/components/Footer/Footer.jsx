import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>pathanavez8027@gmail.com</span>
        <div className="f-icons">
        <a href="https://www.instagram.com/i_m_avezkhan/" target="_blank" rel="noreferrer">
          <Insta color="white" size={"3rem"} alt="https://www.instagram.com/i_m_avezkhan/" />
          </a>
        <a href="https://m.facebook.com/100054558105188/" target="_blank" rel="noreferrer">
          <Facebook color="white" size={"3rem"} alt="https://m.facebook.com/100054558105188/" />
          </a>
          <a href="https://github.com/Avezkhan" target="_blank" rel="noreferrer">
          <Gitub color="white" size={"3rem"} alt="https://github.com/Avezkhan"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
