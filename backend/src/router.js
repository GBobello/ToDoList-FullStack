const express = require('express');
const taskController = require('./controllers/tasks.controller');

const router = express.Router();

router.get('/tasks', taskController.getAll);


module.exports = router;    