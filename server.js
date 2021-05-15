const express = require('express');

const app = express();

app.use(express.static(__dirname));

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
const PORT = process.env.PORT || 3000;

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

app.get('/api/todo', function(req, res){
    res.json(a);
})

app.post('/api/todo', function(req, res){
    var newUser= req.body;
    // console.log(newUser.task)
    a.task.push(newUser.task)
    // console.log(a)
    res.json(a)
 })

 app.delete('/api/todo/:id', function(req, res){
    var i=req.params.id
    if(i==-1){
        for(var j=0;j<a.task.length;++j){
            a.task.splice(j,1)
            console.log(a.task[j])
        }
    }
    a.task.splice(i,1)
})

app.put('/api/todo/:id', function(req, res){
    var i=req.params.id
    a.task[i]="<s>"+a.task[i]+"</s>" 
})

