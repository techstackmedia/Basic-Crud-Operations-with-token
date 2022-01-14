"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const controller = require("../controllers/controllers");
const { postSignup, postLogin, postCreatedAcc, getBalance, postTransfer } = controller;
router.route("/signup").post(postSignup);
router.route("/login").post(postLogin);
router.route("/create-account").post(postCreatedAcc);
router.route("/balance").get(getBalance);
router.route("/transfer").post(postTransfer);
module.exports = router;
