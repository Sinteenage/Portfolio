import React, { useCallback, useEffect, useRef } from 'react';

export const Canvas: React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const frequency = 0.005;
    let phase = useRef(0);

    const drawSineWave = useCallback(() => {
        const canvas = canvasRef.current;
        if(!canvas){
            return;
        }

        canvas.width = window.innerWidth;
        canvas.height = 400;
        const context = canvas.getContext('2d');
        if(!context){
            return;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();

        for (let x = 0; x < canvas.width; x++) {
            const amplitude = (canvas.width - x * 1) * 0.09;
            const y = canvas.height / 2 + amplitude * Math.sin(frequency * x + phase.current);
            if (x === 0) {
                context.moveTo(x, y);
            } else {
                context.lineTo(x, y);
            }
        }

        context.stroke();

        phase.current += 0.05; // change this to adjust animation speed
        requestAnimationFrame(drawSineWave);
    }, []);

    useEffect(() => {
        drawSineWave();
    }, [drawSineWave]);

    return ( 
        <>
            <canvas ref={canvasRef}/>
        </>
    );
}
