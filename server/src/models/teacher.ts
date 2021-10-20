import mongoose, { Document } from 'mongoose'

export type TeacherDocument = Document & {
  email: string
  firstName: string
  lastName: string
}

const teacherSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    index: true,
  },

  firstName: {
    type: String,
    required: true,
    index: true,
  },
  lastName: {
    type: String,
    required: true,
    index: true,
  },
 
})

export default mongoose.model<TeacherDocument>('Teacher', teacherSchema)