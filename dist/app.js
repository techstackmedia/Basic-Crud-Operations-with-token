"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const morgan = require("morgan");
const user = require("./routes/user");
const userID = require("./routes/userID");
require("./database/config/config");
if (app.get("env")) {
    app.use(morgan("dev"));
}
app.use(express_1.default.json());
app.use("/", user);
app.use("/balance", userID);
module.exports = app;
