import express from 'express';

const server = express();
const PORT = 3001;

server.listen(PORT, () => {
    console.log(`listen port: ${PORT}`);
});

// server.use(express.urlencoded());
server.use(express.json());
server.use(express.static('public'));

server.get('/api/works', (req, res) => {
    const data = JSON.stringify([
        {
            key: 'w1',
            title: 'Playtika',
            description: 'Work in Playtika 7.8 years',
            imgSrc: '',
            workHref: '',
        },
        {
            key: 'w2',
            title: 'Cesar Casino',
            description: 'Programming more than 30 games',
            imgSrc: '',
            workHref: '',
        },
    ]);
    
    res.send(data);
});

server.post('/api/mailSend', (req, res) => {
    console.log('Body: ' + req.body);

    const data = JSON.stringify([
        {mail: 'sended'},
    ]);
    
    res.send(data);
});

server.use((req, res) => {
    res
    .status(404)
    .send('error');
});