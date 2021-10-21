import mongoose, { Schema } from "mongoose";

export interface Lecture {
  Lecturer: string;
  Sections: {
    title: string;
    descriptions: string;
  }[];
}

const LectureSchema = new Schema({
  Lecturer: {
    type: Schema.Types.ObjectId,
    ref: "Teacher",
  },

  Sections: [
    {
      title: {
        type: String,
      },
      descriptions: {
        type: String,
      },
    },
  ],
});

export const LectureModel = mongoose.model<Lecture>("Lecture", LectureSchema);
