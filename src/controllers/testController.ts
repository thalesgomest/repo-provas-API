import { Request, Response } from 'express';
import { CreateTestData } from '../types/testInterface';

import * as testService from '../services/testService.js';

export const insert = async (req: Request, res: Response) => {
	const testData: CreateTestData = req.body;
	const test = await testService.insert(testData);
	res.status(201).send(test);
};

export const find = async (req: Request, res: Response) => {
	const { groupBy, teacher, discipline } = req.query as {
		groupBy: string;
		teacher: string;
		discipline: string;
	};

	if (groupBy !== 'disciplines' && groupBy !== 'teachers') {
		return res.status(400).send({ error: 'Invalid groupBy parameter' });
	}

	const tests = await testService.find({ groupBy, teacher, discipline });
	res.status(200).send({ tests });
};
