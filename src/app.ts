import express from "express";
import { userRouter } from "./modules/user/user.route";
import { routerTour } from "./modules/tour/tour.route";
import { bookingRouter } from "./modules/booking/booking.route";
import { authRouter } from "./modules/auth/auth.router";
import { globalErrorHandler } from "./middleware/globalErrorHandler";

const app = express();
// json perser middleware
app.use(express.json());

// route middleware
app.use("/v1/", userRouter);
app.use("/v1", routerTour);
app.use("/v1", bookingRouter);
app.use("/v1", authRouter);
app.use(globalErrorHandler);

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the API",
    status: 200,
  });
});
//if mistakenly hit the wrong route
app.use("*", (req, res) => {
  res.status(404).send({
    status: 404,
    message: "resource not found",
  });
});
export default app;
