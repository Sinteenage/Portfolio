import React from 'react';
import { useSelector } from 'react-redux';

import './work.css';

import { useISObserver } from '../../hooks/useISObserver';
import { LoadingState, sections } from '../../types';
import { WorkCard } from './WorkCard';
import { getWorkItems } from '../../selectors';
import { Preloader } from '../preloader/Preloader';

export const Work: React.FC = () => {

    const activeNav = useISObserver([sections[2]], 0.4);

    const { workItems, loading } = useSelector(getWorkItems);

    return (
        <section id='portfolio'>
            <div className='container'>
                <h2>Portfolio</h2>
                <div className='container__portfolio'>
                    { (loading === LoadingState.REQUEST) ? 
                        <Preloader /> :
                        <ul className={`work__items ${activeNav === '#portfolio' ? 'active' : ''}`}>
                            { workItems.length > 0 && workItems.map((item) => {
                                return <WorkCard 
                                    key={item.key}
                                    title={item.title}
                                    text={item.description}
                                    imgSrc={item.imgSrc}
                                    workHref={item.workHref}
                                />;
                            })}
                        </ul>
                    }
                </div>
            </div>
        </section>
    );
};