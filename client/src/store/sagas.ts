import { all } from 'redux-saga/effects';

import { watchPreloader } from '../portfolio/sagas/preloader';

export function* rootSaga() {
    yield all([
        watchPreloader(),
    ]);
}
