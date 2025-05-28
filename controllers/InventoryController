const Inventory = require("../models/inventoryModel");

exports.list = (req, res) => {
    Inventory.getAllInventory((err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.json(rows);
    });
};

exports.add = (req, res) => {
    const { name, quantity } = req.body;

    if (!name || quantity == null) {
        return res.status(400).json({ error: "All fields are required" });
    }

    Inventory.addItem(name, quantity, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Item added successfully" });
    });
};

exports.remove = (req, res) => {
    const { id } = req.body;

    if (id == null) {
        return res.status(400).json({ error: "Id required" });
    }

    Inventory.removeItem(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: "Item removed successfully" });
    });
};

exports.bulkUpdate = (req, res) => {
    const items = req.body.items; // expecting [{ id: 1, quantity: 20 }, ...]
    if (!Array.isArray(items)) {
        return res.status(400).send("Invalid input. Expecting an array of items.");
    }

    let completed = 0;
    let hasError = false;

    items.forEach(({ id, quantity }) => {
        Inventory.updateQuantity(id, quantity, (err) => {
            if (err && !hasError) {
                hasError = true;
                return res.status(500).send(`Error updating item ID ${id}: ${err.message}`);
            }
            completed++;
            if (completed === items.length && !hasError) {
                res.send("All quantities updated successfully.");
            }
        });
    });
};