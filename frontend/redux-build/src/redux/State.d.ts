import ILanguage from "./language/Lang";
import IUser from "./user/user";
import { SoftwareSchema } from "./software/software";

export default interface GlobalState {
  currentLanguage?: string;
  language?: ILanguage;
  softwares?: SoftwareSchema[];
  currentUser?: IUser;
}
