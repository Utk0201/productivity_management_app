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



app.get('/',async (req,res)=>{
    // while(tasks.length) tasks.pop;       //  to reset
    // for(aTask of tasks) console.log(aTask);
    const tasks = await Tasks.find({}).sort({start:1});
    console.log(tasks);
    res.render('home',{task_list:tasks});
});

app.post('/addTasks',(req,res)=>{
    // console.log(req.body);  //  I get undefined
    // reason: the data passed is in url encoded form but i want it in json form
    // so, need to use express.urlencoded
    Tasks.create({
        name:req.body.taskName,
        start:req.body.taskStart
    },function(er,newTask){
        if(er){
            console.log("error in creating task");
            return er;
        }
        console.log("New task is : ",newTask);
        res.redirect('/');
    });
});

app.listen(3000,()=>{
    console.log('app started at port 3000'); 
});