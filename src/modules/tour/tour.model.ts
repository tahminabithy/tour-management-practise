import { model, Schema } from "mongoose";
import { Ttour } from "./tour.interface";

const tourSchema =new Schema<Ttour>({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
    },
    description:{
        type:String,
        required:[true,"description is required"],
        trim:true,
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        trim:true,
    },
    duration:{
        type:Number,
        required:[true,"days is required"],
        trim:true,
    },
    location:{
        type:String,
        required:[true,"location is required"],
        trim:true,
    },
    seats:{
        type:Number,
        required:[true,"seats is required"],
        trim:true,
    },
    availableSeats:{
        type:Number,
        required:[true,"availableSeats is required"],
        min:[0,"availableSeats must be greater than 0"],
        trim:true,
    },
    rating:{
        type:Number,
        required:[true,"rating is required"],
        trim:true,
    }
},
{
timestamps:true
}
)

export const tourModel = model("tour",tourSchema)