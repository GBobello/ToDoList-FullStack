const taskModels = require('../models/tasks.model'); 

const getAll = async (_request, response) => {
  const tasks = await taskModels.getAll();

  return response.status(200).json(tasks);
};

const createTask = async (request, response) => {
  const createdTask = await taskModels.createTask(request.body);
  return response.status(201).json(createdTask);
}

const deleteTask = async (request, response) => {
  const { id } = request.params;
  await taskModels.deleteTask(id);
  return response.status(204).json();
}

const updateTask = async (request, response) => {
  const { id } = request.params;
  await taskModels.updateTask(id, request.body);
  return response.status(204).json();
}

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask,
}