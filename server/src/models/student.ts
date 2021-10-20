import mongoose, { Document } from 'mongoose'

export type StudentDocument = Document & {
  name: string
  email: string
}

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  email:{
    type: String,
    required:true
  },
  passwordHash: String
})

export default mongoose.model<StudentDocument>('Student', studentSchema)