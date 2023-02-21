import React, { useCallback, useRef } from 'react';

import './header.css';
import { Canvas } from '../canvas/Canvas';

export const Header: React.FC = () => {

    const canvasWidth = window.innerWidth;
    const canvasHeight = 500;

    const frequency = 0.004;
    let phase = useRef(0);

    const drawShineWave = useCallback((context: CanvasRenderingContext2D) => {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.beginPath();
        context.fillStyle = '#1f1f38';

        for (let x = 0; x < canvasWidth; x++) {

            const amplitude = (canvasWidth - x) * 0.03;
            const y = (canvasHeight / 2 + amplitude * Math.sin(frequency * x + phase.current)) + x * 0.15;

            if (x === 0) {
                context.moveTo(0, canvasHeight);
                context.lineTo(x, y);
            } else {
                context.lineTo(x, y);
            }

            if(x === canvasWidth - 1){
                context.lineTo(canvasWidth, canvasHeight);
            }
        }

        context.fill();

        phase.current += 0.05; // change this to adjust animation speed
    }, [canvasWidth]);

    return ( 
        <header>
            <Canvas draw={drawShineWave}/>
        </header>
    );
}
