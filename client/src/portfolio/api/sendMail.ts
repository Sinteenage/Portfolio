import { IMailData } from '../types';
import { SEND_MAIL_URL } from '../urls';

export const getSendMailRequest = async (mail: IMailData): Promise<Response> => {
    const headers = {
        'Content-Type': 'application/json',
    };

    return await fetch(SEND_MAIL_URL, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify(mail),
    });
};
