let { Pool } = require("pg"),
  pool = new Pool({
    user: "myaccount",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "db",
  });

class Visitors {
  constructor(fullname, age, dateOfVisit, timeOfVisit, assistedBy, comments) {
    this.fullname = fullname;
    this.age = age;
    this.dateOfVisit = dateOfVisit;
    this.timeOfVisit = timeOfVisit;
    this.assistedBy = assistedBy;
    this.comments = comments;
    this.tryCatch = () => {
      try {
        this.Query;
      } catch (err) {
        throw err;
      }
    };

    this.myCallBack = (err) => {
      if (err) {
        throw Error(`${this.errorMessage} ${err}`);
      } else {
        console.log(this.message);
      }
    };
  }

  async createTable() {
    this.tryCatch;
    this.Query = await pool.query(
      "CREATE TABLE visitors(visitorID SERIAL PRIMARY KEY, name VARCHAR(50), visitorsage INT, dateofvisit DATE, timeofvisit TIME, assistedBy VARCHAR(50), comments VARCHAR(100), unique(name))",
      this.myCallBack
    );
    this.message = "Table Successfully Created";
    this.errorMessage = "Table Could Not Be Created";
  }

  async addNewVisitor() {
    this.tryCatch;
    this.Query = await pool.query(
      "INSERT into visitors(name, visitorsage, dateofvisit, timeofvisit, assistedby, comments) values ($1,$2,$3,$4,$5,$6)",
      [
        this.name,
        this.age,
        this.dateOfVisit,
        this.timeOfVisit,
        this.assistedBy,
        this.comments,
      ],
      this.myCallBack
    );
    this.errorMessage = "Visitor Could Not Be Added";
    this.message = this.fullName + ": has been Successfully Added";
  }
  async deleteVisitor() {
    this.tryCatch;
    this.myQuery = await pool.query(
      "DELETE from visitors WHERE fullname = $1",
      [this.fullName],
      this.myCallBack
    );
    this.errorMessage = "Visitor couldn't be deleted";
    this.message = "Visitor successfully deleted";
  }
  async viewVisitor(visitorID) {
    this.myTryCatch;
    let results = (this.myQuery = await pool.query(
      "SELECT * FROM visitors WHERE visitorid = $1",
      [visitorID]
    ));
    console.table(results.rows);
    this.errorMessage = "Visitor cannot be selected";
  }
  async viewVisitors() {
    this.tryCatch;
    let results = (this.myQuery = await pool.query("SELECT * from visitors"));
    console.table(results.rows);
    this.errorMessage = "Visitors Cannot Be Listed";
  }
}

module.exports = {
  Visitors,
};
