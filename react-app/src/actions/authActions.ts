import {
  CURRENT_FLOW,
  DISCORD_TOKEN,
  FLUSH_FLOW,
  LINK_ACCOUNT,
  LOGIN_USER,
  LOGOUT_USER,
  USER_TYPE,
  UNLINK_ACCOUNT,
} from "./stateTypes";
import { Discord, Facebook, Google, SocialAccount } from "../types";

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

// Function to save the current flow to keep the track of login process
export const setCurrentFlow = (flow: string) => {
  return {
    type: CURRENT_FLOW,
    payload: flow,
  };
};

// Function to flush the track of sign in flow
export const flushSignInFlow = () => {
  return {
    type: FLUSH_FLOW,
  };
};

// Function to integrate social account
export const integrateAccount = (account: SocialAccount) => {
  console.log(account);
  return {
    type: LINK_ACCOUNT,
    payload: account,
  };
};

// Function to unlink an social account
export const disintegrateAccount = (accountName: string) => {
  return {
    type: UNLINK_ACCOUNT,
    payload: accountName,
  };
};
