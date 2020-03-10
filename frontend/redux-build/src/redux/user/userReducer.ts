import IUser from "./user.d";
import userTypes from "./userTypes";
import { selectCurrentUser, setCurrentUser } from "./userSelector";

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
    case userTypes.SELECT_CURRENT_USER:
      return {
        ...state,
        currentUser: selectCurrentUser(state)
      };
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: setCurrentUser(state, action.payload)
      };
    default:
      return state;
  }
};

export interface IAction {
  type: string;
  payload?: any;
}
