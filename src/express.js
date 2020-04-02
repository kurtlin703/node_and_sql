const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  /********************************************************************************************************************************
                        **************************still working on this**************************   
  class Visitors {
     constructor(visitorsName, visitorsAge, dateOfVisit, timeOfVisit, assistedVisitor, comments) {
       this.visitorsAge = visitorsName;
       this.visitorsAge = visitorsAge;
       this.dateOfVisit = dateOfVisit;
   this.timeOfVisit = timeOfVisit;
       this.assistedVisitor = assistedVisitor;
       this.comments = comments;
     }
     addNewVisitor(){
  
     }
   }
   let visitorOne = new Visitors(
     req.body.visitorsName,
     req.body.visitorsAge,
     req.body.assistedVisitor,
     req.body.dateOfVisit,
     req.body.timeOfVisit,
     req.body.comments

/ )
 visitorOne.addNewVisitor()
   res = {
     visitorsName: req.body.visitorsName,
     visitorsAge:req.body.visitorsAge,
     assistedVisitor:req.body.assistedVisitor,
    dateOfVisit:req.body.dateOfVisit,
     timeOfVisit:req.body.timeOfVisit,
     comments:req.body.comments 
   }


     save() {
       fs.writeFile(
         "visitor_" + this.fullname + ".json",
         JSON.stringify(this, null, 4),
         err => {
           if (err) {
             throw ("error", +err);
           } else {
             console.log("file written");
           }
         }
       );
     }

   }
 let database = visitorOne
********************************************************************************************************************************/

  let database =
    req.body.visitorsName +
    " " +
    req.body.visitorsAge +
    " " +
    req.body.assistedVisitor +
    " " +
    req.body.dateOfVisit +
    " " +
    req.body.timeOfVisit +
    " " +
    req.body.comments;
  let storage = database;

  res.send(
    "<h1>Thank you for your time your information has been saved below. Be safe and quarantine yourself</h1>" +
      storage
  );
});

app.get("/", (req, res) => {
  res.sendfile(__dirname + "/index.html");
});

app.listen(3000, () => {
  console.log("you are officially on the server and its on port 3000");
});
