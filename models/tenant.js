module.exports = function(sequelize, DataTypes) {
  var Tenant = sequelize.define("Tenant", {

    lastName: {
  	  type: DataTypes.STRING
  	  allowNull: false,
      validate: {
        len: [1]
      }
    },

    firstName: {
      type: DataTypes.STRING
  	  allowNull: false,
      validate: {
        len: [1]
      }
    },

    email:{
      type: DataTypes.STRING
  	  allowNull: false,
      validate: {
        len: [1]
      }
    },

    phone:{
      type: DataTypes.STRING
      allowNull: false,
      validate: {
      	len: [1]
      }
    },

    freezeTableName: true,

    tableName: "Tenant"

  });
    Tenant.associate = function(models) {
    // We're saying that a Tenant should belong to a Property
    // A Tenant can't be created without a Property due to the foreign key constraint
    Tenant.belongsTo(models.Properties, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};


