export const drawWave = (
    context: CanvasRenderingContext2D, 
    width: number,
    height: number,
    frequency: number, 
    phase: number,
    color: string,
    amplitude: number,
    corner: number,
) => {
    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.fillStyle = color;

    for (let x = 0; x < width; x++) {

        const _amplitude = (width - x) * amplitude;
        const y = (height / 2 + _amplitude * Math.sin(frequency * x + phase)) + x * corner;

        if (x === 0) {
            context.moveTo(0, height);
            context.lineTo(x, y);
        } else {
            context.lineTo(x, y);
        }

        if(x === width - 1){
            context.lineTo(width, height);
        }
    }

    context.fill();
};