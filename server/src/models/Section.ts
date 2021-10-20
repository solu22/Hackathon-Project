import mongoose, { Schema } from 'mongoose';

export interface Section {
  _id?: string;
  lecture: string;
  knowledgechecks: {
    _id: string;
    quantity: number;
  }[];
  
}

const SectionSchema = new Schema({
  lecture: {
    type: Schema.Types.ObjectId,
    ref: 'Lecture',
  },

  knowledgechecks: [
    {
      knowledgecheck: {
        type: Schema.Types.ObjectId,
        ref: 'KnowledgeCheck',
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  
});

export const SectionModel = mongoose.model<Section>('Section', SectionSchema);