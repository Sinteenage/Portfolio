import { LoadingState, IPreloaderInitialState } from '../types';

export function getInitialPreloaderState(): IPreloaderInitialState {
    return { loading: LoadingState.IDLE };
}
