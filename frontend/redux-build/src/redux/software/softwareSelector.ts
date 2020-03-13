import GlobalState from "../State";
import { SoftwareSchema } from './software';

export const updateSoftwaresArray = (softwares: SoftwareSchema[], newSoftware?: SoftwareSchema) => [...softwares, newSoftware];

export const getSoftwaresFromState = (state: GlobalState) => state.softwares as SoftwareSchema[];

export const getOneSoftware = (softwareId: string, { softwares }: GlobalState | any) => {

    return softwares.softwares.find((soft: SoftwareSchema) => soft.id === softwareId);

};

export const uploadASoftware = (newSoftware: SoftwareSchema, currentSoftwareState: SoftwareSchema[]) => [...currentSoftwareState, newSoftware];

export const deleteASoftware = (softwareId: string, { softwares }: GlobalState | any) => softwares.softwares.filter((soft: SoftwareSchema) => soft.id !== softwareId);