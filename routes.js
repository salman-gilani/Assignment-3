const express = require('express')
const app = express()
const middlew = require("./middleware.js")
const controller = require("./controller.js")


app.use(middlew)

app.get("/R", (req, res) => {
     
   res.send(controller.get())
})

app.get("/R/:id", (req, res) => {
     
    res.send(controller.getbyid(req.params.id))
 })

app.get("/C/:index",(req,res)=>{
    controller.create(req.params.index)
    res.send("Done. New products are: "+controller.products)
})

app.get("/D",(req,res)=>{
    controller.del()
    res.send("Done. New products are: "+controller.products)
})

app.get("/U/:num/:updated",(req,res)=>{
    controller.update(req.params.num,req.params.updated)
    res.send("Done. New products are: "+controller.products)

})
console.log("Listening on port 3045")

app.listen(3045)