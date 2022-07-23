import Joi from 'joi';
import { CreateUserData } from '../types/userInterface.js';

const authBodySchema = Joi.object<CreateUserData>({
	email: Joi.string().email().required(),
	password: Joi.string().required(),
}).required();

const authSchema = Joi.object({
	body: authBodySchema,
}).options({ allowUnknown: true });

export { authSchema };
