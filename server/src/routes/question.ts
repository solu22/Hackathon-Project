import express from 'express';
import { createQuestion, updateQuestion } from '../controller/question';

const question = express.Router();

question.post('/create-question', createQuestion);
question.put('/update-question', updateQuestion);

export { question };
