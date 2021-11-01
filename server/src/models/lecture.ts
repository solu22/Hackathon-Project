import mongoose, { Document } from 'mongoose'

export type LectureDocument = Document & {
  title: string
  lecturer: string,
  section: string

}

const lectureSchema = new mongoose.Schema({
  title: String,
  lecturer:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: false
      }
  ],
  section : { type : Array , "default" : [] }
 
})

export default mongoose.model<LectureDocument>('Lecture', lectureSchema)
