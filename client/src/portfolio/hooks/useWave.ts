import { MutableRefObject, useRef } from 'react';
import { WaveProps } from '../types';

export const useWave = (
    widthRef: MutableRefObject<number>, 
    height: number,
    waveProps: WaveProps,
): (context: CanvasRenderingContext2D) => void => {
    const phaseRef = useRef(0);
    const { freqancy, phaseCorection, color, amplitude, angle } = waveProps;

    return (
        context: CanvasRenderingContext2D,
    ) => {

        context.clearRect(0, 0, widthRef.current, height);
        context.beginPath();
        context.fillStyle = color;

        for (let x = 0; x <  widthRef.current; x++) {

            const _amplitude = (widthRef.current - x) * amplitude;
            const y = (height / 2 + _amplitude * Math.sin(freqancy * x + phaseRef.current + phaseCorection)) + x * angle;

            if (x === 0) {
                context.moveTo(0, height);
                context.lineTo(x, y);
            } else {
                context.lineTo(x, y);
            }

            if(x ===  widthRef.current - 1){
                context.lineTo( widthRef.current, height);
            }
        }

        context.fill();

        phaseRef.current += 0.008;

    };
};