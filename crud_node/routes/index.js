module.exports = (app, server) => {
	// app.use("/api/default", require("./default.route"));
	// app.use('/api/scopes', require("./scopes.route"));
	app.use("/api/students", require("./students.route"));
	app.use("/api/test", (req, res) => {
		res.send("test worked");
	});
};