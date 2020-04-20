const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
  app.use(bodyParser.urlencoded({ extended: true }));

  res.send("hello world");
});
app.post("/", (req, res) => {
  console.log(req.body.viewData);
  let url =
    "localhost:3000?/=addNewVistor&/=deleteVisitor&/=deleteAllVisitors&/=viewVisitors&/=viewVisitor&/=updatevVisitor";
  https.get(url, (response) => {
    console.log(response.statuscode);

    response.on("data", (data) => {
      let visitorData = JSON.parse(data);
      console.log(visitorData);
      let addNewVistor = visitorData.addNewVistor;
      console.log(addNewVistor);
      let deleteVisitor = visitorData.deleteVisitor;
      console.log(deleteVisitor);
      let deleteAllVisitors = visitorData.deleteAllVisitors;
      console.log(deleteAllVisitors);
      let viewVisitor = visitorData.viewVisitor;
      console.log(viewVisitor);
      let viewVisitors = visitorData.viewVisitors;
      console.log(viewVisitors);
      res.write(" a new visitor added" + addNewVistor);
      res.write("a visitor has been deleted from the data" + deleteVisitor);
      res.write(
        "all visitors has been deleted from the data" + deleteAllVisitors
      );
      res.write("to view a visitor from the data" + viewVisitor);
      res.write("to view all visitors from the data" + viewVisitors);
      res.send();
    });
  });
});

app.listen(4040, () => {
  console.log("you on server 4040");
});
