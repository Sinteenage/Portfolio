import React, { useCallback, useEffect, useRef } from 'react';

import './canvas.css';
import { wave } from '../../hooks/useWave';
import { waveOne, waveThree, waveTwo } from '../../types';
import { useAnimationFrame } from '../../hooks/useAnimation';

type CanvasProps = {
    height: number;
}

export const Canvas: React.FC<CanvasProps> = ({ height }) => {

    const widthRef = useRef(window.innerWidth);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);
    const phaseRef = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }

        canvas.width = canvas.clientWidth;

        const context = canvas.getContext('2d');
        if(!context){
            return;
        }

        contextRef.current = context;
    }, []);

    const animateDraw = useCallback(() => {
        const context = contextRef.current;
        if(!context){
            return;
        }

        context.clearRect(0, 0, widthRef.current, height);

        wave(context, widthRef, height, phaseRef, waveThree);
        wave(context, widthRef, height, phaseRef, waveTwo);
        wave(context, widthRef, height, phaseRef, waveOne);

    }, [height]);

    useAnimationFrame(animateDraw, 25);

    return ( 
        <>
            <canvas ref={canvasRef} height={height}/>
        </>
    );
};