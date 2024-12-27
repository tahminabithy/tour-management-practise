import express from 'express'
import { userController } from './user.controller'
import verifyToken from '../../middleware/verifyToken';
import validateRequest from '../../middleware/validateRequest';
import { zodValidation } from './user.validation';
export const userRouter = express.Router();

userRouter.post('/',validateRequest(zodValidation.userValidationSchema),userController.createUser)
userRouter.get('/',verifyToken(),userController.findUser)
userRouter.get('/:id',userController.getSingleUser)