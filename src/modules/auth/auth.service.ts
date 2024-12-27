
import Tuser from "../user/user.interface"
import { userModel } from "../user/user.model"
import authUser from "./auth.interface";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const registerUserInDb = async(data:Tuser)=>{
 const result = await userModel.create(data);
 return result 
}
const loginUser = async(data:authUser)=>{
    const user = await userModel.findOne({email:data.email}).select("+password") // as by default its not returning any password field becaus eof select =false in model
    if(!user){
        throw new Error("user not found");
    }
    // const isPasswordMatch = await bcrypt.compare(data.password,user.password)
    // if(!isPasswordMatch){
    //     throw new Error("password not match");
    // }
    const token = jwt.sign({email:user.email,role:user.role},"secret",{expiresIn:"1d"})
    const  remainingData={
        email:user.email,
        name:user.name,
        role:user.role,
        token:token
    } // excluding password from ther user for the response
    return {
        remainingData
    }
}
export const authService = {
    registerUserInDb,
    loginUser
}