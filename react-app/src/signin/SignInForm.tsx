import signInArt from "../img/sign-in-art.svg";
import googleLogo from "../img/google.svg";

type Props = {
  changeFlow: Function;
};

const SignInForm = ({ changeFlow }: Props) => {
  return (
    <main className="sign-in-form bg-semi-med">
      <div className="sign-in-showcase bg-purple">
        <img src={signInArt} alt="" className="sign-in-art" style={{marginRight:"100px"}}/>
      </div>
      <div className="sign-in-content">
        <h1 className="head-1 primary">
          Sign in with <span className="purple">Musix</span>
        </h1>
        <div className="form-contain custom-sigin">
          <div className="form-grp">
            <label htmlFor="name" className="form-label primary">
              Name
            </label>
            <input type="text" name="name" className="input-field name-field" />
          </div>
          <div className="form-grp">
            <label htmlFor="email" className="form-label primary">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="input-field email-field"
            />
          </div>
          <input
            type="submit"
            value="Verify"
            className="btn btn-purple submit-btn"
            onClick={e => {
              changeFlow("discordSignIn");
              e.preventDefault();
            }}
          />
        </div>
        <label className="or-label med">OR</label>
        <button className="btn fb-btn auth-btn">
          <i className="fab fa-facebook semi-med" />
          <p className="lead-2 semi-med">Sign in with facebook</p>
        </button>
        <button className="btn google-btn auth-btn">
          <img src={googleLogo} alt="" className="google-logo" />
          <p className="lead-2">Sign in with google</p>
        </button>
      </div>
    </main>
  );
};

export default SignInForm;
