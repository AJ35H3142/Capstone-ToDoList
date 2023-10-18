import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const monthNum = new Date().getMonth();
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayOfWeekNum = new Date().getDay();
const dayOfWeekNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const month = monthNames[monthNum];
const datE = new Date().getDate();
const week = dayOfWeekNames[dayOfWeekNum];
const year = new Date().getFullYear();
var userItemArrayWork = [];
var userItemWork = "";
var userItemArray = [];
var userItem = "";

// var userItemDiv = "";

app.get("/", (req, res) => {
  res.render("index.ejs", {
    year,
    month,
    datE,
    week,
    userItem,
    userItemArray,
  });
});
app.get("/work", (req, res) => {
  res.render("work.ejs", {
    year,
    work: "true",
    userItemWork,
    userItemArrayWork,
  });
});
app.post("/", (req, res) => {
  userItemArray.push(req.body["newItem"]),
    res.render("index.ejs", {
      year,
      month,
      datE,
      week,
      userItem: req.body["newItem"],
      userItemArray,
    });
});
app.post("/work", (req, res) => {
  userItemArrayWork.push(req.body["newItem"]),
    res.render("work.ejs", {
      year,
      work: "true",
      userItemWork: req.body["newItem"],
      userItemArrayWork,
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
