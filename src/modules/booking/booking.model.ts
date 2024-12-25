import { model, Schema } from "mongoose";
import { Tbooking } from "./booking.interface";

const bookingSchema= new Schema<Tbooking>({
    user:{
        type:Schema.Types.ObjectId,
        ref:"user",
        required:[true,"user is required"]
    },
    tour:{
        type:Schema.Types.ObjectId,
        ref:"tour",
        required:[true,"tour is required"]
    },
    bookedSlots:{
        type:Number,
        required:[true,"bookedSlots is required"]
    },
   bookingStatus:{
        type:String,
        enum:["pending","paid","cancelled"],
        default:"pending"
   },
    totalPrice:{
        type:Number,
        required:[true,"totalPrice is required"]
    }
},
{
    timestamps:true
})

export const bookingModel= model("booking",bookingSchema)