import { LOGIN_USER, LOGOUT_USER, USER_TYPE } from "./stateTypes";
import { Facebook, Google } from "../types";

// Function for test login
export const userSignIn = (user: any) => {
  // Setting test auth token to localstorage
  return {
    type: LOGIN_USER,
    payload: {
      ...user,
      token: "abhi@8223",
    },
  };
};

// Function to set the user type
export const assignUserType = (type: string) => {
  return {
    type: USER_TYPE,
    payload: type,
  };
};

// Function for login from facebook
export const facebookLogin = (fbData: Facebook) => {
  return {
    type: LOGIN_USER,
    payload: {
      ...fbData,
      token: fbData.accessToken,
    },
  };
};

// Function for login from facebook
export const googleLogin = (googleData: Google) => {
  return {
    type: LOGIN_USER,
    payload: {
      ...googleData,
      token: googleData.accessToken,
    },
  };
};

// Function for test logout
export const userSignOut = () => {
  return {
    type: LOGOUT_USER,
  };
};
