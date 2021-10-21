import express from 'express';
import {
  addKCtoLecture,
  addStudentToLecture,
  addTeacherToLecture,
  createLecture,
  getAllLectures,
  updateLecture,
} from '../controller/lecture';
const lecture = express.Router();

lecture.get('/all', getAllLectures);
lecture.post('/create-lecture', createLecture);
lecture.put('/add-kc', addKCtoLecture);
lecture.put('/add-student', addStudentToLecture);
lecture.put('/add-teacher', addTeacherToLecture);
lecture.put('/update-lecture', updateLecture);

export { lecture };
