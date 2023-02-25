import React, { useCallback, useRef } from 'react';

import './header.css';

import { Canvas } from '../canvas/Canvas';
import { drawWave } from '../../utils/drawWave';
import { Socials } from './Socials';

export const Header: React.FC = () => {

    const width = window.innerWidth;
    const height = 400;
    let phase = useRef(0);

    const drawShineWaveOne = useCallback((context: CanvasRenderingContext2D) => {

        drawWave(
            context, 
            width, 
            height, 
            0.003,
            phase.current,
            'rgba(0, 36, 72, 0.3)',
            0.07,
            0.12,
        );

        phase.current += 0.005;

    }, [width, phase]);

    const drawShineWaveTwo = useCallback((context: CanvasRenderingContext2D) => {

        drawWave(
            context, 
            width, 
            height, 
            0.003,
            phase.current + 5.4,
            'rgba(0, 36, 72, 0.4)',
            0.07,
            0.12,
        );

        phase.current += 0.005;

    }, [width, phase]);

    const drawShineWaveThree = useCallback((context: CanvasRenderingContext2D) => {

        drawWave(
            context, 
            width, 
            height, 
            0.003,
            phase.current + 4.3,
            'rgba(0, 36, 72, 0.5)',
            0.07,
            0.12,
        );

        phase.current += 0.005;

    }, [width, phase]);

    return (
        <header>
            <Canvas draw={drawShineWaveThree}/>
            <Canvas draw={drawShineWaveTwo}/>
            <Canvas draw={drawShineWaveOne}/>
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
