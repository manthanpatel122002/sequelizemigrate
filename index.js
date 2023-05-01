var express = require('express')
var app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const ejs = require("ejs")
console.log("djfnkjdsf")
app.set('view engine', 'ejs')

var users = require('./routes/userRoutes.js')
app.use(users)

app.listen(3000, ()=>{
    console.log("App Is Listen Successfully!!!!");
})