import express from 'express'

import {findAll, create} from '../controller/student'

const router = express.Router()

router.get('/', findAll)
router.post('/', create)

export default router