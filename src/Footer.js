import React from "react";
import './App.css';

function Footer() {
  return(
    <div className="footer">
      <p className="personal-name">Nicholas Wickboldt</p>
      <a href="#" className="back-to-top">back to top</a>
      <a href="https://github.com/NickWickboldt" target="_blank" className="github-link"><img src="./images/github-icon.png" alt="" className="github-icon" /></a>
    </div>
  )
}

export default Footer;