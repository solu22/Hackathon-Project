import express from 'express'
import dotenv from 'dotenv'

import studentRouter from './routes/student'
import loginRouter from './routes/login'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.use(express.json())

// Routes
app.use('/api/students', studentRouter)
app.use('/api/login', loginRouter)

// Custom API error handler

export default app