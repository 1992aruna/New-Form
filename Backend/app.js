const express = require("express");
const router = require("./routes/form-routes");
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const path = require("path");

require("dotenv").config();


if (process.env.NODE_ENV !== 'PRODUCTION') require('dotenv').config({ path: 'backend/config/config.env' })

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/form", router);

if (process.env.NODE_ENV === 'PRODUCTION') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
  })
}

module.exports = app
