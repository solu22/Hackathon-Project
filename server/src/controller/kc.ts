import { Request, Response, NextFunction } from 'express';

import KC from '../models/kc';
import Lecture from '../models/lecture';

const getKCInLecture = async (req: Request, res: Response) => {
  const { lectureId } = req.params;
  try {
    const lecture = await Lecture.findById(lectureId).populate('KC');
    res.status(200).send(lecture.KC);
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

const getKCQuestions = async (req: Request, res: Response) => {
  const { kcId } = req.params;
  try {
    const kc = await KC.findById(kcId).populate('Question');
    res.status(200).send(kc.questions);
  } catch (error) {
    res.status(401).send('KC not found');
  }
};

const createKC = async (req: Request, res: Response) => {
  const { questions, lectureId } = req.body;
  try {
    const newKC = new KC({
      questions,
      lectureId,
    });
    const save = await newKC.save();
    res.status(200).send(save);
  } catch (error) {
    res.status(500).send({ message: 'internal server error' });
  }
};

const updateKC = async (req: Request, res: Response) => {
  const { kcId, questions, lectureId } = req.body;
  try {
    const lecture = await KC.findByIdAndUpdate(kcId, { questions, lectureId });
    res.status(200).send(lecture);
  } catch (error) {
    res.status(401).send({ message: 'lecture not found' });
  }
};

const checkAnswer = async (req: Request, res: Response) => {
  const { kcId, answer, studentId } = req.body;
  try {
    const kc = await KC.findById(kcId).populate('Question');
    console.log(kc);
  } catch (error) {
    res.status(401).send('KC not found');
  }
};

export { getKCInLecture, createKC, updateKC, checkAnswer, getKCQuestions };
