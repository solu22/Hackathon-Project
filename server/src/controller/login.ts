
import { Request, Response,response } from 'express'
import Student from '../models/student'

export const login = async(req:Request, res:Response)=>{
    const {email} = req.body

    const student = await Student.findOne({email})
    if(!student){
        return res.json({error: "student not found with given email"})
    }
   
     res.status(200).json({message: "successfully login"})
    }



