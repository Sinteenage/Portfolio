const createPath = (localPath) => `https://service.dkenev.com${localPath}`;

const works = [
    {
        key: 'w1',
        title: 'Caesars Casino',
        description: 'I programmed more than 30 games in "Caesars Casino" for "Playtika"',
        imgSrc: createPath('/public/assets/caesars_slots.jpg'),
        workHref: '',
    },
    {
        key: 'w2',
        title: 'Team7',
        description: 'Interactive 3D furniture configurator catalog in browser for company "Team7"',
        imgSrc: createPath('/public/assets/team7.jpg'),
        workHref: '',
    },
    {
        key: 'w3',
        title: 'Pressure Regulator',
        description: 'Interactive 3D web assembly instruction for presure regulator "LORD"',
        imgSrc: createPath('/public/assets/regulator.jpg'),
        workHref: '',
    },
    {
        key: 'w4',
        title: 'Closet Constructor',
        description: 'Interactive 3D closet constructor in browser for company "Perviy Shkaf"',
        imgSrc: createPath('/public/assets/first_closet.jpg'),
        workHref: '',
    },
    {
        key: 'w5',
        title: 'Shunok',
        description: 'Interactive 3D tire shop online "Shunok" with the ability to change tires, rims, color on car models',
        imgSrc: createPath('/public/assets/shunok.jpg'),
        workHref: '',
    },
    {
        key: 'w6',
        title: 'Sofa Configurator',
        description: 'Interactive 3D sofa catalog configurator online',
        imgSrc: createPath('/public/assets/sofa.jpg'),
        workHref: '',
    },
];

module.exports = works;