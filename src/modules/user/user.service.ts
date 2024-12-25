import Tuser from "./user.interface";
import { userModel } from "./user.model";

const createUserInDb =async (value:Tuser) =>{
const result = await userModel.create(value);
return result;
}
const findUserInDb = async()=>{
const result = await userModel.find();
const generatedIsd = (10).toString().padStart(4,'0').substring(4,6)  // 0010
return result;
}
const getSingleUserInDb= async(id:string)=>{
    const result = await userModel.findById(id);
    if(!result){
        throw new Error("User not found")
    }
    return result;
}

export const userServices ={
    createUserInDb,
    findUserInDb,
    getSingleUserInDb
}