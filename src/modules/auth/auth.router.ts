import { Router } from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../middleware/validateRequest";
import { zodValidation } from "../user/user.validation";

export const authRouter = Router();

authRouter.post('/resgister',validateRequest(zodValidation.userValidationSchema), authController.registerUser )
authRouter.post('/login',authController.login)