import userTypes from "./userTypes";
import { selectCurrentUser, setCurrentUser } from "./userSelector";

export const userReducer = (state: any = {}, action: IAction) => {
  switch (action.type) {
    case userTypes.SELECT_CURRENT_USER:
      return {
        ...state,
        user: selectCurrentUser(state),
      };
    case userTypes.SET_CURRENT_USER:
      console.log(action.payload);
      return {
        ...state,
        user: setCurrentUser(state, action.payload),
      };
    case userTypes.CLEAR_USER:
      delete state.user;
      return {
        ...state,
      };
    default:
      return state;
  }
};

export interface IAction {
  type: string;
  payload?: any;
}
