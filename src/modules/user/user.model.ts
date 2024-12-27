import mongoose, { model, Schema } from "mongoose";
import bcrypt from "bcrypt";
import config from "../../config";
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
        select:false //when you query the database for a user, the password field will not be included in the response unless explicitly requested.
    },
    age:{
        type:Number,
        // required:[true,"age is required"],
        trim:true,
        min:[18,"age must be greater than 18"],
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
//--------------------------------------------

userSchema.pre("save",async function (this,next){
console.log(config.salt_round);
this.password= await bcrypt.hash(this.password, Number(config.salt_round) )
console.log("encrypt pass",this.password);
next();
})

userSchema.post('save',function(doc,next){
   doc.password='';
    next();
})
userSchema.pre("find",function(this,next){
this.find({status:{$eq:"active"}});
next();
})


// the select option is used to control whether a field is included or excluded from query results by default.