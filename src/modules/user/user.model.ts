import mongoose, { model, Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        trim:true,
    },
    age:{
        type:Number,
        required:[true,"age is required"],
        trim:true,
        min:[18,"age must be greater than 18"]
    },
    photo:{
        type:String,
        trim:true,
    },
    role:{
        type:String,
        enum:["Traveller","Admin"],
        default:"Traveller"
    },
    status:{
        type:String,
        enum:["Active","Inactive"],
        default:"Active"
    },


},
{
    timestamps:true
})
//creating model for database
export const userModel = model("user",userSchema)

userSchema.pre("find",function(this,next){
this.find({status:{$eq:"active"}});
next();
})