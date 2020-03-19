import userTypes from './userTypes';
import IUser from './user.d';

export const clearUser = () => ({
    type: userTypes.CLEAR_USER
});

export const setCurrentUser = (user: IUser) => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
});

export const selectCurrentUser = () => ({
    type: userTypes.SELECT_CURRENT_USER
});