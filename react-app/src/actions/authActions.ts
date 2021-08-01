import {
  DISCORD_TOKEN,
  LOGIN_USER,
  LOGOUT_USER,
  USER_TYPE,
} from "./stateTypes";
import { Discord, Facebook, Google } from "../types";

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
      user: {
        id: fbData.id,
        name: fbData.name,
        picture: fbData.picture,
        userId: fbData.userId,
        loginType: fbData.loginType,
      },
      token: fbData.accessToken,
    },
  };
};

// Function for login from google
export const googleLogin = (googleData: Google) => {
  return {
    type: LOGIN_USER,
    payload: {
      user: {
        id: googleData.userId,
        name: googleData.name,
        picture: googleData.picture,
        email: googleData.email,
        loginType: googleData.loginType,
      },
      token: googleData.accessToken,
    },
  };
};

// Function to interact with discord
export const discordLogin = (discordData: Discord) => {
  return {
    type: DISCORD_TOKEN,
    payload: discordData,
  };
};

// Function for test logout
export const userSignOut = () => {
  return {
    type: LOGOUT_USER,
  };
};
