const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const appointmentRoutes = require("./routes/appointment");

//DATABASE
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("Database Connection ERROR");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//rouutes
app.use("/api", appointmentRoutes);

//Port
const port = 8000;

//server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
