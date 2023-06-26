const taskModels = require('../models/tasks.model'); 

const getAll = async (req, res) => {
  const tasks = await taskModels.getAll();

  return res.status(200).json(tasks);
};

module.exports = {
  getAll
}