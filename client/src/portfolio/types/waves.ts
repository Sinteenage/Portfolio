export interface WaveProps {
    frequency: number;
    phaseCorrection: number;
    color: string;
    amplitude: number;
    angle: number;
};

const waveOne: WaveProps = {
    frequency: 0.003,
    phaseCorrection: 0,
    color: 'rgba(0, 36, 72, 0.3)',
    amplitude: 0.07,
    angle: 0.1,
};

const waveTwo: WaveProps = {
    frequency: 0.003,
    phaseCorrection: 5.4,
    color: 'rgba(0, 36, 72, 0.4)',
    amplitude: 0.07,
    angle: 0.1,
};

const waveThree: WaveProps = {
    frequency: 0.003,
    phaseCorrection: 4.3,
    color: 'rgba(0, 36, 72, 0.5)',
    amplitude: 0.07,
    angle: 0.1,
};

export const waves: Array<WaveProps> = [
    waveOne,
    waveTwo,
    waveThree,
];