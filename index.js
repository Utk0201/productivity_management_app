const express = require('express');
const path = require('path');
const app = express();
// var tasks = require('./seeds/data');
var Tasks = require('./model/tasks.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/prdApp', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in setting up mongoDB:'));
db.once('open', function() {
  // we're connected!
  console.log("mongo connection estd.");
});

app.set('view engine','ejs');   // set view engine to ejs
app.set('views',path.join(__dirname,'views2'));  // views2 is written to signify if any name other than 'views' is written, it becomes necessary to 
// include the above line
app.use(express.static('assets'));  // serve static assets
app.use(express.urlencoded());      // use express urlencoded middleware
app.use('/',require('./routes/index'));

app.listen(3000,()=>{
    console.log('app started at port 3000'); 
});