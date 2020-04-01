const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {

    let database = req.body.visitorsName + " " + req.body.visitorsAge + " " + req.body.assistedVisitor + " " +  req.body.dateOfVisit + " " +  req.body.timeOfVisit + " " + req.body.comments
    let storage = database

  res.send("<h1>Thank you for your time your information has been saved below. Be safe and quarantine yourself</h1>" + storage);
});

app.get("/", (req, res) => {
  res.sendfile(__dirname + "/index.html");
});

app.get("/", (req, res) => {
  res.send("greetings");
});

app.listen(3000, () => {
  console.log("you are officially on the server and its on port 3000");
});
