// Initial state
const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "USER_SIGN_IN":
      return {
        ...state,
        isLoggedIn: true,
      };
    default:
      return state;
  }
};

export default authReducer;
