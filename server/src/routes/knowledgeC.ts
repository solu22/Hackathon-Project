import { findAll, postQuiz, deleteQuiz } from "../controller/knowledgeC";
import express from "express";
const router = express.Router();

//import KnowledgeCheckModel from '../models/KnowledgeCheck'; // includes our model

// get all quiz questions
router.get("/questions", findAll);

//post quiz
router.post("/questions", postQuiz);

// delete one quiz question
router.delete("/questions/:id", deleteQuiz);

export default router;
