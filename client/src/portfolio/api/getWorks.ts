import { IWorkItem } from '../types';
import { WORKS_URL } from '../urls';

export const getWorksRequest = async (): Promise<IWorkItem[]> => {
    const headers = {
        'Content-Type': 'application/json',
    };

    const result = await fetch(WORKS_URL, {
        headers: headers,
        method: 'GET',
    });

    return await result.json();
};
