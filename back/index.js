const express = require("express")
const app = express()

const connection =require("./db/db")
const cors = require("cors")
const quesRouter = require("./Routes/questions")


app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use(cors({
  origin:"*"
}))
app.get("/", async(req,res) => {
    res.send("users here")
})
app.use("/ques", quesRouter)


const PORT = process.env.PORT || 8080 
app.listen(PORT,()=>{
  connection;
    console.log("server started on  http://localhost:8080")
})