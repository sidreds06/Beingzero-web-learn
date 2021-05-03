const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.get("/", function(req, res){
    res.sendFile('html/index.html', {root: __dirname});
    //res.send("Welcome to My Basic Site");  
})
//app.get('/resume', function(req, res){
  //  res.sendFile('html/resume.html', {root: __dirname}); 
//})   
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})
