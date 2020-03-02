import cartTypes from "./languageTypes";

export const changeLanguage = (language: string) => ({
  type: cartTypes.CHANGE_LANGUAGE,
  payload: language
});
