const SalesModel = require("../models/salesModel");

exports.list = (req, res) => {
    SalesModel.getAllSaleslog((err, rows) => {
        if (err) return res.status(500).send(err.message);
        res.json(rows);
    });
};

exports.add = (req, res) => {
    const { message, type } = req.body

    if (!message || type == null)
        return res.status(400).json({ error: "All fields are required" })
    SalesModel.addItem(
        message, type, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "Item added successfully" });
        }
    )
}