import React, { useCallback, useEffect, useRef } from 'react';

import './canvas.css'

type canvasProps = {
    draw: (context: CanvasRenderingContext2D) => void;
}

export const Canvas: React.FC<canvasProps> = ({ draw }) => {

    const canvasWidth = window.innerWidth;
    const canvasHeight = 500;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const animateDraw = useCallback(() => {
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        const context = canvas.getContext('2d');
        if(!context){
            return;
        }

        draw(context);
        
        requestAnimationFrame(animateDraw);
    }, [canvasWidth, draw]);

    useEffect(() => {
        animateDraw();
    }, [animateDraw]);

    return ( 
        <>
            <canvas ref={canvasRef}/>
        </>
    );
}
