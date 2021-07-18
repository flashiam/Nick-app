import React from "react";
import musicLogo from "../img/music-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar py-1 container">
      <div className="logo-contain">
        <img src={musicLogo} alt="logo" className="logo-img" />
        <h3 className="head-3 pl-0">Musix</h3>
      </div>
      <div className="right-nav-content">
        <ul className="nav-links">
          <li className="link">
            <Link to="/general" className="light">
              General
            </Link>
          </li>
          <li className="link">
            <Link to="/influencer" className="light">
              Influencer
            </Link>
          </li>
          <li className="link">
            <Link to="#" className="light">
              Support
            </Link>
          </li>
          <li className="link">
            <Link to="#" className="light">
              Download
            </Link>
          </li>
        </ul>
        <div className="nav-btn-grp">
          <Link to="#" className="btn btn-secondary-stroked">
            Register
          </Link>
          <Link to="#" className="btn btn-transparent">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
