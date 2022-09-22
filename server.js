require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Running on port ${port}`);
  mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => console.log("Connected to MongoDB"));
});
