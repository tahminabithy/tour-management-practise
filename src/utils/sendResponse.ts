import { Response } from "express";

interface responseData<T>{
    status:boolean,
    statusCode?:number,
    message:string,
    data:T|T[]
}
const sendResponse =<T>(res:Response,data:responseData<T>)=>{
    res.status(201).send({
        status:data.status,
        statusCode:data.statusCode,
        message:data.message,
        data:data.data
    })
}
export default sendResponse;