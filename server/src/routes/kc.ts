import express from 'express'

import {findAll, create, findOne, update, remove} from '../controller/kc'

const router = express.Router()

router.get('/', findAll)
router.get('/:id', findOne)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router