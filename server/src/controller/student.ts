
import { Request, Response,response } from 'express'
import Student from "../models/student";

export const create = async (req:Request, res:Response) => {
  const body = req.body
  if(!(body)){
    return res.status(400).json({error: 'field cannot be empty'})
  }


  const newStudent = new Student({
   email: body.email,
   name: body.name
})

const savedStudent = await newStudent.save()
res.status(201).json(newStudent)
};


export const findAll = async (req:Request, res:Response) => {
   const students = await Student.find({});
   res.json(students);
};

