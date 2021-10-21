import mongoose, { Document } from 'mongoose';

const LectureSchema = new mongoose.Schema({
  title: {
    type: String,
    index: true,
  },

  teacher: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Teacher',
    },
  ],

  student: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Student',
    },
  ],

  KC: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'KC',
    },
  ],
});

export default mongoose.model('Lecture', LectureSchema);
