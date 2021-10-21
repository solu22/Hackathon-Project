import mongoose, { Document } from 'mongoose';

const studentSchema = new mongoose.Schema({
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

export default mongoose.model('Student', studentSchema);
