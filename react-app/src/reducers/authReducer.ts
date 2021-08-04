import {
  LOGIN_USER,
  LOGOUT_USER,
  USER_TYPE,
  DISCORD_TOKEN,
  CURRENT_FLOW,
  FLUSH_FLOW,
  LINK_ACCOUNT,
  UNLINK_ACCOUNT,
} from "../actions/stateTypes";

let userDetails = null;
let discordDetails = null;

const storedDetails = localStorage.getItem("user");
const storedDiscord = localStorage.getItem("discord-auth");
const accounts = {
  spotify: localStorage.getItem("spotify"),
};

userDetails = storedDetails && JSON.parse(storedDetails);
discordDetails = storedDiscord && JSON.parse(storedDiscord);

// Initial state
const initialState = {
  userType: localStorage.getItem("user-type"),
  isLoggedIn: false,
  authToken: localStorage.getItem("user-auth"),
  userDetails: userDetails,
  discord: discordDetails,
  currentLoginFlow: localStorage.getItem("current-flow"),
  linkedAccounts: accounts,
  spotify: localStorage.getItem("spotify"),
  appleMusic: localStorage.getItem("apple-music"),
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
        isLoggedIn: true,
      };
    case DISCORD_TOKEN:
      localStorage.setItem("discord-auth", JSON.stringify(action.payload));
      return {
        ...state,
        isLoggedIn: true,
        discord: action.payload,
      };
    case LOGOUT_USER:
      localStorage.clear();
      return {
        ...state,
        authToken: null,
        userDetails: null,
        isLoggedIn: false,
        discord: null,
      };
    case CURRENT_FLOW:
      localStorage.setItem("current-flow", action.payload);
      return {
        ...state,
        currentLoginFlow: action.payload,
      };
    case FLUSH_FLOW:
      localStorage.removeItem("current-flow");
      return {
        ...state,
        currentLoginFlow: "",
      };
    case LINK_ACCOUNT:
      localStorage.setItem(`${action.payload.account}`, action.payload.token);
      return {
        ...state,
        [action.payload.account]: action.payload.token,
        linkedAccounts: {
          ...state.linkedAccounts,
          [action.payload.account]: action.payload.token,
        },
      };
    case UNLINK_ACCOUNT:
      localStorage.removeItem(`${action.payload}`);
      // delete state.linkedAccounts.spotify
      return {
        ...state,
        [action.payload]: "",
      };
    default:
      return state;
  }
};

export default authReducer;
