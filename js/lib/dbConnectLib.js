const mongoose = require('mongoose')
const config = require('../config/config')

const connectionString="mongodb+srv://tenor06:Abhishyant22102004@cluster0.mw1u9.mongodb.net/CRUD?retryWrites=true&w=majority"

module.exports={

    connect: function(){
        mongoose.connect(connectionString,{})
.then((result)=> console.log("Database Connected"))
.catch((err)=>console.log("ERROR!!"))
mongoose.connection.on('connected',function(){
    console.log("DB Connected")
})

    }
}