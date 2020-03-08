import IUser from "./user.d";
import userTypes from "./userTypes";
import { loginWithUser, signUpUser, updateUserInfo } from "./userSelector";

const INITIAL_STATE: IUser = {
  username: "",
  email: "",
  confirmed: false,
  user_role: "unconfirmed",
  show_public_email: false,
  show_public_location: false,
  show_public_name: false
};

export const userReducer = async (
  state: any = INITIAL_STATE,
  action: IAction
) => {
  switch (action.type)
  {
    case userTypes.SIGN_IN:
      return {
        ...state,
        currentUser: await loginWithUser(action.payload.email, action.payload.password)
      };
    case userTypes.SIGN_UP:
      return {
        ...state,
        currentUser: await signUpUser(action.payload.email, action.payload.password, action.payload.username)
      };
    case userTypes.UPDATE_USER:
      return {
        ...state,
        currentUser: await updateUserInfo(action.payload)
      };
    default:
      return state;
  }
};

export interface IAction {
  type: string;
  payload?: any;
}
