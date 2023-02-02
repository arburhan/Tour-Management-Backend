const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});

// routes
const tourRoute = require('./routes/v1/tour.routes');

// posting to database
app.use('/api/v1/tours', tourRoute)

module.exports = app;