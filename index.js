const express = require("express");
const app = express();
const port = 3000;
const dashRoutes = require("./routes/dashRoutes");
const authRoutes = require("./routes/authRoutes");


app.get("/", (req, res) => {
    res.send("Sales Dashboard here");
});

app.use("/dash", dashRoutes);
app.use("/auth", authRoutes);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
