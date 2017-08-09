var db = require("../models");

module.exports = function(app) {
	app.get("/", function(req, res) {
		db.Rental.findAll({
			include: [db.Tenant]
		}).then(function(results) {
			res.json(results);
		});
	});


	app.post("/apply", function(req, res){
		db.kdsApplication.create({
			rentalID: req.body.rentalID,
			salutation: req.body.salutation,
			firstName: req.body.firstName,
			middleName: req.body.middleName,
			lastName: req.body.lastName,
			maritalStatus: req.body.maritalStatus,
			phone: req.body.phone,
			email: req.body.email,
			leaseLength: req.body.leaseLength,
			numOccupants: req.body.numOccupants,
			moveInDt: req.body.moveInDt,
			curAddr1: req.body.curAddr1,
			curAddr2: req.body.curAddr2,
			curAddrCity: req.body.curAddrCity,
			curAddrState: req.body.curAddrState,
			curAddrZip: req.body.curAddrZip,
			curAddrYrs: req.body.curAddrYrs,
			curAddrRent: req.body.curAddrRent,
			curAddrNoticeDays: req.body.curAddrNoticeDays,
			Reasonformoving: req.body.Reasonformoving,
			empStatus: req.body.empStatus,
			empIncome: req.body.empIncome,
			empAddlIncome: req.body.empAddlIncome,
			empAddlIncomeSource: req.body.empAddlIncomeSource,
			empEmployer: req.body.empEmployer,
			empJobTitle: req.body.empJobTitle,
			empAddr1: req.body.empAddr1,
			empAddr2: req.body.empAddr2,
			empAddrCity: req.body.empAddrCity,
			empAddrState: req.body.empAddrState,
			empAddrZip: req.body.empAddrZip,
			empEmployedYrs: req.body.empEmployedYrs,
			empSupervisor: req.body.empSupervisor,
			empPhone: req.body.empPhone,
			petNum: req.body.petNum,
			petDog: req.body.petDog,
			petCat: req.body.petCat,
			petBird: req.body.petBird,
			petFish: req.body.petFish,
			petOther: req.body.petOther,
			petOtherDesc: req.body.petOtherDesc,
			petSpayed: req.body.petSpayed,
			vehNum: req.body.vehNum,
			vehSedan: req.body.vehSedan,
			vehSUV: req.body.vehSUV,
			vehTruck: req.body.vehTruck,
			vehMotorcycle: req.body.vehMotorcycle,
			vehOther: req.body.vehOther,
			vehOtherDesc: req.body.vehOtherDesc
		}).then(function(){
			res.redirect('/');
		});
	});


	app.post("/maintenance", function(req, res){
		db.kdsMaintenance.create({
			rentalID: req.body.rentalID,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			phone: req.body.phone,
			email: req.body.email,
			maintenanceCategory: req.body.maintenanceCategory,
			maintenanceIssue: req.body.maintenanceIssue,
			applItem: req.body.applItem,
			applMake: req.body.applMake,
			applModel: req.body.applModel,
			requestDt: req.body.requestDt
		}).then(function(){
			res.redirect('/');
		});
	});


}

