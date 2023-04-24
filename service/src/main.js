const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const workRouter = require('./routes/work-route.js');
const mailRouter = require('./routes/mail-route.js');
const config = require('./config/index.js');

const { port, allowedDomains } = config;

const server = express();

server.use(cors({origin: [allowedDomains]}));

server.use(helmet());

server.use(compression());

server.listen(port, () => {
    // console.log(`listen port: ${port}`);
}).on('error', (error) => {
    console.log(`service error: ${error}`);
});

server.use(express.json());
server.use('/media', express.static('public/assets'));

server.use(workRouter);
server.use(mailRouter);

server.use((req, res) => {
    res
        .status(404)
        .send('error');
});