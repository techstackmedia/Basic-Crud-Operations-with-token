const express = require("express");

const app = express();
const morgan = require("morgan");
const user = require("./routes/user");
const userID = require("./routes/userID");

require("./database/config/config");

if (app.get("env")) {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use("/", user);
app.use("/balance", userID);

module.exports = app;
