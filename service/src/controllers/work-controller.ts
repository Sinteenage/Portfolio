import express, { Request, Response } from 'express';

import { works } from '../models/works';

export const getWurks = (req: Request, res: Response) => {
    res.status(200).json(works);
};