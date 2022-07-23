import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

import AppError from '../config/error.js';

function validadeSchemaMiddleware(schema: Schema) {
	return (req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate(req, { abortEarly: false });
		if (error) {
			throw new AppError(
				'Invalid Input',
				422,
				'Invalid Input',
				error.details.map((detail) => detail.message).join(', ')
			);
		}
		next();
	};
}

export default validadeSchemaMiddleware;
