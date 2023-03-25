import { defaultWorkItem, IWorkItemsState, LoadingState } from '../types';

export const getInitialWorkItemsState = ():IWorkItemsState => {

    return {
        workItems: [defaultWorkItem],
        loading: LoadingState.IDLE,
    };
};