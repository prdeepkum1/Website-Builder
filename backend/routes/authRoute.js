import * as authController from "../controllers/authController.js";
import {Router } from "express"

const authRouter = Router();

authRouter.post("/google", authController.googleAuth)
authRouter.get("/logout", authController.logoutUser)

export default authRouter;