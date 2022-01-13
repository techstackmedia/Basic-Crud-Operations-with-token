const dotenv = require("dotenv");

dotenv.config({ path: "./bin/.env" });
const mongoose = require("mongoose");
const debug = require("debug");

const db = debug("app:db");

module.exports = mongoose
  .connect(
    `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.n5uqo.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`
  )
  .then(() => db("Database connection successful..."))
  .catch((err) => db("Unable to connect to database", err));
