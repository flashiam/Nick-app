import { useState, useEffect } from "react";
import { connect } from "react-redux";

import UserType from "./UserType";
import SignInForm from "./SignInForm";
import SignInDiscord from "./SignInDiscord";

import { User } from "../types";
import { userSignIn } from "../actions/authActions";

type Props = {
  auth: {
    userType: string;
    authToken: string;
    discord: string;
  };
};

const SignInRoot = ({ auth: { userType, authToken } }: Props) => {
  // State for user credentials
  const [userDetails, setUser] = useState<User>({
    name: "",
    email: "",
    type: "",
  });

  // State for current flow
  const [currentFlow, setCurrentFlow] = useState<string>("typeOfUser");

  // Function to set the user type
  const submitUserType = (type: string) => {
    setUser({
      ...userDetails,
      type,
    });
  };

  // Function to set the user name and email
  const submitUserCredentials = (user: any) => {
    setUser({
      ...userDetails,
      name: user.name,
      email: user.email,
    });
  };

  // Function to change the sign in flow
  const changeFlow = (flow: string) => {
    setCurrentFlow(flow);
  };

  return (
    <main id="sign-in-root">
      {currentFlow === "typeOfUser" && (
        <UserType submitUserType={submitUserType} changeFlow={changeFlow} />
      )}
      {currentFlow === "appSignIn" && (
        <SignInForm
          changeFlow={changeFlow}
          submitUserCredentials={submitUserCredentials}
        />
      )}
      {currentFlow === "discordSignIn" && <SignInDiscord />}
    </main>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { userSignIn })(SignInRoot);
