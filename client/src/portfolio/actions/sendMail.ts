import { createAsyncAction } from 'typesafe-actions';

import { IMailData } from '../types';

export const sendMail = createAsyncAction(
    'portfolio/send_mail/MAIL_REQUEST',
    'portfolio/send_mail/MAIL_SUCCESS',
    'portfolio/send_mail/MAIL_FAILURE',
)<IMailData, void, string>();