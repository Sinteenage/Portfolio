import express, { Request, Response } from 'express';

export const sendMail = (req: Request, res: Response) => {
    console.log('message: ' + req.body.message);
    
    res.status(200).json({mail: 'sended'});
};