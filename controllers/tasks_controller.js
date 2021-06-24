var Tasks = require('../model/tasks');

module.exports.add = (req,res)=>{
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
        // console.log("New task is : ",newTask);
        res.redirect('/');
    });
}

module.exports.delete = (req,res)=>{
    // console.log(req.query);
    // res.redirect('/');
    var id = req.query.id;
    Tasks.findByIdAndDelete(id,(err)=>{
        if(err){
            console.log("error in deleting task");
        }
        res.redirect('/');
    });
}