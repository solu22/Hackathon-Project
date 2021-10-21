import {
  createLecture,
  getallLectures,
  getallQuestionsbyLectureId,
} from "./../controller/Lecture";

import express from "express";
const router = express.Router();

//creates a new lecture
router.post("/lecture", createLecture);

//get all subjects
router.get("/subject", getallLectures);

//get all questions from a specific subject
router.get("/question/lecture/:id", getallQuestionsbyLectureId);

export default router;
