const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("./connection");
const User = require("./model/user");
app.use(express.json());

app.post("/", async (req, res) => {
  const { password, cpassword } = req.body;
  if (password == cpassword) {
    const result = await User.create(res.body);
    res.status(201).json({"msg":"user created !",result});
  } else {
    res.status(400).json({"msg":"password does not matched !"});
  }
});

app.listen(5000, () => {
  console.log(`server is running on 5000 port`);
})
