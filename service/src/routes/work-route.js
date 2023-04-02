const express = require('express');

const getWurks = require('../controllers/work-controller');

const workRouter = express.Router();

workRouter.get('/api/works', getWurks);

module.exports = workRouter;