import mongoose, { Document } from 'mongoose'

export type StudentDocument = Document & {
  firstName: string
  lastName: string
  email: string
}

const studentSchema = new mongoose.Schema({
  
  firstName: String,
  lastName: String,
  email:{
    type: String,
    required:true
  }
})

export default mongoose.model<StudentDocument>('Student', studentSchema)