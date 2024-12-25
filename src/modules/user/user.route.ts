import express from 'express'
import { userController } from './user.controller'
export const userRouter = express.Router();

userRouter.post('/',userController.createUser)
userRouter.get('/',userController.findUser)
userRouter.get('/:id',userController.getSingleUser)