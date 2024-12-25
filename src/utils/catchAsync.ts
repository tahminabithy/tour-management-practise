import { NextFunction, Request, Response } from "express";


//higher order function
function catchAsync(fn: Function) {
return (req:Request,res:Response,next:NextFunction)=>{
    Promise.resolve(fn(req,res,next)).catch((error)=>next(error));
}
}
export default catchAsync;