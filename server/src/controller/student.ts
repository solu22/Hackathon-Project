import { Request, Response, NextFunction } from 'express'
import  asyncHandler  from "express-async-handler";
import Student from "../models/student";

export const findAll = asyncHandler(async (req:Request, res:Response) => {
  const students = await Student.find({});
  res.json(students);
});

