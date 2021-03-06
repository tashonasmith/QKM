module.exports = function(sequelize, DataTypes) {
    var Chores = sequelize.define('Chores', {
      chore: DataTypes.STRING
    });
    Chores.associate = function(models) {
      models.Chores.belongsTo(models.Kids, {
        onDelete: 'CASCADE',
        foreignKey: {
          allowNull: false
        }
      });
      models.Chores.belongsTo(models.Users, {
        onDelete: 'CASCADE',
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Chores;
};