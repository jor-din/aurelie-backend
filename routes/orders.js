import { Router } from "express";
import * as orderCtrl from '../controllers/orders.js'
import { isAuth } from "../utils.js";

const router = Router()

router.post('/',isAuth, orderCtrl.newOrder)

export {router}