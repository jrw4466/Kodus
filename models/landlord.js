module.exports = function(sequelize, DataTypes) {
  var Landlord = sequelize.define("Landlord", {

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

    // freezeTableName: true,

    // tableName: "Landlord"

  });
    Landlord.associate = function(models) {
    // We're saying that a landlord should belong to a Property
    // A landlord can't be created without a Property due to the foreign key constraint
    Landlord.hasmany(models.Properties, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};


