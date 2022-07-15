import { combineReducers, applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import UserReducer from "./UserReducer";

const rootReducers = combineReducers({
  UserReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware));
export default store;
