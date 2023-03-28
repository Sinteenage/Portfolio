import express from 'express';

import { getWurks } from '../controllers/work-controller';

const workRouter = express.Router();

workRouter.get('/api/works', getWurks);

export default workRouter;