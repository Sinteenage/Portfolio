import { ActionType, getType, Reducer } from 'typesafe-actions';

import * as actions from '../actions';
import { getInitialWorkItemsState } from '../states';
import { IWorkItemsState, LoadingState } from '../types';

type Actions = ActionType<typeof actions>;

export const WorkItemsReducer: Reducer<IWorkItemsState, Actions> = (state = getInitialWorkItemsState(), action) => {
    switch (action.type) {

    case getType(actions.getWorks.request):
        return {
            ...state,
            loading: LoadingState.REQUEST,
        };

    case getType(actions.getWorks.success):
        return {
            workItems: [...action.payload],
            loading: LoadingState.SUCCESS,
        };

    case getType(actions.getWorks.failure):
        return {
            ...state,
            loading: LoadingState.FAILURE,
        };

    default:
        return state;
    }
};
