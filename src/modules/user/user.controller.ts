import { NextFunction, Request, RequestHandler, Response } from "express";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import {
	StatusCodes,
} from 'http-status-codes';
import catchAsync from "../../utils/catchAsync";


const createUser= catchAsync(async(req:Request,res:Response)=>{
    const payload = req.body;
    const result = await userServices.createUserInDb(payload);
    const response ={
        status:true,
        statusCode:StatusCodes.CREATED,
        message:"User created successfully",
        data:result
    }
    sendResponse(res,response)
});




// try{
//     const payload = req.body;
//     const result = await userServices.createUserInDb(payload);
//     const response ={
//         status:true,
//         statusCode:StatusCodes.CREATED,
//         message:"User created successfully",
//         data:result
//     }
//     sendResponse(res,response);
//  }
//  catch(err: any){
//  next(err)
//  }
const findUser:RequestHandler = catchAsync(async(req:Request,res:Response)=>{
       const result = await userServices.findUserInDb();
       const response= {
           status:true,
           message:"Users are found successfully",
           data:result
       }
       sendResponse(res,response);
   })
const getSingleUser:RequestHandler= catchAsync(async(req:Request,res:Response)=>{
    const id = req.params.id;
    const result = await userServices.getSingleUserInDb(id);
    const response ={
        status:true,
        message:"User found successfully",
        data:result
    }
    sendResponse(res,response);
    })

export const userController ={
    createUser,
    findUser,
    getSingleUser,
}