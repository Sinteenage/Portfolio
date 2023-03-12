import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';
import { loading } from '../actions';
import { getLoadingRequest } from '../api';

export function* requestLoading({ payload }: ActionType<typeof loading.request>) {
    try {
        yield call(getLoadingRequest, 2000);
        yield put(loading.success());
    } catch (e) {
        yield put(loading.failure('error loading'));
    }
}

export function* watchPreloader() {
    yield takeLatest(getType(loading.request), requestLoading);
}
