const express = require('express');

const sendMail = require('../controllers/mail-controller');

const mailRouter = express.Router();

mailRouter.post('/api/mailSend', sendMail);

module.exports = mailRouter;