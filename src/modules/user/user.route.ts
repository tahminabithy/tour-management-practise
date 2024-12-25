import express from 'express'
import { userController } from './user.controller'
import verifyToken from '../../middleware/verifyToken';
export const userRouter = express.Router();

userRouter.post('/',userController.createUser)
userRouter.get('/',verifyToken(),userController.findUser)
userRouter.get('/:id',userController.getSingleUser)