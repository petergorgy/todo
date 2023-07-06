const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8080;

const app = express();

let newListOfItems = ["Item 001", "Item 002"];
let workListOfItems = [];
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
  res.render("list", {redirectionPage: "/", listTitle: currentDate, listOfItems: newListOfItems});
});

app.post("/", (req, res) => {
  console.log("newListOfItems[]:" + newListOfItems);
  console.log("req.body.newItem: " + req.body.newItem);
  newListOfItems.push(req.body.newItem);
  console.log("newListOfItems[]:" + newListOfItems);
  res.redirect("/");
})

app.get("/work", (req, res)=> {
  res.render("list", {redirectionPage: "/work", listTitle: "Work List", listOfItems: workListOfItems});
});

app.post("/work", (req, res) => {
  console.log("workListOfItems[]:" + workListOfItems);
  console.log("req.body.newItem: " + req.body.newItem);
  workListOfItems.push(req.body.newItem);
  console.log("workListOfItems[]:" + workListOfItems);
  res.redirect("/work");
})

app.listen(port, () => {
  console.log("Server started at port number: " + port + "!");
});
