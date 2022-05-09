const express = require("express");
const userRouter = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
// const loginUser = require("../models/userModel");
userRouter.get("/show", (req, res, next) => {
  // This will return all the data, exposing only the id and action field to the client
  User.find()
    .then((data) => res.json(data))
    .catch(next);
});

userRouter.post("/create", (req, res, next) => {
  console.log("Request body", req.body);
  if (req.body) {
    User.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: "The input field is empty",
    });
  }
});
 userRouter.post("/verify", async(req, res, next) => {
  // uname pwd
  if (req.body) {
  console.log("Request body for verfity", req.body);
const data =await User.findOne({username: req.body.username})
console.log("User.findOne",data, req.body.password)
console.log("Data as ", data.password , req.body.password)
bcrypt.compare(req.body.password, data.password, function (error, isMatch) {
  if (error) {
    res.json({
      error: "The not mathgn empty",
    });
    console.log("ismatch", isMatch);
  } else {
   res.json({sucess:true})
  }
}) }
   else {
    console.log("error occured")
   res.json({error: true})

  }
});

module.exports = userRouter;


