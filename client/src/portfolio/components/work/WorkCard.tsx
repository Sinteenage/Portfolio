import React from 'react';

import './work.css';

type WorkCardProps = {
    title: string;
    text: string;
    imgSrc: string;
    workHref: string;
};

export const WorkCard: React.FC<WorkCardProps> = ({title, text, imgSrc = '', workHref = ''}) => {

    return (
        <li className='worck__item'>{
            <>
                <div className='work__image_container'>
                    <img className='work__image' src={imgSrc} alt='item work' />
                </div>
                <div className='work__description'>
                    <h5>{title}</h5>
                    <small className='work__sub_description'>{text}</small>
                </div>
            </>
        }</li>
    );
};