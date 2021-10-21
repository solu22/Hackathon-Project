import { Request, Response } from 'express';
import KC from '../models/kc';
import Question from '../models/question';

const createQuestion = async (req: Request, res: Response) => {
  const { question, options, answer, kcId } = req.body;
  try {
    const newQuestion = new Question({ question, options, answer, KC: kcId });
    const save = await newQuestion.save();
    const kc = await KC.findById(kcId);
    kc.questions.push(save._id);
    const savedKc = await kc.save();
    console.log(savedKc);

    res.status(200).send(save);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateQuestion = async (req: Request, res: Response) => {
  const { questionId, question, options, answer, kcId } = req.body;
  try {
    const qs = await Question.findByIdAndUpdate(questionId, { question, options, answer, kcId });
    res.status(200).send(qs);
  } catch (error) {
    res.status(401).send(error);
  }
};

export { createQuestion, updateQuestion };
