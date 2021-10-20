import mongoose, { Schema } from 'mongoose'

export interface Lecture {
  _id?: string
  Lecturer: string
  Sections: {
    _id: string
    quantity: number
  }[]
}

const LectureSchema = new Schema({
  Lecturer: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher',
  },

  Sections: [
    {
      Section: {
        type: Schema.Types.ObjectId,
        ref: 'Section',
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],

  
})

export const LectureModel = mongoose.model<Lecture>('Lecture', LectureSchema)
