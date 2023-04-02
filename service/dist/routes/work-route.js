import express from 'express';
import { getWurks } from '../controllers/work-controller.js';
const workRouter = express.Router();
workRouter.get('/api/works', getWurks);
export default workRouter;
//# sourceMappingURL=work-route.js.map