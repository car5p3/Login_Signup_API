import { Router } from "express";
import { forgotPassword, login, logout, resetPassword, signup, verifyEmail } from "../controllers/auth.controller.js";
import { protect } from "../middlewares/isLoggedIn.js";

const router = Router();

router.post('/signup', signup);
router.post('/login', login)
router.post('/verify-email', protect, verifyEmail);
router.post('/forgot-password', protect, forgotPassword);
router.post('/reset-password/:token', protect, resetPassword);
router.post('/logout', protect, logout);

export default router;