const express  = require("express");
const router = express.Router();

//users
router.get("/", (req, res) => {
    res.send("GET for users");
});

//show
router.get("/:id", (req, res) => {
    res.send("GET for show");
});

//POST route
router.post("/", (req, res) => {
    res.send("POST for users");
});

//Delete route
router.delete("/", (req, res) => {
    res.send("Delete for users");
});

module.exports = router;