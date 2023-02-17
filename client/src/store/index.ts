
import {
     applyMiddleware,
     createStore,
 } from 'redux';
 import { composeWithDevTools } from 'redux-devtools-extension';
 import createSagaMiddleware from 'redux-saga';
 import { reducers } from './reducers';
 import { rootSaga } from './sagas';
 
 const sagaMiddleware = createSagaMiddleware();
 
 const enhancer = composeWithDevTools(applyMiddleware(
     sagaMiddleware,
 ));
 
 const store = createStore(reducers, enhancer);
 
 sagaMiddleware.run(rootSaga);
 
 export {
     store,
     sagaMiddleware,
 };
 
 export type RootState = ReturnType<typeof reducers>;
 