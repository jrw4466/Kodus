module.exports = function(sequelize, DataTypes) {
  var Properties = sequelize.define("Properties", {

    propertyName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },

    zip:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len:[1]
      }
    },

    monthlyRent:{
      type: DataTypes.INTEGER
      allowNull: false,
      validate: {
        len:[1]
      }
    },

    isVacant:{
      type: DataTypes.BOOLEAN
      allowNull: false
      defaultValue: false
      validate: {
        len:[1]
      }
    },

    isManaged:{
      type: DataTypes.BOOLEAN
      allowNull: false,
      defaultValue: false
      validate: {
        len:[1]
      }
    }

  });

