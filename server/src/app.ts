import express from 'express'
import dotenv from 'dotenv'

import studentRouter from './routes/student'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.use(express.json())

// Routes
app.use('/api/v1/student', studentRouter)

// Custom API error handler

export default app