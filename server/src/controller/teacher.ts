import { Request, Response, NextFunction } from 'express';
import faker from 'faker';

import Teacher from '../models/teacher';

export const findAll = async (req: Request, res: Response) => {
  const teachers = await Teacher.find({});
  res.json(teachers);
};

export const registerTeacher = async (req: Request, res: Response) => {
  try {
    // const { name, email } = req.body;
    const name = faker.name.firstName();
    const email = faker.internet.email();
    const teacher = new Teacher({ name, email });
    const savedTeacher = await teacher.save();
    res.status(200).send(savedTeacher);
  } catch (error) {
    console.log(error);
  }
};
