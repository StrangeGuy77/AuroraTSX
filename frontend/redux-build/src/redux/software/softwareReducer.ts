import { SoftwareSchema } from './software.d';
import GlobalState from '../State';
import actions from './softwareTypes';
import { getAllSoftwares, getOneSoftware, uploadASoftware, deleteASoftware } from './softwareSelector';

const INITIAL_STATE = {
    softwares: []
};

const softwareReducer = async (state: GlobalState = INITIAL_STATE, action: SoftwareAction) => {
    switch (action.type)
    {
        case actions.GET_SOFTWARES:
            return {
                ...state,
                softwares: await getAllSoftwares()
            };
        case actions.GET_SOFTWARE:
            return {
                ...state,
                softwares: await getOneSoftware(action.payload as string)
            };

        case actions.UPLOAD_SOFTWARE:
            await uploadASoftware(action.payload[0] as SoftwareSchema, action.payload[1] as string);
            return {
                ...state,
                softwares: await getAllSoftwares()
            };
        case actions.DELETE_SOFTWARE:
            await deleteASoftware(action.payload);
            return {
                ...state,
                softwares: await getAllSoftwares()
            };
        default:
            return state;
    }
};

export default softwareReducer;

interface SoftwareAction {
    type: string;
    payload: SoftwareSchema | string | any;
}