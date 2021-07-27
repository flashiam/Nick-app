import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { userSignOut } from "../actions/authActions";
import musicLogo from "../img/music-logo.png";

type Props = {
  auth: {
    user: any;
  };
  userSignOut: Function;
};

const Navbar = ({ auth: { userDetails, isLoggedIn }, userSignOut }: any) => {
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
          {userDetails?.type === "general" ? (
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
          {isLoggedIn ? (
            <button
              className="btn btn-transparent sign-out-btn"
              onClick={() => userSignOut()}
            >
              Sign out
            </button>
          ) : (
            <>
              <Link to="#" className="btn btn-secondary-stroked">
                Register
              </Link>
              <Link to="#" className="btn btn-transparent">
                Login
              </Link>
            </>
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
