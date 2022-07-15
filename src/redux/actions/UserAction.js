import { getCurrentUser } from "../../util/APIUtils";
import { LOG_OUT, SET_CURRENT_USER } from "../types/UserType";

export const setCurrentUserAction = () => {
  return async (dispatch) => {
    await getCurrentUser()
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: SET_CURRENT_USER,
          user: response,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const logOutAction = () => ({
  type: LOG_OUT,
});
