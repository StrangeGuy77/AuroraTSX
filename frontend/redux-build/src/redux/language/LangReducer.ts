import ILanguage from "./Lang";
import actions from "./languageTypes";
import { selectLanguage } from "./LangSelector";
import GlobalState from "../State";

const English: ILanguage = selectLanguage("en");
const INITIAL_STATE: GlobalState = {
  language: English,
  currentLanguage: "en"
};

const languageReducer = (
  state: GlobalState = INITIAL_STATE,
  action: LanguageAction
) => {
  switch (action.type) {
    case actions.CHANGE_LANGUAGE:
      return {
        ...state,
        currentLanguage: action.payload,
        language: selectLanguage(action.payload)
      };
    default:
      return state;
  }
};

export default languageReducer;

interface LanguageAction {
  type: string;
  payload: any;
}

export interface LanguageState {
  language: ILanguage;
  currentLanguage: string;
}
