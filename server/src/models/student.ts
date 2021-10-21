import { Schema, model } from "mongoose";
export interface Student {
  // _id: string;
  email: string;
  firstName: string;
  lastName: string;
}

const StudentSchema = new Schema({
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

export const StudentModel = model<Student>("Student", StudentSchema);
