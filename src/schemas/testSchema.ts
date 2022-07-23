import Joi from 'joi';
import { CreateTestData } from '../types/testInterface.js';

const testBodySchema = Joi.object<CreateTestData>({
	name: Joi.string().required(),
	pdfUrl: Joi.string().uri().required(),
	category: Joi.string().required(),
	teacher: Joi.string().required(),
	discipline: Joi.string().required(),
}).required();

const testSchema = Joi.object({
	body: testBodySchema,
}).options({ allowUnknown: true });

export { testSchema };
