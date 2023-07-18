const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./connection");
const User = require("./model/user");
const routes = require("./routes");
app.use('/api',routes);
const {PORT} = require('./config');
const errorHandler = require("./middlewares/errorHandler");

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
})

