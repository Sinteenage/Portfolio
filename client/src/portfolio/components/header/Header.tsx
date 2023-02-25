import React, { useCallback, useEffect, useRef } from 'react';

import './header.css';

import { Canvas } from '../canvas/Canvas';
import { drawWave } from '../../utils/drawWave';
import { Socials } from './Socials';

export const Header: React.FC = () => {

    const widthRef = useRef(window.innerWidth);
    const height = 400;
    const phase = useRef(0);

    const onChangeWidth = useCallback(() => {
        widthRef.current = window.innerWidth;
    }, []);

    useEffect(() => {
        window.addEventListener('resize', onChangeWidth);
        return () => {
            window.removeEventListener('resize', onChangeWidth);
        };
    }, [onChangeWidth]);

    const drawShineWaveOne = useCallback((context: CanvasRenderingContext2D) => {

        drawWave(
            context, 
            widthRef.current, 
            height, 
            0.003,
            phase.current,
            'rgba(0, 36, 72, 0.3)',
            0.07,
            0.12,
        );

        phase.current += 0.005;

    }, []);

    const drawShineWaveTwo = useCallback((context: CanvasRenderingContext2D) => {

        drawWave(
            context, 
            widthRef.current, 
            height, 
            0.003,
            phase.current + 5.4,
            'rgba(0, 36, 72, 0.4)',
            0.07,
            0.12,
        );

        phase.current += 0.005;

    }, []);

    const drawShineWaveThree = useCallback((context: CanvasRenderingContext2D) => {

        drawWave(
            context, 
            widthRef.current, 
            height, 
            0.003,
            phase.current + 4.3,
            'rgba(0, 36, 72, 0.5)',
            0.07,
            0.12,
        );

        phase.current += 0.005;

    }, []);

    return (
        <header>
            <Canvas draw={drawShineWaveThree} height={height}/>
            <Canvas draw={drawShineWaveTwo} height={height}/>
            <Canvas draw={drawShineWaveOne} height={height}/>
            <div className="container header__container">
                <h3 className="header__h3">hello, I'm</h3>
                <h1>
                    Dmitry Kenev
                </h1>
                <h4 className="header__h4">Frontend Developer</h4>
                <Socials/>
            </div>
        </header>
    );
}
