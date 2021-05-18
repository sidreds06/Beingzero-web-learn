const mongoose = require('mongoose')
const schema = mongoose.Schema

const Taskschema = new schema({
    name:{
        type: String,
        required: true
    },
    body:{
        type: String
    }
   
}, {timestamps: true})
const Task = mongoose.model('Task',Taskschema)
module.exports = Task