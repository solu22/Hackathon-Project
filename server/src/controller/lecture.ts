import { Request, Response, NextFunction } from "express";
import { LectureModel } from "./../models/Lecture";
import { KnowledgeCheckModel } from "./../models/KnowledgeCheck";
import express from "express";
const router = express.Router();

export const createLecture = async (req: Request, res: Response) => {
  try {
    const { Sections } = req.body;
    const lecture = await LectureModel.create({ Sections });
    return res.status(200).json(lecture);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const getallLectures = async (req: Request, res: Response) => {
  try {
    const lectures = await LectureModel.find();
    return res.status(200).json(lectures);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const getallQuestionsbyLectureId = async (
  req: Request,
  res: Response
) => {
  try {
    const _id = req.params.id;

    const questions = await KnowledgeCheckModel.find({ subjects: _id });
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
