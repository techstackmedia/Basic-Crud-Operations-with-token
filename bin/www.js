const dotenv = require("dotenv");

dotenv.config();
const debug = require("debug");

const log = debug("app:log");
const app = require("../app");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  log(`Server running on port ${port}`);
});
