import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

import './header.css';

export const Socials: React.FC = () => {
    return (
        <div className='header__socials'>
            <a href="http://linkedin.com"><BsLinkedin/></a>
            <a href="http://github.com"><BsGithub/></a>
        </div>
    );
}