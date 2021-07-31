import {
  LOGIN_USER,
  LOGOUT_USER,
  USER_TYPE,
  DISCORD_TOKEN,
} from "../actions/stateTypes";

// Initial state
const initialState = {
  userType: "",
  isLoggedIn: false,
  authToken: localStorage.getItem("user-auth"),
  userDetails: null,
  discord: localStorage.getItem("discord-auth"),
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_TYPE:
      return {
        ...state,
        userType: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        authToken: action.payload.token,
        userDetails: action.payload,
      };
    case DISCORD_TOKEN:
      localStorage.setItem("user-auth", action.payload.token);
      localStorage.setItem("discord-auth", action.payload.discord);
      return {
        ...state,
        isLoggedIn: true,
        discordToken: action.payload,
      };
    case LOGOUT_USER:
      localStorage.removeItem("user-auth");
      localStorage.removeItem("discord-auth");
      localStorage.removeItem("spotifyToken");
      return {
        ...state,
        authToken: null,
        userDetails: null,
        isLoggedIn: false,
        discord: null,
      };
    default:
      return state;
  }
};

export default authReducer;
