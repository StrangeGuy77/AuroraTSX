import GlobalState from "../State";
import Axios from 'axios';
import { SoftwareSchema } from './software';

export const getAllSoftwares = async () => {
    const { data } = await JSON.parse(JSON.stringify(Axios.get('http://localhost:3500/softwares')));
    console.log(data);
    return data;
};

export const getSoftwaresFromState = (state: GlobalState) => state.softwares as SoftwareSchema[];

export const getOneSoftware = async (softwareId: string) => {
    const { data } = await JSON.parse(JSON.stringify(Axios.get(`http://localhost:3500/softwares/${softwareId}`)));
    console.log(data);
    return data;
};

export const uploadASoftware = async (software: SoftwareSchema, userUploaderId: string) => {
    const response = await JSON.parse(JSON.stringify(Axios.post(`http://localhost:3500/softwares/${userUploaderId}`, software)));
    console.log(response);
    return response;
};

export const deleteASoftware = async (softwareId: string) => {
    const response = await JSON.parse(JSON.stringify(Axios.delete(`http://localhost:3500/softwares/${softwareId}`)));
    console.log(response);
    return response;
};