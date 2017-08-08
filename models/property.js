module.exports = function(sequelize, DataTypes) {
  var Property = sequelize.define("Property", {

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

    // freezeTableName: true,

    // tableName: "Property"

  });

Property.associate = function(models) {
    // We're saying that a Property should belong to a Landlord
    // A Property can't be created without a Landlord due to the foreign key constraint
    Property.belongsTo(models.Landlord, {
      foreignKey: {
        allowNull: false
      }
    });
  };

 Property.associate = function(models) {
    // Property Author with Tenant
   
    Property.hasMany(models.Tenants);
  };


  return Property;
}