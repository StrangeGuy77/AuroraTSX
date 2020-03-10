import GlobalState from "../State";
import { SoftwareSchema } from './software';

export const updateSoftwaresArray = (softwares: SoftwareSchema[]) => [...softwares];

export const getSoftwaresFromState = (state: GlobalState) => state.softwares as SoftwareSchema[];

export const getOneSoftware = (softwareId: string, { softwares }: GlobalState) => (softwares as SoftwareSchema[]).find((soft: SoftwareSchema) => soft.id === softwareId);

export const uploadASoftware = (newSoftware: SoftwareSchema, currentSoftwareState: SoftwareSchema[]) => [...currentSoftwareState, newSoftware];

export const deleteASoftware = (softwareId: string, { softwares }: GlobalState) => (softwares as SoftwareSchema[]).filter((soft: SoftwareSchema) => soft.id !== softwareId);