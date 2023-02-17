export const getLoadingRequest = async (ms: number): Promise<void> => {

    return new Promise(res => setTimeout(res, ms));
};
