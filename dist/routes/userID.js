"use strict";
const express = require("express");
const verify = require("../database/config/verifyToken");
const router = express.Router();
const { getBalanceByAccNum, getBalanceByID, getTransactionByAccNum, getTransactionCreditByAccNum, getTransactionDebitByAccNum, } = require("../controllers/controllers");
router
    .route("/:accountNumber", verify)
    .get(getBalanceByAccNum)
    .get(getBalanceByID)
    .get(getTransactionByAccNum)
    .get(getTransactionCreditByAccNum)
    .get(getTransactionDebitByAccNum);
module.exports = router;
