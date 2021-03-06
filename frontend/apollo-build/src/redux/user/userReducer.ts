// import userTypes from "./user.d";

const INITIAL_STATE: any = {
  currentUser: null
};

export const userReducer = (
  currentState: any = INITIAL_STATE,
  action: IAction
) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...currentState,
        currentUser: action.payload
      };
    default:
      return currentState;
  }
};

export interface IAction {
  type: string;
  payload?: any;
}
