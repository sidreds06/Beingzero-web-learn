const express = require('express');
const Table = require('./js/Table');
const Task = require('./js/Task');
const dbConection = require('./js/lib/dbConnectLib')
const config = require('./js/config/config')


const app = express();

dbConection.connect()

app.get("/add-task", function(req, res){
   const task= new Task({
       name: 'two',
       body: 'akhdbhjfb'
   })
   task.save()
   .then((result)=>{
       res.send(result)
   })
   .catch((err)=>{
       console.log(err)
   })
})
app.get("/all-tasks", function(req, res){
    Task.find()
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.use(express.static(__dirname));

app.get('/crud', function(req, res){
    res.sendFile('html/crud.html', {root: __dirname}); 
})   

app.get("/", function(req, res){
    res.sendFile('html/index.html', {root: __dirname});
    //res.send("Welcome to My Basic Site");  
})
app.get('/resume', function(req, res){
    res.sendFile('html/resume.html', {root: __dirname}); 
})   
app.get('/google', function(req, res){
    res.sendFile('html/google.html', {root: __dirname}); 
})  
app.get('/apple', function(req, res){
    res.sendFile('html/apple.html', {root: __dirname}); 
})  
app.get('/color-picker', function(req, res){
    res.sendFile('html/color_picker.html', {root: __dirname}); 
})  
app.get('/google-sign-in', function(req, res){
    res.sendFile('html/google_sign_in.html', {root: __dirname}); 
})  
app.get('/login', function(req, res){
    res.sendFile('html/login.html', {root: __dirname}); 
})  
app.get('/register', function(req, res){
    res.sendFile('html/register.html', {root: __dirname}); 
})  
app.get('/google-charts', function(req, res){
    res.sendFile('html/gcharts.html', {root: __dirname}); 
})  
app.get('/cf-api', function(req, res){
    res.sendFile('html/cfapi.html', {root: __dirname}); 
})  
app.get('/todo', function(req, res){
    res.sendFile('html/todo.html', {root: __dirname}); 
})  
// Heroku will automatically set an environment variable called PORT
const PORT = config.webPort;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
app.get('/todocrud', function(req, res){
    res.sendFile('html/todocrud.html', {root: __dirname}); 
})  


app.use(express.urlencoded({extended: true}));
app.use(express.json());

var a={
    "task":[]
   };

app.get('/api/todo',async function(req, res){
    //res.json(a);
    await Task.find()
    .then((result)=>{
     res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post('/api/todo',async function(req, res){
    var newt= req.body;
    console.log(newt)
    const task= new Task({
        name: newt.task,
        isdelete: true
    })
    console.log(task)
    await task.save()
    //res.json(a)
 })

 app.delete('/api/todo/:id', async function(req, res){
    var i=req.params.id
    await Task.findByIdAndDelete(i,function(err,orb){
        if(err)
        console.log("ERROR:"+err)
        else 
        console.log("SUCCESS")
    })
})

app.put('/api/todo/:id', function(req, res){
    var i=req.params.id
    Task.findById(i,function(err,obj){
        if(err)
        console.log("ERROR:"+err)
        else {
        console.log("SUCCESS"+obj.name)
        var obj={name: "<s>"+obj.name+"</s>" }
        Task.findByIdAndUpdate(i,obj,function(){})
        }
})
})


//app.js

app.get('/crud/get',async function(req, res){
    //res.json(a);
    await Table.find()
    .then((result)=>{
     res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post('/crud/post',function(req, res){
    var newt= req.body;
    console.log(newt)
    const table= new Table({
        name: newt.name,
        Articels: newt.Articels
    })
    console.log(table)
    table.save()
    //res.json(a)
 })

 app.delete('/crud/del:id', function(req, res){
    var i=req.params.id
    console.log(i)
        Table.findByIdAndDelete(i,function(err,orb){
        if(err)
        console.log("ERROR:"+err)
        else 
        console.log("SUCCESS")
    })
})

app.put('/crud/put:id', function(req, res){
    var i=req.params.id
    Table.findById(i,function(err,obj){
        if(err)
        console.log("ERROR:"+err)
        else {
            console.log(obj.Articels)
        var obj={Articels: obj.Articels }
        //Table.findByIdAndUpdate(i,obj,function(){})
        }
})
})


