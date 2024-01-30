const express = require("express");
const { testRoute } = require("../Controllers/TestControl");

const router = express.Router();

router.post("/test", testRoute);
router.get("/test", testRoute);

module.exports = router;
