import express from 'express';

import { findAll, registerStudent } from '../controller/student';

const router = express.Router();

router.get('/', findAll);
router.post('/register-student', registerStudent);

export default router;
