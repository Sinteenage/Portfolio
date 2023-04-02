import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import workRouter from './routes/work-route.js';
import mailRouter from './routes/mail-route.js';
import config from './config/index.js';
const { port } = config;
const server = express();
server.use(helmet());
server.use(compression());
server.listen(port, () => {
    console.log(`listen port: ${port}`);
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
//# sourceMappingURL=main.js.map