import { Request, RequestHandler, Response } from "express";
import { bookingServices } from "./booking.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";

const createBooking:RequestHandler= catchAsync(async(req:Request,res:Response)=>{
    const payload = req.body;
    const result = await bookingServices.createBookingInDb(payload);
    sendResponse(res,{
          status:true,
          message:"Booking created successfully",
          data:result
    })
 })

 export const bookingController ={
    createBooking,
 }