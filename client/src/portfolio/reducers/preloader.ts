import { ActionType, getType, Reducer } from "typesafe-actions";

import * as actions from '../actions';
import { getInitialPreloaderState } from "../states";
import { LoadingState, PreloaderInitialState } from "../types";

type Actions = ActionType<typeof actions>;

export const PreloaderReducer: Reducer<PreloaderInitialState, Actions> = (state = getInitialPreloaderState(), action) => {
    switch (action.type) {

        case getType(actions.loading.request):
            return {
                loading: LoadingState.REQUEST,
            };

        case getType(actions.loading.success):
            return {
                loading: LoadingState.SUCCESS,
            };

        case getType(actions.loading.failure):
            return {
                loading: LoadingState.FAILURE,
            };

        default:
            return state;
    }
};
