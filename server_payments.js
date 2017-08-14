
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================================
var express = require("express");
var path = require("path");
var braintree = require("braintree");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "m6mfjf8ryfd29j7z",
  publicKey: "tnpgjzjvfs637n4m",
  privateKey: "41779fcbcf665ad91462d9737a95f28e"
});

// Requiring our models for syncing
var db = require("./models");
//db.sequelize.sync();

// Override with POST having ?_method=(DELETE or UPDATE)
app.use(methodOverride("_method"));

// Serve static content for the app from the "public" directory in the application
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/paymentPage.html'))
});

app.get('/client_token', function(req, res) {
    gateway.clientToken.generate({}, function(err, response) {
        res.send(response.clientToken);
    })
})

app.post('/checkout', function(req, res) {
    let nonce = req.body.payment_method_nonce;
    gateway.transaction.sale({
        amount: "10.00",
        paymentMethodNonce: nonce,
        options: {
            submitForSettlement: true
        }
    }, function(err, result) {
        if (err) {
            console.log(err);
        }
        console.log(result);
    });
})
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
