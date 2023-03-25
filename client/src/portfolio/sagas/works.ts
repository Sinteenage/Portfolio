import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionType, getType } from 'typesafe-actions';

import { getWorks } from '../actions';
import { getWorksRequest } from '../api';
import { IWorkItem } from '../types';

export function* requestWorkItems({ payload }: ActionType<typeof getWorks.request>) {
    try {
        const result: IWorkItem[] = yield call(getWorksRequest);
        yield put(getWorks.success([...result]));
    } catch (error) {
        yield put(getWorks.failure('error loading'));
    }
}

export function* watchWorks() {
    yield takeLatest(getType(getWorks.request), requestWorkItems);
}
