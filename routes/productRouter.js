import { Router } from 'express'
import * as controller from '../controllers/productControllers.js'

 const router = Router();

router.get("/", controller.getAllProducts);
router.get("/:id", controller.getSingleProducts);
router.post("/", controller.createSingleProducts);

export default router
