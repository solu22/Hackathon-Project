import express from 'express';
import dotenv from 'dotenv';

import studentRouter from './routes/student';
import teacherRouter from './routes/teacher';
import { lecture } from './routes/lecture';
import { question } from './routes/question';
import { kcRouter } from './routes/kc';

dotenv.config({ path: '.env' });
const app = express();

// Express configuration
app.use(express.json());

// Routes
app.use('/api/v1/student', studentRouter);
app.use('/api/v1/teacher', teacherRouter);
app.use('/api/v1/lecture', lecture);
app.use('/api/v1/kc', kcRouter);
app.use('/api/v1/question', question);

// Custom API error handler

export default app;
