import express from 'express'

import {findAll} from '../controller/student'

const router = express.Router()

router.get('/', findAll)

export default router