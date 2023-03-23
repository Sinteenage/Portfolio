import { all } from 'redux-saga/effects';

import { watchPreloader } from '../portfolio/sagas/preloader';
import { watchSendMail } from '../portfolio/sagas/sendMail';

export function* rootSaga() {
    yield all([
        watchPreloader(),
        watchSendMail(),
    ]);
}
