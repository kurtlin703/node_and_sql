const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
const { Client } = require("pg");
const client = new Client({
  user: "user",
  password: "pass",
  host: "localhost",
  port: 5432,
  database: "db",
});

// let  Visitors  = require("/Visitos").Visitors;
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "pug");
app.use(express.static("public"));
app.get("/", (req, res) => {

  


  res.sendFile(__dirname + "/" + "index.html");
});

app.post("/", (req, res) => {
  let newVisitor = new Visitor(
    req.body.visitorsName,
    req.body.visitorsAge,
    req.body.dateOfVisit,
    req.body.timeOfVisit,
    req.body.assistedVisitor,
    req.body.comments
  );
  newVisitor.addNewVisitor();

  let visitorInfo = {
    VisitorsName: req.body.visitor_name,
    visitorsAge: req.body.visitor_age,
    dateOfVisit: req.body.date_of_visit,
    timeOfVisit: req.body.time_of_visit,
    assistedVisitor: req.body.your_name,
    comments: req.body.comments,
  };

  res.render("sample", {
    title: "Thank you",
    header:
      "Thank you for your time your information has been saved in the data. Be safe and quarantine yourself",
    message: visitorInfo,
  });
});

app.listen(3000, () => {
  console.log("you are officially on the server and its on port 3000");
});
