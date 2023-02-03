import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'


const router = Router()

router.post('/signin', usersCtrl.signin)
router.post('/signup', usersCtrl.signup)

export { router }