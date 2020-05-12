var express = require("express");
var hdbext = require("@sap/hdbext");
var xsenv = require("@sap/xsenv");
var router = express.Router();
const services = xsenv.getServices({
	hanaConfig: {
		tag: "hana"
	}
});

router.get('/', (req, res) => {
	hdbext.createConnection(services.hanaConfig, (err, client) => {
		if (err) {
			return res.status(500).send(err);
		} else {
			client.prepare(`SELECT * FROM "tables.students"`, (err, stmt) => {
				stmt.exec([], (err, rows) => {
					if (err) {
						return res.status(500).send(err);
					} else {
						return res.status(200).send(rows);
					}
				})
			})
		}
	})
});
router.post('/', (req, res) => {
	hdbext.createConnection(services.hanaConfig, (err, client) => {
		if (err) {
			return res.status(500).send(err);
		} else {
			client.prepare(`INSERT INTO "tables.students" VALUES(?,?,?,?,?,?)`, (err, stmt) => {
				if (err) {
					return res.status(500).send(err);
				} else {
					stmt.exec([req.body.id, "Test01", "Location01", "Male/Female", "99", 999], (err, rows) => {
						console.log(rows);
						if (err) {
							return res.status(500).send(err);
						} else {
							return res.status(200).json(rows).send();
						}
					})
				}
			})
		}
	})
})

module.exports = router;