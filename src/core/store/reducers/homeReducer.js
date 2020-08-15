
import person from 'api/mockedData'
import {
    UPDATE_CONTEXT_FORM,
    SUBMIT_INFORMATION_REQUESTED,
} from 'core/store/types';

const initialState = {
    person,
    information: {
        browser: '',
        device: '',
        referer: '',
        os: '',
        fingerprint: '',
    }
};

const form = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CONTEXT_FORM: {
            const { key, value } = action.payload;
            return {
                ...state,
                information: {
                    ...state.information,
                    [key]: value,
                }
            };
        }
        case SUBMIT_INFORMATION_REQUESTED: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};

export default form;
