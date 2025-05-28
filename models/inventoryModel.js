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

function updateQuantity(id, quantity, callback) {
    db.run(
        "UPDATE inventory SET quantity = ? WHERE id = ?",
        [quantity, id],
        function (err) {
            if (err) return callback(err);
            if (this.changes === 0) {
                return callback(new Error(`Item with ID ${id} does not exist.`));
            }
            callback(null);
        }
    );
}



module.exports = { getAllInventory, addItem, removeItem, updateQuantity };
