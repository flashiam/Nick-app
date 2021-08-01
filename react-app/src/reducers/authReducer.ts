import {
  LOGIN_USER,
  LOGOUT_USER,
  USER_TYPE,
  DISCORD_TOKEN,
} from "../actions/stateTypes";

let userDetails = null;
let discordDetails = null;

const storedDetails = localStorage.getItem("user");
const storedDiscord = localStorage.getItem("discord-auth");

userDetails = storedDetails && JSON.parse(storedDetails);
discordDetails = storedDiscord && JSON.parse(storedDiscord);

// Initial state
const initialState = {
  userType: localStorage.getItem("user-type"),
  isLoggedIn: false,
  authToken: localStorage.getItem("user-auth"),
  userDetails: userDetails,
  discord: discordDetails,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_TYPE:
      localStorage.setItem("user-type", action.payload);
      return {
        ...state,
        userType: action.payload,
      };
    case LOGIN_USER:
      localStorage.setItem("user-auth", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        authToken: action.payload.token,
        userDetails: action.payload.user,
      };
    case DISCORD_TOKEN:
      localStorage.setItem("discord-auth", JSON.stringify(action.payload));
      return {
        ...state,
        isLoggedIn: true,
        discord: action.payload,
      };
    case LOGOUT_USER:
      localStorage.removeItem("user");
      localStorage.removeItem("user-auth");
      localStorage.removeItem("discord-auth");
      localStorage.removeItem("spotifyToken");
      localStorage.removeItem("user-type");
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
