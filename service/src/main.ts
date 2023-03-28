import express from 'express';
import workRouter from './routes/work-route';
import mailRouter from './routes/mail-route';
require('dotenv').config();

const server = express();

const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`listen port: ${PORT}`);
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