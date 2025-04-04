const express = require("express");
const router = express.Router();

// Simple API Route
router.get("/", (req, res) => res.json({ message: "User API Works!" }));

module.exports = router;
