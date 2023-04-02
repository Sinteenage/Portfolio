const path = require('path');

const createPath = (localPath) => path.resolve(__dirname, localPath);

const works = [
    {
        key: 'w1',
        title: 'Caesars Casino',
        description: 'I programmed more than 30 games in "Caesars Casino" for "Playtika"',
        imgSrc: createPath('/media/caesars_slots.jpg'),
        workHref: '',
    },
    {
        key: 'w2',
        title: 'Team7',
        description: 'Interactive 3D furniture configurator catalog in browser for company "Team7"',
        imgSrc: createPath('/media/team7.jpg'),
        workHref: '',
    },
    {
        key: 'w3',
        title: 'Pressure Regulator',
        description: 'Interactive 3D web assembly instruction for presure regulator "LORD"',
        imgSrc: createPath('/media/regulator.jpg'),
        workHref: '',
    },
    {
        key: 'w4',
        title: 'Closet Constructor',
        description: 'Interactive 3D closet constructor in browser for company "Perviy Shkaf"',
        imgSrc: createPath('/media/first_closet.jpg'),
        workHref: '',
    },
    {
        key: 'w5',
        title: 'Shunok',
        description: 'Interactive 3D tire shop online "Shunok" with the ability to change tires, rims, color on car models',
        imgSrc: createPath('/media/shunok.jpg'),
        workHref: '',
    },
    {
        key: 'w6',
        title: 'Sofa Configurator',
        description: 'Interactive 3D sofa catalog configurator online',
        imgSrc: createPath('/media/sofa.jpg'),
        workHref: '',
    },
];

module.exports = works;