import express from 'express';

import { findAll, registerTeacher } from '../controller/teacher';

const router = express.Router();

router.get('/', findAll);
router.post('/register-teacher', registerTeacher);

export default router;
