const express = require("express");

const router = express.Router();
const {
  getBalanceByAccNum,
  getBalanceByID,
  getTransactionByAccNum,
  getTransactionCreditByAccNum,
  getTransactionDebitByAccNum,
} = require("../controllers/controllers");

router
  .route("/:accountNumber")
  .get(getBalanceByAccNum)
  .get(getBalanceByID)
  .get(getTransactionByAccNum)
  .get(getTransactionCreditByAccNum)
  .get(getTransactionDebitByAccNum);

module.exports = router;
