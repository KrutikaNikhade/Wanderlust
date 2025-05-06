const express  = require("express");
const router = express.Router();

//Posts -> 
//INDEX
router.get("/", (req, res) => {
    res.send("GET for posts");
});

//SHOW
router.get("/:id", (req, res) => {
    res.send("GET for posts");
});

//POST 
router.post("/", (req, res) => {
    res.send("POST for posts");
});

//Delete 
router.delete("/", (req, res) => {
    res.send("Delete for posts");
});

module.exports = router;