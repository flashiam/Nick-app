import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import { assignUserType, setCurrentFlow } from "../actions/authActions";

type Props = {
  auth: {
    userType: string;
    authToken: string;
  };
  submitUserType: Function;
  changeFlow: Function;
  assignUserType?: Function;
  setCurrentFlow?: Function;
};

const UserType = ({
  auth: { userType: userOfType, authToken },
  submitUserType,
  changeFlow,
  assignUserType,
  setCurrentFlow,
}: Props) => {
  const generalLottie =
    "https://assets3.lottiefiles.com/packages/lf20_ejs1jvp2.json";
  const influencerLottie =
    "https://assets8.lottiefiles.com/packages/lf20_ronppvae.json";

  // State for current user type
  const [userType, setUserType] = useState<string>("general");
  // State for lottie animation
  const [lottieURL, setLottie] = useState<string>(generalLottie);

  // Function to switch user type
  const switchUserType = (type: string) => {
    setUserType(type);
    type === "general" ? setLottie(generalLottie) : setLottie(influencerLottie);
  };

  // Function to save the user type
  const saveUserType = () => {
    assignUserType && assignUserType(userType);
    setCurrentFlow && setCurrentFlow("user-login");
    changeFlow("appSignIn");
  };

  // useEffect(() => {
  //   if (userOfType) {
  //   }
  // }, [userOfType]);

  return (
    <main className="user-type-contain bg-semi-med">
      <div className="user-type-showcase">
        <Player src={lottieURL} autoplay loop className="animated-showcase" />
      </div>
      <div className="user-type-content">
        <h3 className="head-3 primary">What type of user you are?</h3>
        <div className="type-btn-grp">
          <button
            className={`btn ${
              userType === "general" ? "btn-secondary" : "btn-stroked"
            }`}
            onClick={() => switchUserType("general")}
          >
            General
          </button>
          <button
            className={`btn ${
              userType === "influencer" ? "btn-secondary" : "btn-stroked"
            }`}
            onClick={() => switchUserType("influencer")}
          >
            Influencer
          </button>
        </div>
        <div className="bottom-content">
          <a
            href="#"
            className="btn btn-purple next-btn"
            onClick={() => saveUserType()}
          >
            Next
          </a>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { assignUserType, setCurrentFlow })(
  UserType
);

{
  /* <a href="https://www.vecteezy.com/free-vector/music-notes-pattern">Music Notes Pattern Vectors by Vecteezy</a> */
}
