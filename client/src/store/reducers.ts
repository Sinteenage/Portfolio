import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';

import { WorkItemsReducer } from '../portfolio/reducers/workItems';

export const reducers = combineReducers({

    workItems: WorkItemsReducer,
});

export type AppState = StateType<typeof reducers>;
