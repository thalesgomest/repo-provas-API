import { Router } from 'express';
import colors from 'colors';
import authRouter from './authRouter.js';
import testRouter from './testRouter.js';

const router = Router();

router.use(authRouter);
router.use(testRouter);

export default router;
