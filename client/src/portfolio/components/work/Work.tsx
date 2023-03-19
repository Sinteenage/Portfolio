import React from 'react';

import Img1 from '../../../assets/placeholder-image.jpg';
import './work.css';

import { useISObserver } from '../../hooks/useISObserver';
import { sections } from '../../types';
import { WorkCard } from './WorkCard';

export const Work: React.FC = () => {

    const activeNav = useISObserver([sections[2]]);

    const workItems = [Img1, Img1, Img1, Img1, Img1, Img1];

    return (
        <section id='portfolio'>
            <div className='container'>
                <h2>Portfolio</h2>
                <ul className={`work__items ${activeNav === '#portfolio' ? 'active' : ''}`}>
                    {workItems.map((item, index) => {
                        return <WorkCard 
                            key={index}
                            title={'Title'}
                            text={'Description'}
                            imgSrc={item}
                            workHref={''}
                        />;
                    })}
                </ul>
            </div>
        </section>
    );
};