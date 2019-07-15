module.exports = function(sequelize, DataTypes) {
  var CustomersBurgers = sequelize.define("customers_burgers", {
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

  return CustomersBurgers;
};
