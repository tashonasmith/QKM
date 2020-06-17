/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
    var Kids = sequelize.define('Kids', {
      title: DataTypes.STRING,
    });
  
    Kids.associate = function(models) {
      models.Kids.belongsTo(models.User, {
        onDelete: 'CASCADE',
        foreignKey: {
          allowNull: false,
        },
      });
    };
  
    return Kids;
  };
  