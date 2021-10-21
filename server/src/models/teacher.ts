import mongoose, { Document } from 'mongoose';

const TeacherSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  },
  email: {
    type: String,
    required: true,
  },
  lecture: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Lecture',
    },
  ],
});

export default mongoose.model('Teacher', TeacherSchema);
