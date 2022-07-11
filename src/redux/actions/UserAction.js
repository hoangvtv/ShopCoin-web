import { LOG_OUT, SET_CURRENT_USER } from "../types/UserType";

export const setCurrentUserAction = () => ({
  type: SET_CURRENT_USER,
});

export const logOutAction = () => ({
  type: LOG_OUT,
});
