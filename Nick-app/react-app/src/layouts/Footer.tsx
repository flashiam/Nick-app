import { connect } from "react-redux";
import appLogo from "../img/music-logo.png";
import { Link } from "react-router-dom";

type Props = {
  userType?: string;
};

const Footer = ({ userType }: Props) => {
  return (
    <footer className="main-footer py-4 mt-2">
      <div className="container">
        <div className="footer-item footer-item-0">
          <div className="app-logo-contain">
            <div className="logo">
              <img src={appLogo} alt="logo" className="logo-img" />
            </div>
            <h2 className="head-2 pl-0">MUSIX</h2>
          </div>
          <p className="lead-3 pt-0">&copy; {new Date().getFullYear()}</p>
        </div>
        <div className="footer-item footer-item-1">
          <h3 className="head-3">Internal links</h3>
          <ul className="footer-links">
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              {userType &&
                (userType === "general" ? (
                  <Link to="/general">General</Link>
                ) : (
                  <Link to="/influencer">Influencer</Link>
                ))}
            </li>
            <li className="link">
              <Link to="/">Support</Link>
            </li>
            <li className="link">
              <Link to="/">Privacy policy</Link>
            </li>
          </ul>
        </div>
        <div className="footer-item footer-item-2">
          <h3 className="head-3">Community</h3>
          <ul className="footer-links">
            <li className="link">
              <Link to="/">Sponsors</Link>
            </li>
            <li className="link">
              <Link to="/">Forum</Link>
            </li>
          </ul>
        </div>
        <div className="footer-item footer-item-3">
          <h3 className="head-3">Follow us on</h3>
          <div className="social-links">
            <a href="/" className="social-link bg-purple" title="twitter">
              <i className="fa fa-twitter semi-med" />
            </a>
            <a href="/" className="social-link bg-purple" title="facebook">
              <i className="fa fa-facebook semi-med" />
            </a>
            <a href="/" className="social-link bg-purple" title="instagram">
              <i className="fa fa-instagram semi-med" />
            </a>
            <a href="/" className="social-link bg-purple" title="email">
              <i className="fa fa-envelope semi-med" />
            </a>
          </div>
        </div>
        <div className="footer-item footer-item-4">
          <h3 className="head-3">Subscribe to our newsletter</h3>
          <div className="newsletter-contain">
            <input
              type="email"
              name="newsletter"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-secondary">
              <i className="fa fa-paper-plane" />
              Send
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const mapStateToProps = (state: any) => ({
  userType: state.auth.userType,
});

export default connect(mapStateToProps, null)(Footer);
