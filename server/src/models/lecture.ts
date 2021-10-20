import mongoose from 'mongoose'

export interface Lecture {
 name: string
}


const LectureSchema = new mongoose.Schema({
    name: String
})


export const LectureModel = mongoose.model<Lecture>('Lecture', LectureSchema)
