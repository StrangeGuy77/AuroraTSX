import { combineReducers } from "redux";
import { userReducer } from "./user/userReducer";
import languageReducer from "./language/LangReducer";
import softwareReducer from "./software/softwareReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"]
};

const rootReducer = combineReducers({
  user: userReducer,
  language: languageReducer,
  softwares: softwareReducer
});

export default persistReducer(persistConfig, rootReducer);
