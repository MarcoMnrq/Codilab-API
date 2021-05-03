// Required modules
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const database = require("./configuration/database");

// Express app initialization
const app = express();

// Parse env variables
require("dotenv").config();

// Configuring port
const port = process.env.PORT || 9000;

// Database connection
database();

// Middleware configuration
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./static"));

// Listening to port
app.listen(port);
console.log(`Listening On http://localhost:${port}/api/v1/`);
console.log(`Client: http://localhost:${port}`);

module.exports = app;
