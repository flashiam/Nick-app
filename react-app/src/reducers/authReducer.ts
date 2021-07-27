import { LOGIN_USER, LOGOUT_USER } from "../actions/stateTypes";

// Initial state
const initialState = {
  isLoggedIn: false,
  authToken: localStorage.getItem("user-auth"),
  userDetails: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_USER:
      localStorage.setItem("user-auth", action.payload.token);
      return {
        ...state,
        authToken: action.payload.token,
        userDetails: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT_USER:
      localStorage.removeItem("user-auth");
      return {
        ...state,
        authToken: null,
        userDetails: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
