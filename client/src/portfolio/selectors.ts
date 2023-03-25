import { createSelector } from 'reselect';

import { AppState } from '../store/reducers';

export const getAppState = (state: AppState) => state;

export const getWorkItems = createSelector(getAppState, ({ workItems }) => workItems);
