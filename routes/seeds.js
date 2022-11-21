import { Router } from "express";
import * as productsCtrl from '../controllers/products.js'

const router = Router()

router.get('/', productsCtrl.createdProduct)

export { router }