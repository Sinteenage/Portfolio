import { useCallback, useEffect, useRef } from 'react';

export const useAnimationFrame = (
    nextAnimationFrameHandler: () => void,
    fps: number = 25,
    shouldAnimate: boolean = true,
) => {
    const frame = useRef(0);
    
    const thenRef = useRef(Date.now());
    const nowRef = useRef(0);

    const animate = useCallback(() => {
        nowRef.current = Date.now();
        
        const timeFraction = nowRef.current - thenRef.current;
        
        if (timeFraction > 1000 / fps) {
            nextAnimationFrameHandler();
            thenRef.current = nowRef.current;
        }

        requestAnimationFrame(animate);
    }, [fps, nextAnimationFrameHandler]);

    useEffect(() => {
        
        if (shouldAnimate) {
            frame.current = requestAnimationFrame(animate);
        } else {
            cancelAnimationFrame(frame.current);
        }

        return () => cancelAnimationFrame(frame.current);
    }, [animate, shouldAnimate]);
};