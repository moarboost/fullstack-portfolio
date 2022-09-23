// IMPORT DEPENDENCIES
const express = require("express");
const cors = require("cors");

// IMPORT JSON FILES
const projects = require("./projects.json");
const about = require("./about.json");

// CREATE OUR APP OBJECT
const app = express();

// SET UP MIDDLEWARE
app.use(cors());

// HOME ROUTE FOR TESTING OUR APP
app.get("/", (req, res) => {
    res.send("sup gents");
});

// ROUTE FOR RETRIEVING PROJECTS
app.get("/projects", (req, res) => {
    // SEND PROJECTS VIA JSON
    res.json(projects);
});

// ROUTE FOR RETRIEVING ABOUT INFO
app.get("/about", (req, res) => {
    // SEND PROJECTS VIA JSON
    res.json(about);
});

// DECLARE A VARIABLE FOR OUR PORT NUMBER
const PORT = process.env.PORT || 4000;

// TURN ON THE SERVER LISTENER
app.listen(PORT, () => console.log(`hearin' chet on PORT: ${PORT}`));