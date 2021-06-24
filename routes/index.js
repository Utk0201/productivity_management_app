const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');
const tasksController = require('../controllers/tasks_controller');

router.get('/',homeController.home);
router.post('/tasks/add',tasksController.add);
router.get('/tasks/delete',tasksController.delete);

console.log("Loaded router");

module.exports = router;