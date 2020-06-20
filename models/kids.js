/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
module.exports = function(sequelize, DataTypes) {
    var Kids = sequelize.define('Kids', {
      title: DataTypes.STRING,
    });
  
    Kids.associate = function(models) {
      models.Kids.belongsTo(models.Users, {
        onDelete: 'CASCADE',
        foreignKey: {
          allowNull: false,
        },
      });
      models.Kids.hasMany(models.Timedhw, {
        onDelete: 'CASCADE',
      });
      models.Kids.hasMany(models.Taskedhw, {
        onDelete: 'CASCADE',
      });
      models.Kids.hasMany(models.Chores, {
        onDelete: 'CASCADE',
      });
      models.Kids.hasMany(models.Dietary, {
        onDelete: 'CASCADE',
      });
    };
  
    return Kids;
  };
  