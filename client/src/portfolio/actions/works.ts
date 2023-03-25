import { createAsyncAction } from 'typesafe-actions';

import { IWorkItem } from '../types';

export const getWorks = createAsyncAction(
    'portfolio/get_works/WORKS_REQUEST',
    'portfolio/get_works/WORKS_SUCCESS',
    'portfolio/get_works/WORKS_FAILURE',
)<void, Array<IWorkItem>, string>();