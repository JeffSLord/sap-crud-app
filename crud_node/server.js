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

// Express Middleware, executes every time a request is received
app.use(function (req, res, next) {
  // Track Timestamps of requests
  // INSERT INTO REQUEST_TABLE VALUES (Date.now())
  // Log with @sap/logging to show request in application logs
  // Log with @sap/audit-logging to show request in audit-logs
  next();
});


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