const express = require("express");
const router = express.Router();

const InventoryController = require("../controllers/InventoryController");


router
    .route("/inventory")
    .get(InventoryController.list)
    .post(InventoryController.add)
    .delete(InventoryController.remove)



router
    .route("/saleslog")
    .get((req, res) => {
        res.send("All inventory items")
    })


module.exports = router;
