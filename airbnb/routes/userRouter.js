const express = require("express");

const userRouter = express.Router();

userRouter.get("/", (req, res, next) => {
  res.send(`
    <h1>Welcome to Airbnb Clone Application</h1>
    <a href="/add-home">Add Homes</a>
    `);
});

module.exports = userRouter;
