const config = require('../config/config')
const mongoose = require('mongoose')



module.exports={

    connect: function(){
        mongoose.connect(config.connectionString,{})
.then((result)=> console.log("Database Connected"))
.catch((err)=>console.log("ERROR!!"))
mongoose.connection.on('connected',function(){
    console.log("DB Connected")
})

    }
}