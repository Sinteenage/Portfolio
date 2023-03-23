export interface IMailData {
    name: string;
    email: string;
    message: string;
}

export const defaultMailData: IMailData = {
    name: '',
    email: '',
    message: '',
};