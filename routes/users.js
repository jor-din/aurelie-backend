import { Router } from 'express'
import * as usersCtrl from '../controllers/users.js'
import expressAsyncHandler from "express-async-handler";



const router = Router()

router.post('/signin', expressAsyncHandler(usersCtrl.signin))
router.post('/signup', expressAsyncHandler(usersCtrl.signup))

export { router }