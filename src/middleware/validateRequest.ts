import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";

const validateRequest=(schema:AnyZodObject)=>{
return catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    schema.parseAsync(req.body); //schema.parseAsync(req.body) is used to validate data asynchronously using a predefined schema.
    next()
})

}
export default validateRequest;

