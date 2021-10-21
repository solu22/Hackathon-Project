import { Schema, model } from "mongoose";
export interface Teacher {
  email: string;
  firstName: string;
  lastName: string;
}

const TeacherSchema = new Schema({
  email: {
    type: String,
  },

  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
});

export const TeacherModel = model<Teacher>("Teacher", TeacherSchema);
