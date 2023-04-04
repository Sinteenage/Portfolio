import React, {
    useCallback,
    useEffect,
    useRef,
} from 'react';

import './canvas.css';

type CanvasProps = {
    draw: (context: CanvasRenderingContext2D) => void;
    height: number;
}

export const Canvas: React.FC<CanvasProps> = ({ draw, height }) => {

    const animIdRef = useRef(0);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const animateDraw = useCallback(() => {
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }

        canvas.width = canvas.clientWidth;

        const context = canvas.getContext('2d');
        if(!context){
            return;
        }

        draw(context);
        
        animIdRef.current = requestAnimationFrame(animateDraw);
    }, [draw]);

    useEffect(() => {
        animIdRef.current = requestAnimationFrame(animateDraw);

        return () => {
            cancelAnimationFrame(animIdRef.current);
        };
    }, [animateDraw]);

    return ( 
        <>
            <canvas ref={canvasRef} height={height}/>
        </>
    );
};