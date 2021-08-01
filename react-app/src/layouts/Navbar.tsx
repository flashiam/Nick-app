import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { userSignOut } from "../actions/authActions";
import musicLogo from "../img/music-logo.png";
import profileImg from "../img/charlie-puth.png";

type Props = {
  auth: {
    user: any;
  };
  userSignOut: Function;
};

const Navbar = ({
  auth: { userDetails, isLoggedIn, userType },
  userSignOut,
}: any) => {
  const history = useHistory();
  const [loginStatus, setStatus] = useState<boolean>(false);

  // useEffect(() => {
  //   isLoggedIn && history.push("/sign_in");
  // }, [isLoggedIn]);

  return (
    <nav className="navbar py-1 container">
      <Link to="/" className="logo-contain">
        <img src={musicLogo} alt="logo" className="logo-img" />
        <h3 className="head-3 pl-0 semi-med">Musix</h3>
      </Link>
      <div className="right-nav-content">
        <ul className="nav-links">
          {userType === "general" ? (
            <li className="link">
              <Link to="/general" className="light">
                General
              </Link>
            </li>
          ) : (
            <li className="link">
              <Link to="/influencer" className="light">
                Influencer
              </Link>
            </li>
          )}
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
          {localStorage.getItem("user-auth") ? (
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
                {userType === "general" ? (
                  <div className="points-contain user-stat">
                    <i className="fa fa-diamond"></i>
                    <p className="lead-3">125 pts.</p>
                  </div>
                ) : (
                  <div className="listen-contain user-stat">
                    <i className="fa fa-music"></i>
                    <p className="lead-3">3.8k listens</p>
                  </div>
                )}
              </div>
              {/* Pop up options */}
              <div className="user-pop-up">
                <ul className="options-contain">
                  <li className="option">
                    <a href="#" className="semi-med">
                      Profile
                    </a>
                  </li>
                  <li className="option">
                    <a href="#" className="semi-med">
                      Accounts
                    </a>
                  </li>
                  <li className="option">
                    <a href="#" className="semi-med">
                      Stats
                    </a>
                  </li>
                </ul>
                <button
                  className="btn btn-semi-med-stroked"
                  onClick={() => userSignOut()}
                >
                  <i className="material-icons">logout</i>
                  <p className="lead-2">Sign out</p>
                </button>
              </div>
            </div>
          ) : (
            <Link to="/sign_in" className="btn btn-secondary">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

// Function to map state to props
const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userSignOut })(Navbar);
