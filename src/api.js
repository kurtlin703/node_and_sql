const express = require("express")
const https = require("https")
const app = express()

app.get("/", (req, res) => {
let url = "localhost:3000?/=addNewVistor&/=deleteVisitor&/=deleteAllVisitors&/=viewVisitors&/=viewVisitor&/=updatevVisitor"
https.get(url, (request, res)=> {
    console.log(res.statuscode)
})

res.send("hello world")

})

app.listen(4040, ()=> {
    console.log("you on server 4040")
})