import { Router } from "express"

import { store } from "../controllers/expedition-controller.js"

const router = Router()

router.post("/", store)

export default router