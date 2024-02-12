
import express from 'express';
const router = express.Router();

import {homeController} from '../controllers/homeController.js';
import {aboutController} from '../controllers/aboutController.js';


router.get('/',homeController);
router.get('/about', aboutController);

router.get('/about/12', (req,res) => {
    res.send('/about/12');
})



export default router;
