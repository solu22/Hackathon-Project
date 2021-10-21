import { Request, Response, NextFunction } from "express";
import { KnowledgeCheckModel } from "./../models/KnowledgeCheck";
import express from "express";
const router = express.Router();

export const findAll = async (req: Request, res: Response) => {
  try {
    const questions = await KnowledgeCheckModel.find();
    return res.status(200).json(questions);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const postQuiz = async (req: Request, res: Response) => {
  try {
    const { Test } = req.body;
    const { options } = req.body;

    const question = await KnowledgeCheckModel.create({
      Test,
      options,
    });

    return res.status(201).json(question);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;

    const question = await KnowledgeCheckModel.deleteOne({ _id });

    if (question.deletedCount === 0) {
      return res.status(404).json();
    } else {
      return res.status(204).json();
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};
