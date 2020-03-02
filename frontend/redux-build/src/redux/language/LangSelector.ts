// import ILanguage from "./Lang";
import GlobalState from "../State";

export const selectLanguage = (language: string = "en") => {
  const File: any = require(`../../locales/${language}.ts`);
  const FileString = JSON.stringify(File);
  const FileObject = JSON.parse(FileString);
  return FileObject.default;
};

export const getLanguage = (state: GlobalState | any) =>
  state.language.language;

export const declareDefaultLanguage = (language: string) => {
  const JSONLanguage = require(`../../locales/${language}.ts`);
  const LangString = JSON.stringify(JSONLanguage);
  const x = JSON.parse(LangString);
  return x.language;
};
