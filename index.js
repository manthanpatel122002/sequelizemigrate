var express = require('express')
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
console.log("djfnkjdsf")


var users = require('./routes/userRoutes.js')
app.use(users)

app.listen(3000, ()=>{
    console.log("App Is Listen Successfully!!!!");
})