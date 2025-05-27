const express = require("express");
const router = express.Router();

// Route handlers
router.use("/login", (req, res) => {
    res.send("Login Portal");
});

router.use("/Register", (req, res) => {
    res.send("Register");
});

router.use("/logout", (req, res) => {
    res.send("Logout Portal");
});


module.exports = router;
