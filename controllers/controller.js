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
app.get("/apply", function(req, res) {
	db.Rental.findAll({}).then(function(results) {
		var hbsObject = {
			rentals: results
		};
		res.render("apply", hbsObject);
	});
});

app.get("/users/register", function(req, res) {
	db.Rental.findAll({}).then(function(results) {
		var hbsObject = {
			rentals: results
		};
		res.render("register", hbsObject);
	});
});

app.get("/rental", function(req, res) {
	db.Rental.findAll({}).then(function(results) {
		var hbsObject = {
			rentals: results
		};
		res.render("property", hbsObject);
	});
});

app.get("/maintenance", function(req, res) {
	db.Rental.findAll({}).then(function(results) {
		var hbsObject = {
			rentals: results
		};
		res.render("maintenance", hbsObject);
	});
});

app.get("/users/login", function(req, res) {
	db.Rental.findAll({}).then(function(results) {
		var hbsObject = {
			rentals: results
		};
		res.render("login", hbsObject);
	});
});

app.get("/users/register", function(req, res) {
	db.Rental.findAll({}).then(function(results) {
		var hbsObject = {
			rentals: results
		};
		res.render("register", hbsObject);
	});
});

app.get("/users/details", function(req, res) {
	db.Rental.findAll({}).then(function(results) {
		var hbsObject = {
			rentals: results
		};
		res.render("details", hbsObject);
	});
});

app.get("/thankyou", function(req, res) {
	db.Rental.findAll({}).then(function(results) {
		var hbsObject = {
			rentals: results
		};
		res.render("thankyou", hbsObject);
	});
});

app.get("/thankyoumaintenance", function(req, res) {
	db.Rental.findAll({}).then(function(results) {
		var hbsObject = {
			rentals: results
		};
		res.render("thankyoumaintenance", hbsObject);
	});
});

app.post("/apply", function(req, res){
		db.Application.create(req.body).then(function() {
			res.redirect('/thankyou');
		});
	});

app.post("/maintenance", function(req, res){
		db.Maintenance.create(req.body).then(function() {
			res.redirect('/thankyoumaintenance');
		});
	});
};
