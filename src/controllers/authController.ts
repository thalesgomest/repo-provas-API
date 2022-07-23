import { Request, Response } from 'express';
import * as authService from '../services/authService.js';

export const signUp = async (req: Request, res: Response) => {
	const userData = req.body;
	await authService.signUp(userData);
	res.sendStatus(201);
};

export const signIn = async (req: Request, res: Response) => {
	const userData = req.body;
	const token = await authService.signIn(userData);

	res.status(200).send({ token });
};
