import express from 'express';

import { sendMail } from '../controllers/mail-controller';

const mailRouter = express.Router();

mailRouter.post('/api/mailSend', sendMail);

export default mailRouter;