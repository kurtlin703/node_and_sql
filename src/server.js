

const express = require("express")
const app = express()
app.get("/", (request, response) => {
    response.send("<h1>welcome kurtlin hendricks</h1>")
})
app.get("/contact", (req, res) => {
    res.send("contact me at my email")
})
app.get("/about", (req, res) => {
    res.send("my name is kurtlin hendricks and im 22 years old which is very scary")
})
app.listen(3000, () => {
    console.log("server is on port 3000")
})