import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { PreloaderReducer } from '../portfolio/reducers/preloader';

export const reducers = combineReducers({

    preloader: PreloaderReducer,
});

export type AppState = StateType<typeof reducers>;
