import userTypes from './userTypes';
import IUser from './user.d';

export const signIn = (email: string, password: string) => ({
    type: userTypes.SIGN_IN,
    payload: {
        email,
        password
    }
});

export const setCurrentUser = (user: IUser) => ({
    type: userTypes.SET_CURRENT_USER,
    payload: user
});