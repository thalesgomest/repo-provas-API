import { Router } from 'express';
import validateBearerTokenMiddleware from '../middlewares/validationBearerTokenMiddleware.js';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import { testSchema } from '../schemas/testSchema.js';
import * as testController from '../controllers/testController.js';

const testRouter = Router();

testRouter.use(validateBearerTokenMiddleware);
testRouter.post(
	'/tests',
	validateSchemaMiddleware(testSchema),
	testController.insert
);

export default testRouter;
