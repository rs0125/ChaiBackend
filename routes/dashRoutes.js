const express = require("express");
const router = express.Router();

const InventoryController = require("../controllers/InventoryController");

const LogController = require("../controllers/LogController");


router
    .route("/inventory")
    .get(InventoryController.list)
    .post(InventoryController.add)
    .delete(InventoryController.remove)
    .put(InventoryController.bulkUpdate)



router
    .route("/saleslog")
    .get(LogController.list)
    .post(LogController.add)


module.exports = router;
