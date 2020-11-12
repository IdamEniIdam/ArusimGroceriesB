const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const logger = require("morgan");
const agents = require("./routes/api/agents");


const app = express();

app.use(logger("dev"));

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors()); // Use this after the variable declaration


const db = require("./config/keys").mongoURL;


//Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));



// Passport Config
require("./config/passport")(passport);

//Use Routes
app.use("/api/agents", agents);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
