import {
    UPDATE_CONTEXT_FORM,
    SUBMIT_INFORMATION_REQUESTED,
} from 'core/store/types';

export const updateContextForm = (payload) => ({
    type: UPDATE_CONTEXT_FORM,
    payload,
});

export const submitInformationRequested = () => ({
    type: SUBMIT_INFORMATION_REQUESTED,
});
