const express = require('express')
const hbs = require('hbs')
const fs = require('fs')


var app = express()

//hbs view engine , with static
hbs.registerPartials(__dirname + '/views/partials')
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear() 
})
app.set('view engine','hbs')


//express middelware 
app.use((req,res,next)=>{
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`
    console.log(log)
    fs.appendFile('server.log',log + "\n",(err)=>{
        if(err){
            console.error("Could not save log to server.log")
        }
        
    })
    next();
})

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        welcomeMessage : "Welcome to my web site",
        pageTitle : "Express Lesson 01-ch03",
    })
    
})

app.get('/about',(req,res) => {
    res.render('about.hbs',{
        pageTitle : 'my About Page',
    })
})

var port = process.env.PORT || 1337;
app.listen(port,()=>{
    console.log("Server is up on port " +port)
})