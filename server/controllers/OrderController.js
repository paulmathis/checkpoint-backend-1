const Order = require("../models/OrderModel");

const list = (req, res) => {
  Order.find()
    .exec()
    .then(result => {
      res.json(result);
    });
};

const create = (req, res) => {
  const newTask = new Order(req.body);
  newTask.save(newTask).then(result => {
    res.json(result);
  });
};

module.exports = { create, list };
