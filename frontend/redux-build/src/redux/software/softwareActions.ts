import softwareTypes from './softwareTypes';
import { SoftwareSchema } from './software.d';

export const addSoftware = (software: SoftwareSchema) => ({
    type: softwareTypes.ADD_SOFTWARE,
    payload: software
});

export const deleteSoftware = (softId: string) => ({
    type: softwareTypes.DELETE_SOFTWARE,
    payload: softId
});

export const uploadSoftware = (software: SoftwareSchema) => ({
    type: softwareTypes.UPLOAD_SOFTWARE,
    payload: software
});

export const updateSoftwaresArray = (softwares: SoftwareSchema[]) => ({
    type: softwareTypes.GET_SOFTWARES,
    payload: softwares
});

export const getOneSoftware = (softwareId: string) => ({
    type: softwareTypes.GET_SOFTWARE,
    payload: softwareId
});

