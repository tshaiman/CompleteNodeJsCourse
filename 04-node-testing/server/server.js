const express = require('express')


var app = express()

app.get('/',(req,res) => {
    res.status(404).send({name:"Tomer",age:33})
    
})

app.get('/users',(req,res) => {
    res.send([{name:"Tomer",age:33},{name:"Avi",age:55},{name:"Roni",age:12}])
    
})


var port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server is up on port " +port)
})


module.exports.app = app