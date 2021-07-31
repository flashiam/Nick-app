import { useState, useEffect } from "react";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";

import { facebookLogin, googleLogin } from "../actions/authActions";

import signInArt from "../img/sign-in-art.svg";
import googleLogo from "../img/google.svg";

type Props = {
  changeFlow: Function;
  submitUserCredentials: Function;
  facebookLogin?: Function;
  googleLogin?: Function;
};

interface User {
  name: string;
  email: string;
}

const SignInForm = ({
  changeFlow,
  submitUserCredentials,
  facebookLogin,
  googleLogin
}: Props) => {
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
  });

  // OAuth's client id's
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const facebookAppId = process.env.REACT_APP_FACEBOOK_APP_ID;

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
    const fbData = {
      id: response.id,
      accessToken: response.accessToken,
      name: response.name,
      picture: response.picture.data.url,
      userId: response.userId,
      loginType: response.graphDomain,
    };
    facebookLogin && facebookLogin(fbData);
  };

  // Function to get the response from google
  const googleResponse = (response: any) => {
    const googleData = {
      userId: response.googleId,
      accessToken: response.accessToken,
      name: response.profileObj.givenName,
      picture: response.profileObj.imageUrl,
      email: response.profileObj.email,
      loginType: 'google'
    }
    googleLogin && googleLogin(googleData);
  };

  useEffect(() => {
    console.log(facebookAppId);
  }, [facebookAppId]);

  return (
    <main className="sign-in-form bg-semi-med">
      <div className="sign-in-showcase bg-purple">
        <img src={signInArt} alt=""/>
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
              // onFocus={e=>e.currentTarget.style.border="0.5px solid purple"}
              // onBlur={e=>e.currentTarget.style.border="1px"}
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
          appId={facebookAppId as string}
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
        <GoogleLogin
          clientId={googleClientId as string}
          render={renderProps => (
            <button
              className="btn google-btn auth-btn"
              onClick={renderProps.onClick}
              // disabled={renderProps.disabled}
            >
              <img src={googleLogo} alt="google" className="google-logo" />
              <p className="lead-2">Sign in with google</p>
            </button>
          )}
          onSuccess={googleResponse}
          onFailure={googleResponse}
        />
      </div>
    </main>
  );
};

export default connect(null, { facebookLogin, googleLogin })(SignInForm);
