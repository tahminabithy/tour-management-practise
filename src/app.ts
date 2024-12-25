import  express, { ErrorRequestHandler, NextFunction, Request, Response }  from "express"
import { userRouter } from "./modules/user/user.route"
import { StatusCodes } from "http-status-codes";
import { routerTour } from "./modules/tour/tour.route";
import { bookingRouter } from "./modules/booking/booking.route";
import { authRouter } from "./modules/auth/auth.router";

const app = express()
app.use(express.json());


app.use('/v1/', userRouter)
app.use('/v1', routerTour)
app.use('/v1', bookingRouter)
app.use('/v1', authRouter)

app.get('/',(req,res)=>{
 res.send({
    message:"Welcome to the API",
    status:200
 })
});
app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
console.log("global error handler",err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status:false,
    message:err.message,
    error:err
  })
  next();
})

export default app 

