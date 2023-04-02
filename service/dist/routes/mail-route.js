import express from 'express';
import { sendMail } from '../controllers/mail-controller.js';
const mailRouter = express.Router();
mailRouter.post('/api/mailSend', sendMail);
export default mailRouter;
//# sourceMappingURL=mail-route.js.map