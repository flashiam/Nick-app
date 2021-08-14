import { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import musicLogo from "../img/music-logo.png";

import { userSignOut } from "../actions/authActions";

const NavbarMobo = ({ auth: { userType, userDetails }, userSignOut }: any) => {
  const [navOpen, setNav] = useState<boolean>(false);
  const authToken = localStorage.getItem("user-auth");
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

  // Function to animate nav links
  const animateNavLinks = () => {
    gsap.to(".link", {
      opacity: 1,
      x: 0,
      stagger: { amount: 1 },
      duration: 300,
    });
  };

  useEffect(() => {
    ctrlOverflow();
    animateNavLinks();
  }, [navOpen]);

  return (
    <nav className="nav-mobo py-1 container">
      <div className="logo-contain">
        <img src={musicLogo} alt="logo" className="logo-img" />
        <h3 className="head-3 pl-0">MUSIX</h3>
      </div>
      <div className="nav-btn-contain">
        <input
          ref={navToggler}
          type="checkbox"
          className="toggler"
          // onClick={() => setNav(prevNav => !prevNav)}
          checked={navOpen}
          onChange={e => (e.target.checked ? setNav(true) : setNav(false))}
        />
        <div className="hamburger">
          <div className="menu-line"></div>
        </div>
        <div className="nav-menu">
          <div className="menu-links-contain">
            <div className="user-profile-contain">
              <div className="profile-pic">
                {userDetails?.picture ? (
                  <img
                    src={userDetails?.picture}
                    alt="user profile"
                    className="user-pic"
                  />
                ) : (
                  <i className="material-icons">account_circle</i>
                )}
              </div>
              <div className="right-content">
                <div className="user-name">
                  {userDetails?.name || "Musix User"}
                </div>
              </div>
            </div>
            <ul className="menu-links">
              {userType === "general" ? (
                <li className="link">
                  <Link to="/general" className="light" onClick={closeNav}>
                    General
                  </Link>
                </li>
              ) : (
                <li className="link">
                  <Link to="/influencer" className="light" onClick={closeNav}>
                    Influencer
                  </Link>
                </li>
              )}
              <li className="link">
                <Link to="/general" className="light">
                  Support
                </Link>
              </li>
              <li className="link">
                <Link to="/general" className="light">
                  Privacy policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="btn-grp mt-1">
            {authToken ? (
              <button
                className="btn btn-primary-stroked"
                onClick={() => userSignOut()}
              >
                Sign Out
              </button>
            ) : (
              <Link to="/sign_in" className="btn btn-primary">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userSignOut })(NavbarMobo);
