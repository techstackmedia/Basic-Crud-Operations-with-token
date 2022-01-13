const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
