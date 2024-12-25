import { Request,Response } from "express"
import { authService } from "./auth.service"
import sendResponse from "../../utils/sendResponse"
import { StatusCodes } from "http-status-codes"
import catchAsync from "../../utils/catchAsync"

const registerUser = catchAsync(async (req:Request,res:Response)=>{
    const result = await authService.registerUserInDb(req.body)
    sendResponse(res,{
       status: true,
       statusCode:StatusCodes.CREATED,
       message:"user registered successfully",
       data:result
    })
   })

   const login =catchAsync(async(req:Request,res:Response)=>{
    const result = await authService.loginUser(req.body);
    sendResponse(res,{
        status:true,
        statusCode:StatusCodes.OK,
        message:"user logged in successfully",
        data:result.remainingData
    })
   })


   export const authController ={
    registerUser,
    login
}
