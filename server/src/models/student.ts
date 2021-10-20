import mongoose, { Document } from 'mongoose'

export type StudentDocument = Document & {
  name: string
}

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  }
})

export default mongoose.model<StudentDocument>('Student', studentSchema)