const Task = require("../models/TaskModel");

const list = (req, res) => {
  Task.find()
    .exec()
    .then(result => {
      res.json(result);
    });
};

const create = (req, res) => {
  const newTask = new Task(req.body);
  newTask.save(newTask).then(result => {
    res.json(result);
  });
};

module.exports = { create, list };
