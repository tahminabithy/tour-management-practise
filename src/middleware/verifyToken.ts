import { Request,NextFunction, Response } from "express"
import catchAsync from "../utils/catchAsync"
import jwt from "jsonwebtoken"

const verifyToken = ()=>{
    return catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
        console.log(req.headers)
        const token = req.headers.authorization
        if(!token){
            throw new Error("token not found")
        }
    const decoded = jwt.verify(token,"secret");
    console.log(decoded);
    next()
    })
}
export default verifyToken;