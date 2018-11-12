const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const { csvToJson } = require("./helpers");
const TaskRoutes = require("./routes/TaskRoutes");
const OrderRoutes = require("./routes/OrderRoutes");
const MessageRoutes = require("./routes/MessageRoutes");

// Read csv and convert to json
const data = fs.readFileSync(__dirname + "/data.csv", "utf8");
const jsonData = csvToJson(data);

const app = express();
const port = 3001;
mongoose.connect(
  "mongodb://cpuser:Cpuser1@ds151970.mlab.com:51970/checkpoint-backend-1"
);

app.use(bodyParser.json());

app.get("/dateTime", (req, res) => res.send(new Date()));
app.get("/newComments", (req, res) => res.send(jsonData.new_comments));
app.get("/newTasks", (req, res) => res.send(jsonData.new_tasks));
app.get("/newOrders", (req, res) => res.send(jsonData.new_orders));
app.get("/tickets", (req, res) => res.send(jsonData.tickets));
app.get("/foxes", (req, res) => {
  fetch("https://randomfox.ca/floof/")
    .then(res => res.json())
    .then(json => {
      res.json(json.image);
    });
});

app.use("/tasks", TaskRoutes);
app.use("/orders", OrderRoutes);
app.use("/messages", MessageRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
