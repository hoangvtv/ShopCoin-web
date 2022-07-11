import { ACCESS_TOKEN } from "../../constants";
import { getCurrentUser } from "../../util/APIUtils";
import { LOG_IN, LOG_OUT, SET_CURRENT_USER } from "../types/UserType";

const initialState = {
  currentUser: null,
  isAuthenticated: false,
  isLoading: true,
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      getCurrentUser()
        .then((response) => {
          const user = response;
          state.currentUser = user;
          state.isAuthenticated = true;
          state.isLoading = false;
          console.log("UserReducer: SET_CURRENT_USER: ", state);

          return state;
          // return {
          //   ...state,
          //   currentUser: response,
          //   isAuthenticated: true,
          //   isLoading: false,
          // };
        })
        .catch((error) => {
          return {
            ...state,
          };
        });
      return {
        ...state,
      };
    }

    case LOG_OUT: {
      localStorage.removeItem(ACCESS_TOKEN);
      console.log("logout user");
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
      };
    }

    case LOG_IN: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default UserReducer;
