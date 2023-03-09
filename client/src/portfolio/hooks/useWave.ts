import { MutableRefObject, useCallback, useRef } from 'react';
import { WaveProps } from '../types';

import { drawWave } from '../utils/drawWave';

export function useWave(
        widthRef: MutableRefObject<number>, 
        height: number,
        waveProps: WaveProps
    ): (context: CanvasRenderingContext2D) => void {
    const phaseRef = useRef(0);
    const { freqancy, phaseCorection, color, amplitude, angle } = waveProps;

    return useCallback((
        context: CanvasRenderingContext2D
        ) => {

        drawWave(
            context, 
            widthRef.current,
            height,
            freqancy,
            phaseRef.current + phaseCorection,
            color,
            amplitude,
            angle,
        );

        phaseRef.current += 0.008;

    }, [widthRef, height, freqancy, phaseCorection, color, amplitude, angle]);
};