let { Visitors } = require("../src/node");

let lethabo = new Visitors();
let kurtlin = new Visitors(
  "kurtlin hendricks",
  97,
  "01-31-1907",
  "00:00",
  "lethabo",
  "they were okay"
);

describe("Visitor", () =>{
  it("checks if the createTable is defined", () => {
    expect(kurtlin.createTable).toBeDefined();
  });
  it("check if the addNewVisitor is defined", () => {
    expect(kurtlin.addNewVisitor).toBeDefined();
  });
  it(" check if the deleteVisitor is defined", () => {
    expect(kurtlin.deleteVisitor).toBeDefined();
  });
  it("check if the updateVisitor is defined", () => {
    expect(kurtlin.updateVisitor).toBeDefined();
  });

  it(" check if deleteAllVisitors function is defined", () => {
    expect(visitor.deleteAllVisitors).toBeDefined();
  });
});
describe("checks if the addVisitor function adds a new visitor", () => {
  it("spy on the addNewVisitor function", () => {
    spyOn(lethabo, "addNewVisitor");

    lethabo.addNewVisitor();
    expect(lethabo.addNewVisitor).toHaveBeenCalled();
  });
  it("checks if the  createTable function is created", () => {
    spyOn(lethabo, "createTable");

    lethabo.createTable();
    expect(lethabo.createTable).toHaveBeenCalled();
  });
  it("check if the  deleteVisitor function is deleted", () => {
    spyOn(lethabo, "deleteVisitor");

    visitor.deleteVisitor();
    expect(lethabo.deleteVisitor).toHaveBeenCalled();
  });
});
