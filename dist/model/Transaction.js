"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const transactionSchema = new mongoose_1.default.Schema({
    reference: {
        type: String,
        unique: true,
    },
    senderAccount: {
        type: Number,
    },
    amount: {
        type: Number,
    },
    receiverAccount: {
        type: Number,
    },
    transferDescription: {
        type: String,
    },
}, { timestamps: true });
module.exports = mongoose_1.default.model("Transaction", transactionSchema);
