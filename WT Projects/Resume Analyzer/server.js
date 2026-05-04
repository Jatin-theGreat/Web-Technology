const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/analyze", (req, res) => {
    const { text } = req.body;

    const words = text.split(" ").length;

    let score = 0;
    let feedback = [];

    if (words > 100) score += 20;
    else feedback.push("Resume is too short");

    if (text.toLowerCase().includes("javascript")) score += 20;
    else feedback.push("Add JavaScript skill");

    if (text.toLowerCase().includes("project")) score += 20;
    else feedback.push("Mention projects");

    if (text.toLowerCase().includes("experience")) score += 20;
    else feedback.push("Add experience section");

    if (text.toLowerCase().includes("education")) score += 20;
    else feedback.push("Add education details");

    res.json({
        score,
        words,
        feedback
    });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});