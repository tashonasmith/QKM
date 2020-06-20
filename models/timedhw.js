/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  // eslint-disable-next-line quotes
  var Timedhw = sequelize.define('Timedhw', {
    assignment: DataTypes.STRING,
    minutes_required: DataTypes.INTEGER,
    minutes_completed: DataTypes.INTEGER
  });

  //code to put foreign key on the “belongsTo” tables
  Timedhw.associate = function(models) {
    models.Timedhw.belongsTo(models.Kids, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.Timedhw.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Timedhw;
};
