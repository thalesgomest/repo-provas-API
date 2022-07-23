import { Request, Response } from 'express';
import { CreateTestData } from '../types/testInterface';

import * as testService from '../services/testService.js';

export const insert = async (req: Request, res: Response) => {
	const testData: CreateTestData = req.body;
	const test = await testService.insert(testData);
	res.status(201).send(test);
};
