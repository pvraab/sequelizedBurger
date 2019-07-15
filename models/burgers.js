module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("burgers", {
    // Define columns
    burgerName: {
      type: DataTypes.STRING,
      allowNull: false,
      // len is a validation that checks that our burgerName is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    },
    isDevoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
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

  Burgers.associate = function(models) {
    Burgers.belongsToMany(models.customers, {
      as: "burger",
      through: "customers_burgers",
      onDelete: "CASCADE"
    });
  };

  return Burgers;
};
