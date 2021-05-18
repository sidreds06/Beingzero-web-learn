const express = require('express');
const mongoose = require('mongoose');
const Table = require('./js/Table');


const app = express();

var password = process.env.Mongo_atlas_password;
var connectionString = "mongodb+srv://tenor06:"+password+"@cluster0.mw1u9.mongodb.net/CRUD?retryWrites=true&w=majority"

mongoose.connect(connectionString,{})
.then((result)=> console.log("Database Connected"))
.catch((err)=>console.log("ERROR!!"))
mongoose.connection.on('connected',function(){
    console.log("DB Connected")
})



app.get("/crud", function(req, res){
    res.sendFile('html/crud.html', {root: __dirname});
    //res.send("Welcome to My Basic Site");  
})
// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})


app.use(express.urlencoded({extended: true}));
app.use(express.json());

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

