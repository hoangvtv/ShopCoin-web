import { ACCESS_TOKEN } from "../../constants";
import { LOG_OUT, SET_CURRENT_USER } from "../types/UserType";

const initialState = {
  currentUser: null,
  isAuthenticated: false,
  isLoading: true,
  userName: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.user,
        isAuthenticated: true,
        isLoading: false,
        userName: action.user.username,
      };
    }

    case LOG_OUT: {
      localStorage.removeItem(ACCESS_TOKEN);
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
        userName: "",
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
