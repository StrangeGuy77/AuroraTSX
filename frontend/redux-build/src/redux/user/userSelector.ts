import Axios from "axios";
import IUser from "./user";
import GlobalState from "../State";

export const loginWithUser = async (email: string, password: string) => {
    const response = await Axios.post('http://localhost:3500/users/login', { email, password });
    console.log(response);
    return response.data;
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

export const selectCurrentUser = (state: GlobalState) => state.currentUser;