import React from 'react';

import './about.css';

type AboutCardProps = {
    title: string;
    text: string;
};

export const AboutCard: React.FC<AboutCardProps> = ({ title, text }) => {

    return (
        <li className='about__card'>
            <div className='about__title'>{title}</div>
            <small>{text}</small>
        </li>
    );
};