import express from 'express'
import dotenv from 'dotenv'

import studentRouter from './routes/student'
import loginRouter from './routes/login'
import kcRouter from './routes/kc'
import lectureRouter from './routes/lecture'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.use(express.json())

// Routes
app.use('/api/students', studentRouter)
app.use('/api/login', loginRouter)
app.use('/api/kc', kcRouter)
app.use('api/lecture', lectureRouter)

// Custom API error handler

export default app