const { Client } = require("pg");
const client = new Client({
  user: "user",
  password: "pass",
  host: "localhost",
  port: 5432,
  database: "db"
});
class Visitors {
  constructor(fullName, age, dateOfVisit, timeOfVisit, assistedBy, comments) {
    this.fullName = fullName;
    this.age = age;
    this.dateOfVisit = dateOfVisit;
    this.timeOfVisit = timeOfVisit;
    this.assistedBy = assistedBy;
    this.comments = comments;
  }
  async createTable() {
    client
      .connect()

      .then(() =>
        client.query(
          "create table visitors(id serial primary key, fullname varchar, age int, date_of_visit date, time_of_visit time, assisted_by varchar, comments varchar)",
          (error, respond) => {
            console.log(error, respond);
          }
        )
      )
      .then(() => console.log("successfully created the table"))
      .catch(e => console.log(e))
      .finally(() => client.end());
  }
  async addNewVisitor() {
    client
      .connect()
      .then(() =>
        client.query(
          "insert into visitors(fullname, age, date_of_visit, time_of_visit, assited_by, comments",
          [
            this.fullName,
            this.age,
            this.dateOfVisit,
            this.timeOfVisit,
            this.assistedBy,
            this.comments
          ]
        )
      )
      .then(() => console.log("visitor successfully saved"))
      .catch(e => console.log(e))
      .finally(() => client.end());
  }
  async deleteVisitor() {
    client
      .connect()
      .then(() =>
        client.query("delete from visitors where fullname = 1", [this.fullName])
      )
      .then(() => console.log("visitor information succesfully deleted"))
      .catch(e => console.log(e))
      .finally(() => client.end());
  }
  async updateVisitor() {
    client
      .connect()
      .then(() => client.query("update visitors set where fullname = 2"))
      .then(() => console.log("visitor information succesfully updated"))
      .catch(e => console.log(e))
      .finally(() => client.end());
  }
  async selectVisitor() {
    client
      .connect()
      .then(() => client.query("select * from visitors where id = 1", [id]))
      .then(() => console.log(results.row))
      .catch(e => console.log(e))
      .finally(() => client.end());
  }
  async deleteAllVisitors() {
    client
      .connect()
      .then(() => client.query("delete from visitors"))
      .then(() => console.log(" visitors sucessfully deleted"))
      .catch(e => console.log(e))
      .finally(() => client.end());
  }
}
module.exports = {
  Visitors
}
