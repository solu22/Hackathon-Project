import { Request, Response,response } from 'express'
import Lecture from "../models/lecture";

export const create = async (req:Request, res:Response) => {
  const {title, section} = req.body
  if(!(title || section)){
    return res.status(400).json({error: 'field cannot be empty'})
  }
 const newLecture = new Lecture({
  title, section
})

const savedLecture = await newLecture.save()
res.status(201).json(newLecture)
};


export const findAll = async (req:Request, res:Response) => {
   const lectures = await Lecture.find({});
   res.json(lectures);
};
