const db = require("./db");

function getAllInventory(callback) {
    db.all("SELECT * FROM inventory", [], callback);
}

function addItem(name, qty, callback) {
    db.run(
        "INSERT INTO inventory (name, quantity) VALUES (?, ?)",
        [name, qty],
        callback
    );
}


function removeItem(id, callback) {
    db.run(
        "DELETE FROM inventory WHERE id = ?;", [id],
        callback
    );
}

module.exports = { getAllInventory, addItem, removeItem };
