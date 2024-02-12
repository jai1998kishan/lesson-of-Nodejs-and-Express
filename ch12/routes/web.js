import  express  from "express";
const router = express.Router();

import { HomeController } from "../controllers/homeController.js";
import { aboutController } from "../controllers/aboutController.js";



router.get('/', HomeController);
router.get('/about',aboutController);

export default router;