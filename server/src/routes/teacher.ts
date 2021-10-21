import express from 'express'

import {signin, signup} from '../controller/teacher'

const router = express.Router()

router.post('/', signin)
router.post('/signup', signup)

export default router