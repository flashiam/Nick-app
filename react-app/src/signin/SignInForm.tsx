import signInArt from "../img/sign-in-art.svg";

const SignInForm = () => {
  return (
    <main className="sign-in-form bg-semi-med">
      <div className="sign-in-showcase bg-purple">
        <img src={signInArt} alt="" className="sign-in-art" />
      </div>
      <div className="sign-in-content">
        <h1 className="head-1">
          Sign in with <span className="purple">Musix</span>
        </h1>
        <div className="form-contain custom-sigin">
          <div className="form-grp">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" name="name" className="input-field name-field" />
          </div>
          <div className="form-grp">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="input-field email-field"
            />
          </div>
          <input type="submit" value="Verify" className="btn btn-primary" />
        </div>
        <label className="or-label">OR</label>
        <button className="btn fb-btn">
          <i className="fa fa-facebook semi-med" />
          <p className="lead-2 semi-med">Sign in with facebook</p>
        </button>
      </div>
    </main>
  );
};

export default SignInForm;
