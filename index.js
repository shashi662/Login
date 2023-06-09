const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./Routes/Auth");
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.set({ "Access-Control-Allow-Origin": "*" });
  next();
});

app.use(authRouter);
mongoose
  .connect(
    `mongodb+srv://kumarshashikant05:Ef1w6oESWAwJ5J5c@cluster0.m86kdjb.mongodb.net/users`
  )
  .then(() => {
    app.listen(3000, () => {
      console.log("connected to db as well as server");
    });
  })
  .catch(() => console.log("not connected"));
