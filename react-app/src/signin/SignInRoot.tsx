import { useState } from "react";
import { connect } from "react-redux";

import UserType from "./UserType";
import SignInForm from "./SignInForm";
import SignInDiscord from "./SignInDiscord";

import { User, SignInFlow } from "../types";
import { userSignIn } from "../actions/authActions";

enum UserFlow {
  typeOfUser = "typeOfUser",
  appSignIn = "appSignIn",
  discordSignIn = "discordSignIn",
}

type Props = {
  userSignIn: Function;
};

const SignInRoot = ({ userSignIn }: Props) => {
  // State for user credentials
  const [userDetails, setUser] = useState<User>({
    name: "",
    email: "",
    type: "",
  });

  // State for current flow
  const [currentFlow, setCurrentFlow] = useState<string>("typeOfUser");

  // State for the sign in flow in app
  const [signInFlow, setFlow] = useState<SignInFlow>({
    typeOfUser: true,
    appSignIn: false,
    discordSignIn: false,
  });

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

  // Function to login the user to the app
  const authenticateUser = () => {
    userSignIn(userDetails);
  };

  // Function to change the sign in flow
  const changeFlow = (flow: string) => {
    setCurrentFlow(flow);
  };

  // Function to switch signin flow
  // const switchFlow = () => {
  //   switch(currentFlow) {
  //     case 'typeOfUser': setFlow()
  //   }
  // }

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

export default connect(null, { userSignIn })(SignInRoot);
