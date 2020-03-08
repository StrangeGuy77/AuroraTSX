import userTypes from './userTypes';
import IUser from './user.d';

export const signIn = (email: string, password: string) => ({
    type: userTypes.SIGN_IN,
    payload: {
        email,
        password
    }
});

export const signUp = (email: string, password: string, username: string) => ({
    type: userTypes.SIGN_UP,
    payload: {
        email,
        password,
        username
    }
});

export const updateUser = (userInfo: IUser) => ({
    type: userTypes.UPDATE_USER,
    payload: userInfo
});