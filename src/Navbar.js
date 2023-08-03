import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav">
      <img src="./images/icon.png" alt="yak_logo" className="icon"></img>
      <ul className="nav-links">
          <li className="nav-wrapper"><Link className="nav-item" to={"/"}>Home</Link></li>
          <li className="nav-wrapper"><Link className="nav-item" to={"/physical"}>Physiology</Link></li>
          <li className="nav-wrapper"><Link className="nav-item" to={"/domestication"}>Domestication</Link></li>
          <li className="nav-wrapper"><Link className="nav-item" to={"/cultural"}>Culture</Link></li>
          <li className="nav-wrapper"><Link className="nav-item" to={"/bibliography"}>Bibliography</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
