var db = require("../models");

module.exports = function(app) {
// 	app.get("/", function(req, res) {
// 		db.Rental.findAll({
// 			include: [db.Tenant]
// 		}).then(function(results) {
// 			res.json(results);
// 		});
// 	});
// }

app.get("/", function(req, res) {
	db.Rental.findAll({}).then(function(results) {
		var hbsObject = {
			rentals: results
		};
		res.render("index", hbsObject);
	});
});
};