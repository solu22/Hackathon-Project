import express from 'express'
import { login } from '../controller/teacherLogin'

const router = express.Router()
router.post('/', login)

export default router