import { LOGIN_USER, LOGOUT_USER } from "./stateTypes";

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

// Function for test logout
export const userSignOut = () => {
  return {
    type: LOGOUT_USER,
  };
};
