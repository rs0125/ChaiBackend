const express = require("express");
const router = express.Router();

// Route handlers
router.use("/inventory", (req, res) => {
    res.send("All inventory items");
});

router.use("/saleslog", (req, res) => {
    res.send("All inventory items");
});


module.exports = router;
