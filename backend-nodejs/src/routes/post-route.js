const express = require("express");
const router = express.Router();

const service = require("../controllers/post-controller");

router.get("/posts", service.index);

router.get("/posts/:id", service.show);

router.post("/posts", service.store);

router.put("/posts/:id", service.update);

router.delete("/posts/:id", service.destroy);

module.exports = router;
