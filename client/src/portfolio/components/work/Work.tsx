import React from 'react';

import Img1 from '../../../assets/placeholder-image.jpg';

import './work.css';

export const Work: React.FC = () => {

    const workItems = [Img1, Img1, Img1, Img1, Img1, Img1];

    return (
        <section id='portfolio'>
            <div className='container'>
                <h2>Portfolio</h2>
                <ul className='work__items'>
                    {workItems.map((item, index) => {
                        return <li key={index} className='worck__item'>{
                            <>
                                <div className='work__image_container'>
                                    <img className='work__image' src={item} alt="item work" />
                                </div>
                                <div className='work__description'>
                                    <h5>Work {index}</h5>
                                    <small>Some about work</small>
                                </div>
                            </>
                        }</li>;
                    })}
                </ul>
            </div>
        </section>
    );
}