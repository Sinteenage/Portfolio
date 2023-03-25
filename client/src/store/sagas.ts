import { all } from 'redux-saga/effects';

import { watchWorks } from '../portfolio/sagas/works';
import { watchSendMail } from '../portfolio/sagas/sendMail';

export function* rootSaga() {
    yield all([
        watchWorks(),
        watchSendMail(),
    ]);
}
