import { Request, Response } from 'express';
import queryFactory from '../factories/queryFactory.js';

export const findMany = async (req: Request, res: Response) => {
	const categories = await queryFactory.findAll('Category');
	res.send({ categories });
};
