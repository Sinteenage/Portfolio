import express from 'express';

const server = express();
const PORT = 3001;

server.get('/', (req, res) => {
    res.send();
})

server.post('/api/public/mailSend', (req, res) => {
    console.log('Body: ' + req.body);

    const data = JSON.stringify([
        {mail: 'sended'},
    ]);
    
    res.send(data);
})

server.listen(PORT, 'localhost', () => {
    console.log(`listen port: ${PORT}`);
});