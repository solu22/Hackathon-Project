import { Request, Response } from 'express'
import Question from '../models/knowledgeCheck'
import mongoose from 'mongoose'
import { ObjectId, ObjectIdLike } from 'bson';


export const findAll=  async (req:Request, res:Response) => {
    try {
        const questions = await Question.find({})
        return res.status(200).json(questions)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}

// get one quiz question
export const findOne = async (req:Request, res:Response) => {
    try {
        const _id = req.params.id 

        const question = await Question.findOne({_id}).populate("lecture")       
        if(!question){
            return res.status(404).json({})
        }else{
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}

// create one quiz question
export const create= async (req:Request, res:Response) => {
    try {
        const { description } = req.body
        const { alternatives } = req.body

        const question = await Question.create({
            description,
            alternatives
        })

        return res.status(201).json(question)
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}

// update one quiz question
export const update =  async (req: Request, res:Response) => {
    try {
        const _id = req.params.id 
        const { question, options, lecture } = req.body

        let ques = await Question.findOne({_id})

        if(!ques){
            ques = await Question.create({
                question,
                options,
                lecture
            })    
            return res.status(201).json(ques)
        }else{
            // updates only the given fields
            if (ques) {
                question.question = question
            }
            if (options) {
                question.options = options
            }
            if (lecture) {
                question.subjects = lecture.map((lec: string | number | ObjectId | Buffer | ObjectIdLike | undefined) => new mongoose.Types.ObjectId(lec))
            }
            await question.save()
            return res.status(200).json(question)
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}

// delete one quiz question
export const remove =  async (req: Request, res:Response) => {
    try {
        const _id = req.params.id 

        const question = await Question.deleteOne({_id})

        if(question.deletedCount === 0){
            return res.status(404).json()
        }else{
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
}

