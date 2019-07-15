module.exports = function(sequelize, DataTypes) {
  var Customers = sequelize.define("customers", {
    // Giving the Customers model columns
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
    }
  });

  Customers.associate = function(models) {
    // A Challenge many to many connection to Users with UserChallenges
    Customers.belongsToMany(models.burgers, {
      as: "customer",
      through: "customers_burgers",
      onDelete: "cascade"
    });
  };

  return Customers;
};
