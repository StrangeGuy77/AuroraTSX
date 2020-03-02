import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import languageReducer from "./language/LangReducer";

export default combineReducers({
  user: userReducer,
  language: languageReducer
});
