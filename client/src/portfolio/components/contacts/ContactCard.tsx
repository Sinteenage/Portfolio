import React from 'react';

import './contacts.css';

type ContactCardProps = {
    title: string;
    text: string;
    contactHref: string;
    titleHref: string;
};

export const ContactCard: React.FC<ContactCardProps> = ({ title, text, contactHref, titleHref }) => {

    return (
        <li className='contact__option'>
            <h5>{title}</h5>
            <small>{text}</small>
            <a href={contactHref} target={'_blank'} rel='noreferrer'>{titleHref}</a>
        </li>
    );
};