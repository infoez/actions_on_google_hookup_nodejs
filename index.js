"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const index = express();

index.use(
    bodyParser.urlencoded({
        extended: true
    })
);

index.use(bodyParser.json());

index.post("/webhook", function (req, res) {
    var speech =
        req.body.queryResult &&
        req.body.queryResult.parameters &&
        req.body.queryResult.parameters.echoText ? req.body.queryResult.parameters.echoText : "Seems like some problem. Speak again.";
    return res.json({
        fulfillmentText: speech + " : from my own backend side ",
        source: "Webhook Test"
    });
});

index.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});

