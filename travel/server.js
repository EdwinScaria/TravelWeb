const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

app.use(express.json());
app.use(bodyParser.json());

app.set("port", process.env.PORT || 5000); // setting the port

require("dotenv").config();
let name = process.env.REACT_APP_NAME;
let password = process.env.REACT_APP_PASSWORD;
let id = process.env.REACT_APP_ID;

// connecting the db

mongoose.connect(
  `mongodb+srv://${name}:${password}@travel-nunyn.azure.mongodb.net/travel?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

// setting the port for the server to listen

app.listen(app.get("port"), () => {
  console.log(
    `AAF Express Server running at http://localhost:${app.get("port")}`
  );
});

// required for the mongodb connection

let Contenful = require("./Contentful.js");
const withAuth = require("./middleware");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const secret = "mysecretsshhh";
const jwt = require("jsonwebtoken");
let token = "";

// retrieving cotent from the db
// using route so that front-end can access the details
app.route("/").get(withAuth, (req, res) => {
  Contenful.find(function (err, contentful) {
    if (err) {
      console.log(err);
    } else {
      res.json(contentful);
    }
  });
});

// retrive data using id
app.route("/id").get(withAuth, (req, res) => {
  Contenful.findById(id, (err, Contenful) => {
    res.json(Contenful);
  });
});

// Authentication session

// generating the jwt token

app.post("/access", function (req, res) {
  //setting the jwt value and expire time

  token = jwt.sign({ payload: "token" }, secret, {
    expiresIn: "1h",
  });
  res.cookie("token", token, { httpOnly: true }).sendStatus(200); // send it into the browser
});

app.get("/checkToken", withAuth, function (req, res) {
  // aunthentication for the front end
  res.sendStatus(200); // withAuth for the checking the jwt token
});

module.exports = app;
