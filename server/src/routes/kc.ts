import express from 'express';
import { checkAnswer, createKC, getKCInLecture, getKCQuestions, updateKC } from '../controller/kc';

const kcRouter = express.Router();

kcRouter.get('/:lectureId', getKCInLecture);
kcRouter.post('/create-kc', createKC);
kcRouter.put('/update-kc', updateKC);
kcRouter.get('/submitAnswer', checkAnswer);
kcRouter.get('/get-questions/:kcId', getKCQuestions);

export { kcRouter };
