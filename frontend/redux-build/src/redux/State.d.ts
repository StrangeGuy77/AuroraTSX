import ILanguage from "./language/Lang";
import IUser from "./user/user";

export default interface GlobalState<T = number> {
  currentLanguage: string;
  language: ILanguage;
  softwares?: any[];
  currentUser?: IUser;
}
