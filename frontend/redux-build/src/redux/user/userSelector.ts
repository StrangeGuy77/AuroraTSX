import Axios from "axios";
import IUser from "./user";
import GlobalState from "../State";

export const loginWithUser = async (email: string, password: string) => {
    try
    {
        const response = await Axios.post('http://localhost:3500/user/login', { email, password });
        console.log(response);
        return response.data;

    } catch (error)
    {
        console.log(error);
    }
};

export const signUpUser = async (email: string, password: string, username: string) => {
    const response = await Axios.post(`http://localhost:3500/users`, { email, password, username });
    console.log(response);
    return response.data;
};

export const updateUserInfo = async (userInfo: IUser) => {
    const response = await Axios.put(`http://localhost:3500/users`, userInfo);
    console.log(response);
    return response.data;
};

export const setCurrentUser = (state: GlobalState, user: IUser) => {
    for (const iterator of Object.keys(user))
    {
        (state as any)[iterator] = (user as any)[iterator];
    }
    return user;
};

export const selectCurrentUser = (state: GlobalState) => state.user;