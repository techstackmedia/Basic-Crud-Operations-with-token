"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const balanceSchema = new mongoose_1.default.Schema({
    account: {
        type: Number,
        unique: true,
    },
    balance: {
        type: Number,
        default: 5000,
        min: 100000000,
        max: 9999999999,
    },
    userId: {
        type: String,
    },
}, { timestamps: true });
module.exports = mongoose_1.default.model("Balance", balanceSchema);
