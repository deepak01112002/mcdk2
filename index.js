const express = require("express")
const JobRoute = require("./Routes/job.route")
const cors = require("cors")
const connnection = require("./db")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.use("/job",JobRoute)

app.listen(8080,async()=>{
    try {
        await connnection
        console.log("Server is connected")
    } catch (error) {
        console.log(error)
    }
})