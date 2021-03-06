const express = require("express");
const router = express.Router();
const mail = require("./mail");

router.get("/", (req, res) => {
    res.render("home", { title: "Daisho Front-end Developer" });
});

router.post("/send", mail.sendMessage);

module.exports = router;
