var Tasks = require('../model/tasks.js');

module.exports.home = async function(req,res){
    // return res.send('<h1>Controller working!!</h1>')
    const tasks = await Tasks.find({}).sort({start:1});
    // console.log(tasks);
    res.render('home',{task_list:tasks});
}

