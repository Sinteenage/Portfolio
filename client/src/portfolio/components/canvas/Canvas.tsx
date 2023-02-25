import React, { useCallback, useEffect, useRef } from 'react';

import './canvas.css'

type canvasProps = {
    draw: (context: CanvasRenderingContext2D) => void;
    height: number;
}

export const Canvas: React.FC<canvasProps> = ({ draw, height }) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const animateDraw = useCallback(() => {
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }

        canvas.width = window.innerWidth;

        const context = canvas.getContext('2d');
        if(!context){
            return;
        }

        draw(context);
        
        requestAnimationFrame(animateDraw);
    }, [draw]);

    useEffect(() => {
        animateDraw();
    }, [animateDraw]);

    return ( 
        <>
            <canvas ref={canvasRef} width={window.innerWidth} height={height}/>
        </>
    );
}
