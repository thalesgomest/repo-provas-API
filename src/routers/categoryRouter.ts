import { Router } from 'express';
import validateBearerTokenMiddleware from '../middlewares/validationBearerTokenMiddleware.js';
import * as categoryController from '../controllers/categoryController.js';

const categoryRouter = Router();

categoryRouter.use(validateBearerTokenMiddleware);
categoryRouter.get('/categories', categoryController.findMany);

export default categoryRouter;
