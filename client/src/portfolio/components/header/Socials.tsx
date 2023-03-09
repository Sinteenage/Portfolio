import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

import './header.css';

export const Socials: React.FC = () => {
    return (
        <div className='header__socials'>
            <a href='https://ua.linkedin.com/in/%D0%B4%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9-%D0%BA%D0%B5%D0%BD%D0%B5%D0%B2-584511bb' target={'_blank'}><BsLinkedin/></a>
            <a href='https://github.com/Sinteenage' target={'_blank'}><BsGithub/></a>
        </div>
    );
}