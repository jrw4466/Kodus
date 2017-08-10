module.exports = function(sequelize, Sequelize) {

	var Application = sequelize.define('Application', {

		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},

		salutation: {
			type: Sequelize.STRING
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
			type: Sequelize.INTEGER,
			allowNull: false
		},

		numOccupants: {
			type: Sequelize.INTEGER,
			allowNull: false
		},

		moveInDt: {
			type: Sequelize.DATE,
			allowNull: false
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
			type: Sequelize.INTEGER,
			allowNull: true
		},

		curAddrYrs: {
			type: Sequelize.INTEGER,
			allowNull: true
		},

		curAddrRent: {
			type: Sequelize.INTEGER,
			allowNull: true
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
			type: Sequelize.INTEGER,
			allowNull: false

		},

		empAddlIncome: {
			type: Sequelize.INTEGER,
			allowNull: true
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
			type: Sequelize.STRING
		},

		empEmployedYrs: {
			type: Sequelize.STRING
		},

		empSupervisor: {
			type: Sequelize.STRING
		},

		empPhone: {
			type: Sequelize.STRING
		},

		petNum: {
			type: Sequelize.INTEGER
		},

		petDog: {
			type: Sequelize.BOOLEAN
		},

		petCat: {
			type: Sequelize.BOOLEAN
		},

		petBird: {
			type: Sequelize.BOOLEAN
		},

		petFish: {
			type: Sequelize.BOOLEAN
		},

		petOther: {
			type: Sequelize.BOOLEAN
		},

		petOtherDesc: {
			type: Sequelize.STRING
		},

		petSpayed: {
			type: Sequelize.STRING
		},

		vehNum: {
			type: Sequelize.INTEGER,
			allowNull: false
		},

		vehSedan: {
			type: Sequelize.BOOLEAN
		},

		vehSUV: {
			type: Sequelize.BOOLEAN
		},

		vehTruck: {
			type: Sequelize.BOOLEAN
		},

		vehMotorcycle: {
			type: Sequelize.BOOLEAN
		},

		vehOther: {
			type: Sequelize.BOOLEAN
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

	Application.associate = function(models) {
    // Application should belong to just one Rental
    Application.belongsTo(models.Rental);
  };

	return Application;
};