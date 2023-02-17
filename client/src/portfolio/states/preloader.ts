import { LoadingState, PreloaderInitialState } from "../types";

export function getInitialPreloaderState(): PreloaderInitialState {
    return { loading: LoadingState.IDLE };
}
