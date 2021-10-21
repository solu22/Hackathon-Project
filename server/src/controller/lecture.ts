import { Request, Response, NextFunction } from 'express';

import Lecture from '../models/lecture';

const getAllLectures = async (req: Request, res: Response) => {
  try {
    const lectures = await Lecture.find();
    res.status(200).send(lectures);
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

const createLecture = async (req: Request, res: Response) => {
  const { title, teacher } = req.body;
  try {
    const newLecture = new Lecture({
      title,
      teacher,
    });
    const save = await newLecture.save();
    res.status(200).send(save);
  } catch (error) {
    res.status(500).send({ message: 'internal server error' });
  }
};

const addKCtoLecture = async (req: Request, res: Response) => {
  const { kcId, lectureId } = req.body;
  try {
    const lecture = await Lecture.findById(lectureId);
    lecture.KC.push(kcId);
    const save = await lecture.save();
    res.status(200).send(save);
  } catch (errror) {
    res.status(500).send({ message: 'internal server error' });
  }
};

const addStudentToLecture = async (req: Request, res: Response) => {
  const { lectureId, studentId } = req.body;
  try {
    const lecture = await Lecture.findById(lectureId);
    lecture.student.push(studentId);
    const save = await lecture.save();
    res.status(200).send(save);
  } catch (error) {
    res.status(401).send({ message: 'lecture not found' });
  }
};
const addTeacherToLecture = async (req: Request, res: Response) => {
  const { lectureId, teacherId } = req.body;
  try {
    const lecture = await Lecture.findById(lectureId);
    lecture.teacher.push(teacherId);
    const save = await lecture.save();
    res.status(200).send(save);
  } catch (error) {
    res.status(401).send({ message: 'lecture not found' });
  }
};

const updateLecture = async (req: Request, res: Response) => {
  const { lectureId, teacher, student, KC } = req.body;
  try {
    const lecture = await Lecture.findByIdAndUpdate(lectureId, { teacher, student, KC });
    res.status(200).send(lecture);
  } catch (error) {
    res.status(401).send({ message: 'lecture not found' });
  }
};

export { getAllLectures, createLecture, addKCtoLecture, addStudentToLecture, addTeacherToLecture, updateLecture };
