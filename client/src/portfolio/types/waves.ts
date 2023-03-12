export interface WaveProps {
    freqancy: number;
    phaseCorection: number;
    color: string;
    amplitude: number;
    angle: number;
};

export const waveOne: WaveProps = {
    freqancy: 0.003,
    phaseCorection: 0,
    color: 'rgba(0, 36, 72, 0.3)',
    amplitude: 0.07,
    angle: 0.1,
};

export const waveTwo: WaveProps = {
    freqancy: 0.003,
    phaseCorection: 5.4,
    color: 'rgba(0, 36, 72, 0.4)',
    amplitude: 0.07,
    angle: 0.1,
};

export const waveThree: WaveProps = {
    freqancy: 0.003,
    phaseCorection: 4.3,
    color: 'rgba(0, 36, 72, 0.5)',
    amplitude: 0.07,
    angle: 0.1,
};