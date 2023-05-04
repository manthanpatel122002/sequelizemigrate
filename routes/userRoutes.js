var userctrl = require('../controllers/userController')
var home = require("../controllers/home").home;
var addUser = require("../controllers/addUser").addUser;
var getUsers = require("../controllers/getUsers").getUsers;
var getUser = require("../controllers/getUser").getUser;
var postUsers = require("../controllers/postUsers").postUsers;
var deleteUser = require("../controllers/deleteUser").deleteUser;
var patchUser = require("../controllers/patchUser").patchUser;
var queryUser = require("../controllers/queryUser").queryUser;
var getSetVirtualUser =require("../controllers/getSetVirtualUser").getSetVirtualUser;
var validateUser = require("../controllers/validateUser").validateUser;
var rawQueriesUser = require("../controllers/rawQueriesUser").rawQueriesUser;
var pagination = require("../controllers/pagination").pagination;
var searching = require("../controllers/searching").searching;
var sorting = require("../controllers/sorting").sorting;
var oneToOneUser = require("../controllers/oneToOneUser").oneToOneUser;
var oneToManyUser = require("../controllers/oneToManyUser").oneToManyUser;
var manyToManyUser = require("../controllers/manyToManyUser").manyToManyUser;
var polyOneToManyUser =require("../controllers/polyOneToManyUser").polyOneToManyUser;
var polyManyToManyUser =require("../controllers/polyManyToManyUser").polyManyToManyUser;
var data = require("../controllers/data").data;
var get_data = require("../controllers/get_data").get_data;




















var express = require('express')


var app = express()


app.get("/",home)

app.get('/add', addUser)

app.get('/users',getUsers)
app.get('/user/:id',getUser)

app.post('/users',postUsers)

app.delete('/user',deleteUser)

app.patch('/user',patchUser)

//manual query example with get set and virtuals
app.get('/query',queryUser)

app.get('/get-set-virtual', getSetVirtualUser)

app.get('/validateUser',validateUser)

app.get('/raw-queries',rawQueriesUser)


//searching-sorting-pagination
app.get('/pagination',pagination)

app.get('/searching',searching)

app.get('/sorting',sorting)

//association
app.get('/one-to-one',oneToOneUser)

app.get('/one-to-many',oneToManyUser)

app.get('/many-to-many',manyToManyUser)

//polymorphisam
app.get('/polyOneToMany',polyOneToManyUser)

app.get('/polyManyToMany',polyManyToManyUser)


//data table

app.get("/get_data",get_data);

app.get('/data',data)











module.exports=app

