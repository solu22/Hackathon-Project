import mongoose, { Document } from 'mongoose';

const KCSchema = new mongoose.Schema({
  questions: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Question',
    },
  ],
  lecture: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Lecture',
    },
  ],
});

export default mongoose.model('KC', KCSchema);
