import { Router } from 'express';
import validateSchemaMiddleware from '../middlewares/validateSchemaMiddleware.js';
import { authSchema } from '../schemas/authSchema.js';
import * as authController from '../controllers/authController.js';

const authRouter = Router();

authRouter.post(
	'/sign-up',
	validateSchemaMiddleware(authSchema),
	authController.signUp
);
authRouter.post(
	'/sign-in',
	validateSchemaMiddleware(authSchema),
	authController.signIn
);

export default authRouter;
