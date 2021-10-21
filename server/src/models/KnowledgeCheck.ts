import { Lecture } from "./Lecture";
import mongoose, { Schema } from "mongoose";

export interface KnowledgeCheck {
  Test: string;
  options: {
    answers: string;
  }[];
  isCorrect: boolean;
  lectures: string;
}

const KnowledgeCheckSchema = new Schema({
  Test: {
    type: String,
    required: true,
  },

  options: [
    {
      answers: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],

  lectures: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecture",
    required: false,
  },
});

export const KnowledgeCheckModel = mongoose.model<KnowledgeCheck>(
  "KnowledgeCheck",
  KnowledgeCheckSchema
);
