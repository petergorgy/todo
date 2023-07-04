const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

app.get("/", (req, res) => {
  var today = new Date();
  var currentDay = today.getDate();
  var day = weekday[currentDay];

  console.log("weekday: " + weekday);
  console.log("currentDay: " + currentDay);
  console.log("weekday[currentDay]: " + weekday[currentDay]);

  res.render("list", { kindOfDay: day });
});

app.listen(port, () => {
  console.log("Server started at port number: " + port + "!");
});
