import { useState, useRef, useEffect, MutableRefObject } from "react";
import { Link } from "react-router-dom";
import musicLogo from "../img/music-logo.png";

const NavbarMobo = () => {
  const [navOpen, setNav] = useState<boolean>(false);

  const navToggler = useRef<HTMLInputElement>(null);

  const ctrlOverflow = () => {
    if (navOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  // Function to close nav
  const closeNav = () => setNav(false);

  useEffect(() => {
    ctrlOverflow();
  }, [navOpen]);

  return (
    <nav className="nav-mobo py-1 container">
      <div className="logo-contain">
        <img src={musicLogo} alt="logo" className="logo-img" />
        <h3 className="head-3 pl-0">Musix</h3>
      </div>
      <div className="nav-btn-contain">
        <input
          ref={navToggler}
          type="checkbox"
          className="toggler"
          onClick={() => setNav(prevNav => !prevNav)}
          checked={navOpen}
        />
        <div className="hamburger">
          <div className="menu-line"></div>
        </div>
        <div className="nav-menu">
          <div className="menu-links-contain">
            <ul className="menu-links">
              <li className="link">
                <Link to="/general" className="light" onClick={closeNav}>
                  General
                </Link>
              </li>
              <li className="link">
                <Link to="/influencer" className="light" onClick={closeNav}>
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
