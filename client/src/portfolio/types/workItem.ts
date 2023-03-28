import { LoadingState } from './preloader';

export interface IWorkItemsState {
    workItems: IWorkItem[];
    loading: LoadingState;
}

export interface IWorkItem {
    key: string,
    title: string,
    description: string,
    imgSrc: string,
    workHref: string,
}

export const defaultWorkItem: IWorkItem = {
    key: '',
    title: '',
    description: '',
    imgSrc: '',
    workHref: '',
};