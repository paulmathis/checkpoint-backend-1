const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");

const { csvToJson } = require("./helpers");

// Read csv and convert to json
const data = fs.readFileSync("server/data.csv", "utf8");
const jsonData = csvToJson(data);

const app = express();
const port = 3001;
mongoose.connect(
  "mongodb://cpuser:Cpuser1@ds151970.mlab.com:51970/checkpoint-backend-1"
);

app.get("/dataTime", (req, res) => res.send(new Date()));
app.get("/newComments", (req, res) => res.send(jsonData.new_comments));
app.get("/newTasks", (req, res) => res.send(jsonData.new_tasks));
app.get("/newOrders", (req, res) => res.send(jsonData.new_orders));
app.get("/tickets", (req, res) => res.send(jsonData.tickets));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
