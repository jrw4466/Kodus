var db = require("../models");

module.exports = function(app) {
	app.get("/", function(req, res) {
		db.Rental.findAll({
			include: [db.Tenant]
		}).then(function(results) {
			res.json(results);
		});
	});

module.exports = function(app) {
	app.get("/landlords", function(req, res) {
		db.Landlord.findAll({
			include: [db.Rental]
		}).then(function(results) {
			res.json(results);
		});
	});

};