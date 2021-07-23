import { useState, useEffect } from "react";
import UserType from "./UserType";
import SignInForm from "./SignInForm";

import { User, SignInFlow } from "../types";

enum UserFlow {
  typeOfUser = "typeOfUser",
  appSignIn = "appSignIn",
  discordSignIn = "discordSignIn",
}

const SignInRoot = () => {
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

  useEffect(() => {
    console.log(userDetails);
  }, [userDetails]);

  return (
    <main id="sign-in-root">
      {currentFlow === "typeOfUser" && (
        <UserType submitUserType={submitUserType} changeFlow={changeFlow} />
      )}
      {currentFlow === "appSignIn" && <SignInForm />}
    </main>
  );
};

export default SignInRoot;
