import express from "express";
const router = express.Router();
import UserController from "../controllers/userController.js";

//rendering home page
router.get("/", UserController.home);

//rendering registration page
router.get("/registration", UserController.registration);

//after submiting registration page data store in database
router.post("/registration", UserController.createUserDoc);

//rendering login page
router.get("/login", UserController.login);
router.post("/login", UserController.verifyLogin);

export default router;
