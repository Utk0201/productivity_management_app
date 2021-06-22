const { Schema } = require("mongoose");
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    start:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Task',taskSchema);