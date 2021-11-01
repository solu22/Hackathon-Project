import { Request, Response} from 'express'
import Teacher from '../models/teacher'

export const login = async(req:Request, res:Response)=>{
    const {email} = req.body

    const student = await Teacher.findOne({email})
    if(!student){
        return res.json({error: "teacher not found with given email"})
    }
   
     res.status(200).json({message: "successfully login"})
    }