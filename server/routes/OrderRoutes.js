const express = require("express");

const { list, create } = require("../controllers/OrderController");

const router = express.Router();

router.get("/", list);
router.post("/", create);

module.exports = router;
