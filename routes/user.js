const express = require("express");
const verify = require("../database/config/verifyToken");

const router = express.Router();
const controller = require("../controllers/controllers");

const { postSignup, postLogin, postCreatedAcc, getBalance, postTransfer } =
  controller;

router.route("/signup").post(postSignup);
router.route("/login").post(postLogin);
router.route("/create-account", verify).post(postCreatedAcc);
router.route("/balance").get(getBalance);
router.route("/transfer").post(postTransfer);

module.exports = router;
