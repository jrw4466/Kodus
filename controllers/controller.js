var db = require("../models");
var capitalize = require('../utils/string_utils').capitalize;

module.exports = function(app) {

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

	// UNNEEDED: use restless endpoints below:

	// app.post("/apply", function(req, res){
	// 	db.Application.create(req.body).then(function() {
	// 		res.redirect('/thankyou');
	// 	});
	// });


	// Express RESTLESS:
	// based on Flask-restless-
	//  http://flask-restless.readthedocs.io/en/stable/quickstart.html

	// Automated GET rotue for retrieving all items of a certain model
    app.get("/api/:model_name", function(req, res) {
	  // TODO: take filters as GET params like '/api/:model_name?price=20' and insert into a 'where' clause
	  let model_name = req.params.model_name;
  	  let sequelize_model_name = capitalize(model_name);
	  db[sequelize_model_name].findAll({})
        .then(function(results) {
          res.json(results);
        });
    });

	// Automated GET rotue for retrieving one item of a certain model
    app.get("/api/:model_name/:id", function(req, res) {
	  let model_name = req.params.model_name;
  	  let sequelize_model_name = capitalize(model_name);
      db[sequelize_model_name].findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(result) {
        res.json(result);
      });
    });

	// Automated POST endpoint; req.body must include the required field names to make an object,
	// but this endpoint will work for any sequelize model
	app.post("/:model_name", function(req, res){
		let model_name = req.params.model_name;
		// this takes a route like /maintenance and turns it into the model name Maintenance
		let sequelize_model_name = capitalize(model_name);

		// action map maps an incoming new object with the action to perform afterwrds.
		// we won't need this when we move to react :)
		let ACTION_MAP = {
			maintenance: {callback: res.redirect, args: ['/thankyoumaintenance']},
			application: {callback: res.redirect, args: ['/thankyou']},
		}
		db[sequelize_model_name].create(req.body).then(function() {
			let callback = ACTION_MAP[model_name].callback;
			let args = ACTION_MAP[model_name].args;
			// https://stackoverflow.com/questions/1316371/converting-an-array-to-a-function-arguments-list
			callback.apply(this, args);
		});
	});

	// Automated PUT route for updating items
	app.put("/api/:model_name", function(req, res) {
		let model_name = req.params.model_name;
		// this takes a route like /maintenance and turns it into the model name Maintenance
		let sequelize_model_name = capitalize(model_name);
		db[sequelize_model_name].update(req.body, {
		  where: {
			id: req.body.id
		  }
		})
		.then(function(result) {
			res.json(result);
		});
	});

	// automated DELETE endpoint
	app.delete("/:model_name/:id", function(req, res){
		let model_name = req.params.model_name;
		let sequelize_model_name = capitalize(model_name);
		db[sequelize_model_name].destroy({
	      where: {
	        id: req.params.id
	      }
	    })
		.then(function(result) {
	      res.json(result);
	    });
	  });
	});
};
