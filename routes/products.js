import { Router } from "express";
import * as productsCtrl from '../controllers/products.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
/* Public Routes*/
const router = Router()
router.use(decodeUserFromToken)
/* Protected Routes */
router.get('/',productsCtrl.index)

export { router }