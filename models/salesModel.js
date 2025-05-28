const db = require("./db");


function getAllSaleslog(callback) {
    db.all("SELECT * FROM saleslog", [], callback);
}

function addItem(message, type, callback) {
    db.run(
        "INSERT INTO saleslog (message, type) VALUES (?, ?);",
        [message, type],
        callback
    );
}

module.exports = { getAllSaleslog, addItem }