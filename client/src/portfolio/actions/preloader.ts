import { createAsyncAction } from 'typesafe-actions';

export const loading = createAsyncAction(
    'portfolio/preloader/LOADING_REQUEST',
    'portfolio/preloader/LOADING_SUCCESS',
    'portfolio/preloader/LOADING_FAILURE',
)<void, void, string>();
