import { Router } from 'express';
import colors from 'colors';
import authRouter from './authRouter.js';
import testRouter from './testRouter.js';
import categoryRouter from './categoryRouter.js';

const router = Router();

router.use(authRouter);
router.use(testRouter);
router.use(categoryRouter);

export default router;
