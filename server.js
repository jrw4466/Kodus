// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================================
// There's some risk of overwriting on accident, but imports are always constants, so make them literally consts
// In fact if you look at 'path' below, there's a huge risk of someone not seeing this at the top and declaring a var path when making filepaths
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
// Requiring our models for syncing
const db = require("./models");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Override with POST having ?_method=(DELETE or UPDATE)
app.use(methodOverride("_method"));

// Serve static content for the app from the "public" directory in the application
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them
require("./controllers/controller.js")(app);


// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
