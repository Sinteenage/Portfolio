import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';
import { sendMail } from '../actions';
import { getSendMailRequest } from '../api';

export function* requestSendMail({ payload }: ActionType<typeof sendMail.request>) {
    try {
        yield call(getSendMailRequest, payload);
        yield put(sendMail.success());
    } catch (e) {
        yield put(sendMail.failure('error mail not send'));
    }
}

export function* watchSendMail() {
    yield takeLatest(getType(sendMail.request), requestSendMail);
}
