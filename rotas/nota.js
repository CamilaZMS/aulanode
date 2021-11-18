const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send([]);
});

router.post("/", function (req, res) {
    res.send([]);
});

router.put("/", function (req, res) {
    res.send([]);
});

router.delete("/", function (req, res) {
    res.send([]);
});

module.exports = router;