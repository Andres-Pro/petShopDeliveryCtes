import { takeLatest } from 'redux-saga/effects';
import { submitInfoRequested } from './homeSagas';
import { SUBMIT_INFORMATION_REQUESTED } from 'core/store/types'


function* rootSaga() {
    yield takeLatest(SUBMIT_INFORMATION_REQUESTED, submitInfoRequested);
}

export default rootSaga;