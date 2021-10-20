import mongoose, { Document } from 'mongoose'

export type KCDocument = Document & {
  description: string
  alternatives: {
    text: string,
    isCorrect: boolean
  }[],
  subjects: String
}

const QuestionSchema = new mongoose.Schema({
  description: String,
  alternatives: [
      {
          text: {
              type: String,
              required: true
          },
          isCorrect: {
              type: Boolean,
              required: true,
              default: false
          }
      }
  ],
  subjects: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Lecture',
      required: false
  }]
})

export default mongoose.model<KCDocument>('Question', QuestionSchema)






















