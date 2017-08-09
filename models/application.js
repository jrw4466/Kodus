module.exports = function(sequelize, Sequelize) {

	var kdsApplication = sequelize.define('kdsApplication', {

		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},

		firstName: {
			type: Sequelize.STRING,
			notEmpty: true
		},

		middleName: {
			type: Sequelize.STRING
		},

		lastName: {
			type: Sequelize.STRING,
			notEmpty: true
		},

		maritalStatus: {
			type: Sequelize.STRING
		},

		phone: {
			type: Sequelize.STRING
		},

		email: {
			type: Sequelize.STRING,
			validate: {
				isEmail: true
			}
		},

		kdsNum: {
			type: Sequelize.STRING
		},

		kdsAddr: {
			type: Sequelize.STRING
		},

		kdsCity: {
			type: Sequelize.STRING
		},

		kdsState: {
			type: Sequelize.STRING
		},

		leaseLength: {
			type: Sequelize.INTEGER
		},

		numOccupants: {
			type: Sequelize.INTEGER
		},

		moveInDt: {
			type: Sequelize.DATE
		},

		curAddr1: {
			type: Sequelize.STRING
		},

		curAddr2: {
			type: Sequelize.STRING
		},

		curAddrCity: {
			type: Sequelize.STRING
		},

		curAddrState: {
			type: Sequelize.STRING
		},

		curAddrZip: {
			type: Sequelize.INTEGER
		},

		curAddrYrs: {
			type: Sequelize.INTEGER
		},

		curAddrRent: {
			type: Sequelize.INTEGER
		},

		curAddrNoticeDays: {
			type: Sequelize.STRING
		},

		curAddrReason: {
			type: Sequelize.TEXT
		},

		empStatus: {
			type: Sequelize.STRING
		},

		empIncome: {
			type: Sequelize.INTEGER
		},

		empAddlIncome: {
			type: Sequelize.INTEGER
		},

		empAddlIncomeSource: {
			type: Sequelize.STRING
		},

		empEmployerName: {
			type: Sequelize.STRING
		},

		empJobTitle: {
			type: Sequelize.STRING
		},

		empAddr1: {
			type: Sequelize.STRING
		},

		empAddr2: {
			type: Sequelize.STRING
		},
		empAddrCity: {
			type: Sequelize.STRING
		},

		empAddrState: {
			type: Sequelize.STRING
		},

		empAddrZip: {
			type: Sequelize.INTEGER
		},

		empEmployedYrs: {
			type: Sequelize.INTEGER
		},

		empSupervisor: {
			type: Sequelize.STRING
		},

		empPhone: {
			type: Sequelize.STRING
		},

		petNumn: {
			type: Sequelize.INTEGER
		},

		petDog: {
			type: Sequelize.STRING
		},

		petCat: {
			type: Sequelize.STRING
		},

		petBird: {
			type: Sequelize.STRING
		},

		petFish: {
			type: Sequelize.STRING
		},

		petOther: {
			type: Sequelize.STRING
		},

		petOtherDesc: {
			type: Sequelize.STRING
		},

		petSpayed: {
			type: Sequelize.STRING
		},

		vehNum: {
			type: Sequelize.INTEGER
		},

		vehSedan: {
			type: Sequelize.STRING
		},

		vehSUV: {
			type: Sequelize.STRING
		},

		vehTruck: {
			type: Sequelize.STRING
		},

		vehMotorcycle: {
			type: Sequelize.STRING
		},

		vehOther: {
			type: Sequelize.STRING
		},

		vehOtherDesc: {
			type: Sequelize.STRING
		},
		applicationDt: {
			type: Sequelize.DATE
		},
	}, {
		  timestamps: false
	});

	return kdsApplication;
};