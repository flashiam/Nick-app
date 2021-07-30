import { LOGIN_USER, LOGOUT_USER, USER_TYPE } from "../actions/stateTypes";

// Initial state
const initialState = {
  userType: "",
  isLoggedIn: false,
  authToken: localStorage.getItem("user-auth"),
  userDetails: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_TYPE:
      return {
        ...state,
        userType: action.payload,
      };
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
