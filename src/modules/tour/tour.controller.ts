import { Request, RequestHandler, Response } from "express";
import { tourServices } from "./tourService";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createTour:RequestHandler = catchAsync(async(req:Request,res:Response)=>{
    const payload = req.body;
    const result = await tourServices.createTourInDb(payload);
    sendResponse(res,{
        status:true,
        message:"Tour created successfully",
        data:result
    })
    })
const getTours:RequestHandler = catchAsync(async(req:Request,res:Response)=>{
    const result = await tourServices.getToursInDb();
    sendResponse(res,{
        status:true,
        message:"Tour created successfully",
        data:result
    })
    })


    export const tourController  ={
        createTour,
        getTours
    }