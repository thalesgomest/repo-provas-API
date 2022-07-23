import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/JWT.js';
import bearerAuthorizationSchema from '../schemas/bearerAuthorizationSchema.js';

import AppError from '../config/error.js';

const validateBearerToken = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { error } = bearerAuthorizationSchema.validate(req.headers, {
		abortEarly: false,
	});
	if (error) {
		throw new AppError(
			'Invalid authorization header',
			401,
			'Invalid authorization header',
			error.details.map((detail) => detail.message).join(', ')
		);
	}
	try {
		const token = req.headers.authorization.split(' ')[1];
		const userData = verifyToken(token);
		res.locals.userData = userData;
		next();
	} catch (error) {
		return res.status(401).send({ error: error.message });
	}
};

export default validateBearerToken;
