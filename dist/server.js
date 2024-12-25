"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const port = 5001;
function run() {
    mongoose_1.default.connect("mongodb+srv://tour-user:7CsDwbhVYqK5PMcr@cluster0.0wvo3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    app_1.default.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}
run();
// tour-user
// 7CsDwbhVYqK5PMcr
