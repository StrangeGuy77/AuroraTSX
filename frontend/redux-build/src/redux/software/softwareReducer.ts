import { SoftwareSchema } from './software.d';
import GlobalState from '../State';
import actions from './softwareTypes';
import { updateSoftwaresArray, deleteASoftware } from './softwareSelector';

const INITIAL_STATE = {
    softwares: []
};


const softwareReducer = (state: GlobalState = INITIAL_STATE, action: SoftwareAction) => {
    switch (action.type)
    {
        case actions.GET_SOFTWARES:
            return {
                ...state,
                softwares: updateSoftwaresArray(action.payload)
            };

        case actions.UPLOAD_SOFTWARE:
            return {
                ...state,
                softwares: updateSoftwaresArray(state.softwares as SoftwareSchema[], action.payload)
            };
        case actions.DELETE_SOFTWARE:
            return {
                ...state,
                softwares: [...deleteASoftware(action.payload, state)]
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