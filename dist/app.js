"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("./modules/user/user.route");
const http_status_codes_1 = require("http-status-codes");
const tour_route_1 = require("./modules/tour/tour.route");
const booking_route_1 = require("./modules/booking/booking.route");
const app = (0, express_1.default)();
// json perser middleware
app.use(express_1.default.json());
// route middleware
app.use("/v1/", user_route_1.userRouter);
app.use("/v1", tour_route_1.routerTour);
app.use("/v1", booking_route_1.bookingRouter);
app.get("/", (req, res) => {
    res.send({
        message: "Welcome to the API",
        status: 200,
    });
});
app.use((err, req, res, next) => {
    console.log("global error handler", err);
    res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: false,
        message: err.message,
        error: err,
    });
    next();
});
exports.default = app;
