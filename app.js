require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const methodOverride = require("method-override");
const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.set("ejs", "views");

const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log(`App Connected to Database ${mongoURI}`);
  })
  .catch((err) => {
    console.log(`An Error Occured ${err}`);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(express.static("public"));
app.use(userRoutes);

app.listen(port, () => {
  console.log(`App running on Port ${port}`);
});
