import GlobalState from "../State";
import { SoftwareSchema } from './software';

export const updateSoftwaresArray = (softwares: SoftwareSchema[], newSoftware?: SoftwareSchema) => [...softwares, newSoftware];

export const getSoftwaresFromState = (state: GlobalState) => {
    const filteredSoftwares = (state as any).softwares.softwares.filter((soft: any) => soft !== undefined);
    return filteredSoftwares as SoftwareSchema[];
};

export const getOneSoftware = (softwareId: string, { softwares }: GlobalState | any) => {
    const filteredSoftwares = softwares.softwares.filter((soft: any) => soft !== undefined);
    return filteredSoftwares.find((soft: SoftwareSchema) => soft.id === softwareId);
};

export const uploadASoftware = (newSoftware: SoftwareSchema, currentSoftwareState: SoftwareSchema[]) => [...currentSoftwareState, newSoftware];

export const deleteASoftware = (softwareId: string, { softwares }: GlobalState | any) => softwares.filter((soft: SoftwareSchema) => soft.id !== softwareId);