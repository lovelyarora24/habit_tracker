// set variables for environment
const express = require("express");
const path = require("path");
const app = express();
var mongoose = require("mongoose");
const connectDB = require("./config/mongoose");

// Set server port
app.listen(4000);
console.log('server is running');