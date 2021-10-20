import mongoose, { Schema } from 'mongoose'

export interface KnowledgeCheck {
  _id?: string
  Section: string
  question: string
  options: {
    answers: string
    quantity: number
  }[]
  correctanswer: string
}

const KnowledgeCheckSchema = new Schema({
  section: {
    type: Schema.Types.ObjectId,
    ref: 'Section',
  },

  question: {
    type: String,
    required: true,
  },

  options: [
    {
      answers: {
        type: String,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  correctanswer: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    index: true,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },
})

export const KnowledgeCheckModel = mongoose.model<KnowledgeCheck>(
  'KnowledgeCheck',
  KnowledgeCheckSchema
)
