import mongoose from 'mongoose';

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    index: true,
  },

  options: [
    {
      type: String,
      required: true,
    },
  ],

  answer: {
    type: String,
    required: true,
  },

  KC: {
    type: mongoose.Types.ObjectId,
    ref: 'KC',
  },
});

export default mongoose.model('Question', QuestionSchema);
