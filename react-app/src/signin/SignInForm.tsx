import { useState } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import signInArt from "../img/sign-in-art.svg";
import googleLogo from "../img/google.svg";

type Props = {
  changeFlow: Function;
  submitUserCredentials: Function;
};

interface User {
  name: string;
  email: string;
}

const SignInForm = ({ changeFlow, submitUserCredentials }: Props) => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
  });

  // Function to set user details
  const fillUserDetails = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Function to proceed sign in
  const proceedSignIn = () => {
    submitUserCredentials(user);
    changeFlow("discordSignIn");
  };

  // Function to get the response from facebook
  const facebookResponse = (response: any) => {
    console.log(response);
  };

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
            <input
              type="text"
              name="name"
              className="input-field name-field"
              value={user.name}
              onChange={e => fillUserDetails(e)}
            />
          </div>
          <div className="form-grp">
            <label htmlFor="email" className="form-label primary">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="input-field email-field"
              value={user.email}
              onChange={e => fillUserDetails(e)}
            />
          </div>
          <input
            type="submit"
            value="Verify"
            className="btn btn-purple submit-btn"
            onClick={e => proceedSignIn()}
          />
        </div>
        <label className="or-label med">OR</label>
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID as string}
          callback={facebookResponse}
          autoLoad
          fields="name,email,picture"
          render={renderProps => (
            <button
              className="btn fb-btn auth-btn"
              onClick={() => renderProps.onClick}
            >
              <i className="fab fa-facebook semi-med" />
              <p className="lead-2 semi-med">Sign in with facebook</p>
            </button>
          )}
        />
        <button className="btn google-btn auth-btn">
          <img src={googleLogo} alt="" className="google-logo" />
          <p className="lead-2">Sign in with google</p>
        </button>
      </div>
    </main>
  );
};

export default SignInForm;
