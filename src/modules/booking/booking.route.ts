import { Router } from "express";
import { bookingController } from "./booking.controller";

export const bookingRouter = Router();

//create booking
//get all bookings
//get single booking
//update booking
//delete booking
//get all bookings of a user

bookingRouter.post('/create-booking',bookingController.createBooking)