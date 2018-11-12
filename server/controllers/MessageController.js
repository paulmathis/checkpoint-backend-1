const Message = require("../models/MessageModel");

const list = (req, res) => {
  Message.find()
    .exec()
    .then(result => {
      res.json(result);
    });
};

const create = (req, res) => {
  const newTask = new Message(req.body);
  newTask.save(newTask).then(result => {
    res.json(result);
  });
};

module.exports = { create, list };
