/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";

var https = require("https");
var server = require("http").createServer();
var express = require('express');
var xsenv = require("@sap/xsenv");
var bodyParser = require('body-parser');


https.globalAgent.options.ca = xsenv.loadCertificates();
global.__base = __dirname + "/";
var init = require(global.__base + "utils/initialize");
////// EXPRESS //////
var app = init.initExpress();
app.use(bodyParser.urlencoded({ extended: false }));
////// ROUTES ///////
var router = require('./routes')(app, server);
////// XSJS //////
init.initXSJS(app);

/////// START SERVER //////
var port = process.env.PORT || 3000;
server.on("request", app);
server.listen(port, function () {
	console.info("HTTP Server: " + server.address().port);
});