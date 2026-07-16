const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("login");
});

app.post("/login", (req, res) => {
    console.log(req.body);

    res.render("confirmation", {
        username: req.body.username,
        password: req.body.password
    });
});

app.post("/login", (req, res) => {
    console.log(req.body);

    res.render("confirmation", {
        username: req.body.username,
        password: req.body.password
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});