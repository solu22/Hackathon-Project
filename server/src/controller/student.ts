import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
import faker from 'faker';

import Student from '../models/student';

export const findAll = asyncHandler(async (req: Request, res: Response) => {
  const students = await Student.find({});
  res.json(students);
});

export const registerStudent = async (req: Request, res: Response) => {
  try {
    // const { name, email } = req.body;
    const name = faker.name.firstName();
    const email = faker.internet.email();
    const student = new Student({ name, email });
    const savedStudent = await student.save();
    res.status(200).send(savedStudent);
  } catch (error) {
    console.log(error);
  }
};
