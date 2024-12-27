"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./modules/user/user.route");
const tour_route_1 = require("./modules/tour/tour.route");
const booking_route_1 = require("./modules/booking/booking.route");
const auth_router_1 = require("./modules/auth/auth.router");
const globalErrorHandler_1 = require("./middleware/globalErrorHandler");
const app = (0, express_1.default)();
// json perser middleware
app.use(express_1.default.json());
// route middleware
app.use("/v1/", user_route_1.userRouter);
app.use("/v1", tour_route_1.routerTour);
app.use("/v1", booking_route_1.bookingRouter);
app.use("/v1", auth_router_1.authRouter);
app.use(globalErrorHandler_1.globalErrorHandler);
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
exports.default = app;
