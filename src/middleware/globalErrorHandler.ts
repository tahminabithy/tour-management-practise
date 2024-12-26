import { StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";



type TerrorResponse={
    status:boolean,
    message:string,
    error:string,
}
// error hadler middleware

//validation error
export const globalErrorHandler=((err:any,req:Request,res:Response,next:NextFunction)=>{
    console.log("global error handler",err);
    if (err.name && err.name === "ZodError") {
        res.status(StatusCodes.BAD_REQUEST).json({
            status:false,
            message:err.message,
            error:err
          })
    }
   else if(err instanceof mongoose.Error.ValidationError){
        res.status(StatusCodes.BAD_REQUEST).json({
            status:false,
            name:err.name,
            message:err.message,
            error:err
          })
    }
   
    //cast error
    else if( err instanceof mongoose.Error.CastError){
        res.status(StatusCodes.BAD_REQUEST).json({
            status:false,
            message:err.message,
            error:err
          })
    }
    //duplicate error handle
    else if(err.code.code && err.code === 11000){
        res.status(StatusCodes.CONFLICT).json({
            status:false,
            message:err.errorResponse.errmsg,
            error:err
        })
    }
    //generic error
    else if(err instanceof Error){
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            status:false,
            message:err.message,
            error:err
          })
    }

    // else{
    //     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //         status:false,
    //         message:"something went wrong",
    //         error:err
    //       })    
    // }
      
      next();
    })





//duplicate error
//validation error
//cast error
//jwt error
//zod error
//generic error ---> An HTTP 500 status code (Internal Server Error) is a generic error response when the server encounters an unexpected issue but doesn't specify the cause.