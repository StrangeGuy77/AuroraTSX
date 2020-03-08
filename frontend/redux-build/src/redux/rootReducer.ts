import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import languageReducer from "./language/LangReducer";
import softwareReducer from './software/softwareReducer';

export default combineReducers({
  user: userReducer,
  language: languageReducer,
  softwares: softwareReducer
});
