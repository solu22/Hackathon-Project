import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";

import { StudentModel } from "../models/Student";

export const signin = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const oldStudent = await StudentModel.findOne({ email });

    if (!oldStudent) {
      return res.status(404).json({ message: "User does not exist" });
    }
    return res.json({ message: "Congratulations, welcome" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req: Request, res: Response) => {
  const { email, firstName, lastName } = req.body;
  // console.log(req.body);
  try {
    const oldStudent = await StudentModel.findOne({ email });

    if (oldStudent)
      return res.status(400).json({ message: "User already exists" });

    const result = await StudentModel.create({
      email,
      name: `${firstName} ${lastName}`,
    });
    // console.log(result);
    const saf = await result.save();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};
