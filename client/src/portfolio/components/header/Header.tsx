import React, { useCallback, useEffect, useRef } from 'react';

import './header.css';

import { Canvas } from '../canvas/Canvas';
import { Socials } from './Socials';
import { useWave } from '../../hooks/useWave';
import { waveOne, waveThree, waveTwo } from '../../types';

export const Header: React.FC = () => {

    const widthRef = useRef(window.innerWidth);
    const height = 600;

    const onChangeWidth = useCallback(() => {
        widthRef.current = window.innerWidth;
    }, []);

    useEffect(() => {
        window.addEventListener('resize', onChangeWidth);
        return () => {
            window.removeEventListener('resize', onChangeWidth);
        };
    }, [onChangeWidth]);

    const waves = [
        useWave(widthRef, height, waveThree), 
        useWave(widthRef, height, waveTwo), 
        useWave(widthRef, height, waveOne)
    ];

    return (
        <header id='home'>
            {waves.map((item, index) => {
                return <Canvas key={index} height={height} draw={item}/>
            })}
            <div className='container header__container'>
                <h3 className='header__h3'>Web Developer</h3>
                <div className='header__title'>
                    <h1><span className='header__span'>Dmitry</span>Kenev</h1>
                </div>
                <Socials/>
            </div>
        </header>
    );
}
