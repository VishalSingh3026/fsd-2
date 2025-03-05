const express = require("express")

const app = express()

app.get('/users',(req,res)=>{
    console.log("running")
    res.send("Hello World of backend")

})

app.listen(9000,(err)=>{
    if(err)
    {
        console.err(err)
        return
    }
    console.log("Server is running on port : ",9000)
})