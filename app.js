const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

const app = express();

let newListOfItems = ["Item 001", "Item 002"];
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", (req, res) => {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  let currentDate = today.toLocaleDateString("en-US", options);
  console.log(currentDate); // Saturday, September 17, 2016
  console.log(newListOfItems);
  res.render("list", {kindOfDay: currentDate, listOfItems: newListOfItems});
});

app.post("/", (req, res) => {
  console.log("newListOfItems[]:" + newListOfItems);
  console.log("req.body.newItem: " + req.body.newItem);
  newListOfItems.push(req.body.newItem);
  console.log("newListOfItems[]:" + newListOfItems);
  res.redirect("/");
})

app.listen(port, () => {
  console.log("Server started at port number: " + port + "!");
});
