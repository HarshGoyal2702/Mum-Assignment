import express from "express";
import { registerUser, loginUser, logout, userInfo } from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.route("/info").get(isAuthenticated, userInfo);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);

export default router;