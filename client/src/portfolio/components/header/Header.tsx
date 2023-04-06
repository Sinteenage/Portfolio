import React, { useEffect, useRef } from 'react';

import './header.css';

import { Canvas } from '../canvas/Canvas';
import { Socials } from './Socials';
import { useResize } from '../../hooks/useResize';

export const Header: React.FC = () => {

    const widthRef = useRef(window.innerWidth);
    const height = 600;

    const { width } = useResize();

    useEffect(() => {
        widthRef.current = width;
    }, [width]);

    return (
        <header id='home'>
            <Canvas height={height}/>
            <div className='container header__container'>
                <span className='header__subtitle'>Web Developer</span>
                <div className='header__title'>
                    <h1><span className='header__span'>Dmitry</span>Kenev</h1>
                </div>
                <Socials/>
            </div>
        </header>
    );
};