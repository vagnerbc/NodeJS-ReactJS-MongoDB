const express = require("express");
const router = express.Router();
const requireDir = require("require-dir");

requireDir("../models");

router.use("/", require("./post-route"));
router.use("/", require("./comment-route"));

module.exports = router;
