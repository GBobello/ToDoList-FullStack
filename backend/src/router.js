const express = require('express');
const taskController = require('./controllers/tasks.controller');
const taskMiddleware = require('./middlewares/tasks.middleware');

const router = express.Router();

router.get('/tasks', taskController.getAll);
router.post('/tasks', taskMiddleware.validateFieldTitle, taskController.createTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', 
    taskMiddleware.validateFieldTitle, 
    taskMiddleware.validateFieldStatus,
    taskController.updateTask);

module.exports = router;    