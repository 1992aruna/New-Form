const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/form-routes");
const cors = require("cors");
const app = express();

require("dotenv").config();


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

app.use(express.json());
app.use(cors());
app.use("/form", router);

app.listen(5000, ()=>{
  connect()
  console.log("Connected to Backend.")
});
