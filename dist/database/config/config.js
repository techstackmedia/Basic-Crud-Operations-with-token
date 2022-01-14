"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
// dotenv.config();
const mongoose_1 = __importDefault(require("mongoose"));
const debug = require("debug");
const db = debug("app:db");
module.exports = mongoose_1.default
    .connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.n5uqo.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`)
    .then(() => db("Database connection successful..."))
    .catch((err) => db("Unable to connect to database", err));
