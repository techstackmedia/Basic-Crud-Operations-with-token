const mongoose = require("mongoose");

const balanceSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Balance", balanceSchema);
