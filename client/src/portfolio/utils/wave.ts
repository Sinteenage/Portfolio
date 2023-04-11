import { MutableRefObject } from 'react';
import { WaveProps } from '../types';

export const wave = (
    context: CanvasRenderingContext2D,
    widthRef: MutableRefObject<number>,
    height: number,
    phaseRef: MutableRefObject<number>,
    waveProps: WaveProps,
) => {
    const { freqancy, phaseCorection, color, amplitude, angle } = waveProps;

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