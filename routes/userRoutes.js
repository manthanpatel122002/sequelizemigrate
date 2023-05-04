var userctrl = require('../controllers/userController')

var express = require('express')


var app = express()


app.get("/",userctrl.home)

app.get('/add', userctrl.addUser)

app.get('/users',userctrl.getUsers)
app.get('/user/:id',userctrl.getUser)

app.post('/users',userctrl.postUsers)

app.delete('/user',userctrl.deleteUser)

app.patch('/user',userctrl.patchUser)

//manual query example with get set and virtuals
app.get('/query', userctrl.queryUser)

app.get('/get-set-virtual', userctrl.getSetVirtualUser)

app.get('/validateUser', userctrl.validateUser)

app.get('/raw-queries',userctrl.rawQueriesUser)


//searching-sorting-pagination
app.get('/pagination',userctrl.pagination)

app.get('/searching',userctrl.searching)

app.get('/sorting',userctrl.sorting)

//association
app.get('/one-to-one',userctrl.oneToOneUser)

app.get('/one-to-many',userctrl.oneToManyUser)

app.get('/many-to-many',userctrl.manyToManyUser)

//polymorphisam
app.get('/polyOneToMany',userctrl.polyOneToManyUser)

app.get('/polyManyToMany',userctrl.polyManyToManyUser)

app.get("/multipleTableDelete", userctrl.multipleTableDelete);


//data table

app.get("/get_data",userctrl.get_data);

app.get('/data',userctrl.data)











module.exports=app

