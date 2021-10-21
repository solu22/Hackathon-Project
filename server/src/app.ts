import express from "express";
import dotenv from "dotenv";

import StudentRouter from "./routes/student";
import QuizRouter from "./routes/knowledgeC";
import LectureRouter from "./routes/lecture";
import TeacherRouter from "./routes/teacher";
dotenv.config({ path: ".env" });
const app = express();

// Express configuration
app.use(express.json());

// Routes
app.use("/api/v1/student", StudentRouter);
app.use("/api/v1/teacher", TeacherRouter);
app.use("/api/v1/quiz", QuizRouter);
app.use("/api/v1/lectures", LectureRouter);

// Custom API error handler

export default app;
