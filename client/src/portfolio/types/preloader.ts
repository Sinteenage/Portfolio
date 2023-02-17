export interface PreloaderInitialState {
    loading: LoadingState;
}

export const enum LoadingState {
    IDLE = "IDLE",
    REQUEST = "REQUEST",
    SUCCESS = "DONE",
    FAILURE = "FAILURE"
}
