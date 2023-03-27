import express from 'express';

const server = express();
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`listen port: ${PORT}`);
});

server.use(express.json());
server.use('/media', express.static('public/assets'));

server.get('/api/works', (req, res) => {
    const data = JSON.stringify([
        {
            key: 'w1',
            title: 'Caesars Casino',
            description: 'I programmed more than 30 games in "Caesars Casino" for "Playtika"',
            imgSrc: '/media/caesars_slots.jpg',
            workHref: '',
        },
        {
            key: 'w2',
            title: 'Team7',
            description: 'Interactive 3D furniture configurator catalog in browser for company "Team7"',
            imgSrc: '/media/team7.jpg',
            workHref: '',
        },
        {
            key: 'w3',
            title: 'Pressure Regulator',
            description: 'Interactive 3D web assembly instruction for presure regulator "LORD"',
            imgSrc: '/media/regulator.jpg',
            workHref: '',
        },
        {
            key: 'w4',
            title: 'Closet Constructor',
            description: 'Interactive 3D closet constructor in browser for company "Perviy Shkaf"',
            imgSrc: '/media/first_closet.jpg',
            workHref: '',
        },
    ]);
    
    res.send(data);
});

server.post('/api/mailSend', (req, res) => {
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