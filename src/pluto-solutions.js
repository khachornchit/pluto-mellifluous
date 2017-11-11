var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('plutosoltionsmellifluous', ['plutosoltionsmellifluous']);
var serverPort = 9004;

app.use(express.static(__dirname + "/pluto-solutions-mellifluous"));

app.listen(serverPort);
console.log("Pluto solutions server running on port : " + serverPort);