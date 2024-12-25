import mongoose from "mongoose";
import { tourModel } from "../tour/tour.model";
import { Tbooking } from "./booking.interface";
import { bookingModel } from "./booking.model";

const createBookingInDb= async(payload:Tbooking)=>{
    const session = await mongoose.startSession(); //creating sessoion
    session.startTransaction(); //session start
    try{
        const tour = await tourModel.findById(payload.tour); //finding tour
        if(!tour){
            throw new Error("Tour not found")
        }
            payload.totalPrice=tour.price*payload.bookedSlots, //calculating total price
            payload.bookingStatus="pending"
        
        if(payload.bookedSlots > tour.availableSeats){
            throw new Error("Seats not available")
        }
        const result = await bookingModel.create([payload],{session}); //creating booking
        console.log(result)
        const updateTourSlots = await tourModel.findByIdAndUpdate(result[0].tour,{$inc:{
            availableSeats:-payload.bookedSlots}},{new:true})
        if(!updateTourSlots){
            throw new Error("availableSlots not updated")
        }
        await session.commitTransaction();
        session.endSession();
        return result[0];
    }
    catch(error){
       await session.abortTransaction();
         session.endSession();
            throw error;
    }

}
export const bookingServices={
    createBookingInDb,
}