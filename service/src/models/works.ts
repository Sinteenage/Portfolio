interface IWork {
    key: string,
    title: string,
    description: string,
    imgSrc: string,
    workHref: string,
}

export const works: IWork[] = [
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
    }
]