// import ILanguage from "./Lang";
import GlobalState from "../State";

export const selectLanguage = (language: string = "en") => {
  const File: any = JSON.parse(JSON.stringify(require(`../../locales/${language}.ts`)));
  return File.default;
};

export const getLanguageAcronym = (state: GlobalState | any) => state.language.currentLanguage;

export const getLanguage = (state: GlobalState | any) =>
  state.language.language;

export const declareDefaultLanguage = (language: string) => {
  const File: any = JSON.parse(JSON.stringify(require(`../../locales/${language}.ts`)));
  return File.language;
};
