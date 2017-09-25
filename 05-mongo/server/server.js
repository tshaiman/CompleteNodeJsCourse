var express = require('express')
var bodyParser = require('body-parser')
var {mongoose} = require('./db/mongoose')
var {Todo} = require('./models/todo')
var {User} = require('./models/user')

var app = express();
app.use(bodyParser.json())

app.post('/todos' , (req,res) => {
    console.log(req.body)
    var todo = new Todo({
        text : req.body.text
    })
    todo.save().then((doc) => {
        res.send(doc);
    },(e) => {
        res.status(400).send(e)
        console.log("Could not save document" ,e)
    })
})


app.listen(3000,() => {
    console.log("Starting Server on port 3000")
})

