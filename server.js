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
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
