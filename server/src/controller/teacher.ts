
import { Request, Response} from 'express'
import Teacher from "../models/teacher";

export const create = async (req:Request, res:Response) => {
  const body = req.body
  if(!(body)){
    return res.status(400).json({error: 'field cannot be empty'})
  }


  const newTeacher = new Teacher({
   email: body.email,
   firstName: body.firstName,
   lastName: body.lastName
})

const savedTeacher = await newTeacher.save()
res.status(201).json(newTeacher)
};


export const findAll = async (req:Request, res:Response) => {
   const teachers = await Teacher.find({});
   res.json(teachers);
};