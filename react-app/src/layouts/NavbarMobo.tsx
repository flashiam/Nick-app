import React from "react";
import { Link } from "react-router-dom";
import musicLogo from "../img/music-logo.png";

const NavbarMobo = () => {
  return (
    <nav className="nav-mobo py-1">
      <div className="logo-contain">
        <img src={musicLogo} alt="logo" className="logo-img" />
        <h3 className="head-3 pl-0">Musix</h3>
      </div>
      <div className="nav-btn-contain">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div className="menu-line"></div>
        </div>
        <div className="nav-menu">
          <div className="menu-links-contain">
            <ul className="menu-links">
              <li className="link">
                <Link to="/general" className="light">
                  General
                </Link>
              </li>
              <li className="link">
                <Link to="/general" className="light">
                  Influencer
                </Link>
              </li>
              <li className="link">
                <Link to="/general" className="light">
                  Support
                </Link>
              </li>
              <li className="link">
                <Link to="/general" className="light">
                  Download
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarMobo;
